지난 시간 spring aop와 self-invocation의 관계를 살펴봤다.

그러면서 동일한 클래스에서 내부 호출로 타 메서드를 호출하면 aop(@Cacheable, @Transactional ... etc)가 작동 안할 수 있다는 사실도 깨달았다.

이유는 알았고.. 어떻게 해결할 수 있을까?

# Self-Invocation 해결법

이번 시간에 총 3가지의 방법을 얘기해보려 한다.

## 1. Proxy Bean(self)를 주입받아 사용

앞서서 얘기할 때, 문제가 proxy bean이 아닌 `this(real-subject)에서 메서드를 호출`하기에 `aop 로직을 타지 못했던 것`이였다.

그렇기에 내부에서 호출하더라도 aop 로직을 타도록, this로 메서드 호출하는 것이 아닌, `proxyBean.method`를 호출하면 해결될 것이다.

다시 한번 기존 예제 코드를 가져와보자.

```java
// BeforeLog.class
public @interface BeforeLog {
}

//AopSample.class
@Aspect
@Component
@Slf4j
public class AopSample {

    @Before("@annotation(BeforeLog)")
    public void beforeLog(JoinPoint joinPoint) {
        log.info("beforeLog : {}", joinPoint.getSignature().getName());
    }
}

```

```java
//SelfInvocation.calss
@Slf4j
@Component
public class SelfInvocation {

    @BeforeLog
    public void selfInvocationCall() {
        log.info("call selfInvocation");
        this.method1();
    }

    @BeforeLog
    public void method1() {
        log.info("call method 1");
    }

    @BeforeLog
    public void method2() {
        log.info("call method 2");
    }

}
```

`SelfInvocation.class`에 해당 코드를 추가하면 된다.

```java
    // setter 주입
    private SelfInvocation selfInvocation;

    @Autowired
    public void setCallServiceV1(SelfInvocation selfInvocation) {
        this.selfInvocation = selfInvocation;
    }
```

```java
    // Autowired와 유사하지만 빈 이름을 통한 주입
    @Resource(name = "selfInvocation")
    private SelfInvocation selfInvocation;
```

```java
    // 필드 주입
    @Autowired
    private SelfInvocation selfInvocation;
```

이런 식으로 자기 자신을 주입받고 실행 구문에서 주입 받은 빈을 통해 실행하면 프록시를 거치며 원하는 로직대로 동작한다.

```java
    @BeforeLog
    public void selfInvocationCall() {
        log.info("call selfInvocation");
        selfInvocation.method1();
    }
```

생성자 주입의 경우는 빈이 생성되는 시점에 순환 참조가 발견되며 스프링부트가 뜨질 못한다.

더불어, 해당 방식을 사용하고자 하면 순환 참조를 허용하는 설정을 추가로 해야한다.

```java
// application.yml
spring:
  main:
    allow-circular-references: true
```

기존 테스트를 실행하면 원하는 결과가 나온 것을 볼 수 있다.

```java
2022-11-20 22:58:12.326  INFO 19354 --- [           main] org.example.aop.AopSample                : beforeLog : selfInvocationCall
2022-11-20 22:58:12.354  INFO 19354 --- [           main] org.example.aop.SelfInvocation           : call selfInvocation
2022-11-20 22:58:12.354  INFO 19354 --- [           main] org.example.aop.AopSample                : beforeLog : method1
2022-11-20 22:58:12.354  INFO 19354 --- [           main] org.example.aop.SelfInvocation           : call method 1

```

## 2. Context에서 빈을 받아와서 사용

```java
@Slf4j
@Component
@RequiredArgsConstructor
public class SelfInvocation {

    private final ObjectProvider<SelfInvocation> selfInvocation;

    @BeforeLog
    public void selfInvocationCall() {
        log.info("call selfInvocation");
        SelfInvocation proxyBean = selfInvocation.getObject();
        proxyBean.method1();
    }
}
```

ObjectProvider는 스프링컨테이너에 bean을 요청하면 찾아주는 기능을 제공한다.
사용하는 시점에 getObject를 통해 받아오기에 일종의 지연로딩으로 생각할 수 있다.

해당 방식도 예상한 결과를 만들어낸다.

## 3. 애초에 self-invocation이 일어나지 않는 레이어 구조로 변경

```java
@Slf4j
@Component
@RequiredArgsConstructor
public class SelfInvocation {

    private final InnerAop innerAop;

    @BeforeLog
    public void selfInvocationCall() {
        log.info("call selfInvocation");
        innerAop.method1();
    }
}
```

```java
@Component
@Slf4j
public class InnerAop {
    @BeforeLog
    public void method1() {
        log.info("call method 1");
    }
}
```

위와 같은 방식으로 레이어를 분리하여 관리한다면 불필요한 로직을 생략하며 사용할 수 있다.

아직까지 어떤 방식이 제일 바람직하다라는 질문에는 답이 어렵다.
하지만, 한 실험에 따르면 `3번 방식 레이어 구조 변경`을 했을 시 성능의 향상을 측정했다고 한다.

reference by

https://ch4njun.tistory.com/265
https://velog.io/@dhk22/Spring-Spring-AOP-%EB%82%B4%EB%B6%80-%EB%A9%94%EC%84%9C%EB%93%9C-%ED%98%B8%EC%B6%9C%EC%8B%9C-%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0

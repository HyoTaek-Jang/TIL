자바에서 쓰던 버릇 남 못 준다고, 코틀린에서 `@Autowired`를 사용하다가 오잉 또잉 했던 경험이 생겨 한번 정리해봅니다

---

테스트 코드에서 @Autowired를 쓰려고 했더니
[autoriwrd 오류](img/autowired%20%EC%98%A4%EB%A5%98%20.png)
의 모습을 보았습니다!

`Property must be initialized or be abstract`

해당 오류가 나오는 이유는 Non-null로 선언한 프로퍼티를 선언과 동시에 초기화 하지 않았기 때문입니다.

하지만. 우리는 @Autowired로 Bean이 생성된 이후 값을 할당할 것이기에 코틀린에게 "워워~"를 외쳐야 하죠!

그 방식에 있어서 두 가지를 제공합니다.

*lateinit*과 *by lazy*입니다.

## lateinit

사용법 예시 : `lateinit var test: String`

위와 같이 선언했으면 사용 전에는 무!조!건! 초기화가 되야합니다. 초기화가 안되있다면 오류를 마주합니다.

`lateinit property subject has not been initialized`

lateinit은 `var로 선언된 변수`에 사용이 가능합니다.

lateinit은 여러번의 초기화가 가능해야 하기에 가변의 var를 사용합니다.

lateinit은 모든 변수가 가능한 건 아니고, `primitive type에서는 활용이 불가능`합니다.

이유는 lateinit에서 null 여부를 통해 값을 바인딩하는데 primitive 타입에선 null이 존재하지 않기에 활용이 불가합니다.

## by lazy

lazy는 `불변의 val`에서만 사용이 가능합니다.

lazy는 기본 `Synchronized`로 동작합니다.

사용법 예시 :

```kotlin
  val name: String by lazy {
    println("자 어디 한번 초기화 해봅시다.")
    "택택"
  }

  @Test
  fun lazyTest() {
    println("1")
    println("2")
    println(name)
    println("3")
  }
```

->

```
1
2
자 어디 한번 초기화 해봅시다.
택택
3
```

딱 보면 이해가 쉽게 될 수 있습니다. lazy 객체를 실제로 사용하는 시점에 중괄호의 구문이 실행되며 값이 바인딩 됩니다.

---

reference by
https://todaycode.tistory.com/171
https://thdev.tech/kotlin/2018/03/25/Kotlin-lateinit-lazy/

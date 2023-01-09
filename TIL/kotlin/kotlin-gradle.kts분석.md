kotlin 문법 강의를 가볍게 살펴봤습니다. 시간이 지나고, 사용하지를 않으니 아무것도 기억이 안나 `realWorld` 프로젝트를 만들면서 간단하게 코프링을 사용해보려고 힙ㄴ;디.

그 과정의 가장 첫 번째로 spring starter가 만들어준 gradle을 분석하는 시간을 가져보겠습니다.

하단 gradle.kts는 starter(http://start.spring.io/)가 만들어 준 gradle이며 번호를 붙이고 각 구문이 어떤 역할과 의미가 있는지 살펴보겠습니다.

```kts
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.7.7" // (1) 스프링 부트 사용을 위한 플러그인
	id("io.spring.dependency-management") version "1.0.15.RELEASE" // (2) 스프링 부트 버전에 따른 하위 디펜더시 관리를 위한 플러그인
	kotlin("jvm") version "1.6.21" // kotlin은 멀티 플랫폼 언어이기에 어떤 것을 사용할 지 지정해야한다.
	kotlin("plugin.spring") version "1.6.21" // (3) allOpen을 위한 플러그인
	kotlin("plugin.jpa") version "1.6.21" // (4) noArgs를 위한 플러그인
}

group = "com.kopring" // 그룹명 설정
version = "0.0.1-SNAPSHOT" // 버전 설정
java.sourceCompatibility = JavaVersion.VERSION_17 // (5) 컴파일에서 사용하는 JDK 버전

repositories {
	mavenCentral() // mavenCentral에서 dependency를 읽어오겠다.
}

dependencies { // 의존성 주입
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-security")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	runtimeOnly("com.h2database:h2")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.springframework.security:spring-security-test")
}

tasks.withType<KotlinCompile> { // compile 옵션 및 compile시 java 버전 설정
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "17"
	}
}

tasks.withType<Test> { // 테스트 task에 대한 설정
	useJUnitPlatform()
}

```

---

1. 기본적으로 `springboot를 사용`하기 위해 설정한 plugin, 이 경우 `2.7.7` 버전을 사용합니다.

2. (1)에서 정의한 springboot 버전을 기반으로 `spring 관련 의존성들의 버전을 자동으로 관리`할 수 있게 만들어줍니다. 그렇기에 하위 dependencies에서 spirng 관련 의존성의 버전을 명시하지 않아도, `2.7.7`버전과 호환되도록 자동 설정됩니다.

3. spring aop의 경우 상속을 통해 프록시 객체를 생성합니다. 따라서 `aop를 사용하기 위해선 상속이 필수적`인데, 기본적으로 kotlin의 모든 클래스는 final이기에 `상속을 위해선 open`을 해줘야 합니다. 해당 플러그인을 통해 특정 어노테이션이 있는 클래스에 대해 all-open을 해줍니다.

   all-open plugin(https://kotlinlang.org/docs/all-open-plugin.html#spring-support)

4. jpa를 사용함에 있어서 `Entity 클래스는 반드시 no-args 생성자가 필요`합니다. kotlin은 해당 문제를 해결하기 위해 no-arg plugin을 wrapping한 plugin.jpa plugin을 제공합니다. 하지만 직접 코드 상으로 접근은 안되고, `reflection으로만 사용이 가능`합니다.

   no-arg plugin(https://kotlinlang.org/docs/no-arg-plugin.html#command-line-compiler)

5. `sourceCompatibility`는 `compile에서 사용하는 jdk 버전`입니다. 비슷하게 `targetCompatibility`는 생성된 클래스 파일의 버전이며, 여기서 `설정한 버전 이상의 java를 사용`해야합니다.

---

https://stackoverflow.com/questions/41113268/

https://dghg.tistory.com/m/31

https://kotlinlang.org/docs/no-arg-plugin.html#command-line-compiler

https://kotlinlang.org/docs/all-open-plugin.html#spring-support

https://sabarada.tistory.com/180

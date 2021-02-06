# TIL

TIL

## 2020년 6월

### 20년 6월 19일

- TIL 레포 깃 연동
- 제로초 git 강의에 나온 git flow를 momentum clone에 적용 (기능별 브런치 생성 및 마스터로 뿌리기)
- 날씨 api를 사용하기 위해 현재 위치 가져오기 (For JS)
  - navigator.geolocation.getCurrentPositon(사용자가 허락할 시 함수, 거절할때 함수);

### 20s년 6월 22일

- 날씨 제작 완료 api 사용 (자세한 내용은 weather.js)
- 클래스리스트 add 를 통해 날씨 아이콘 넣음
- Math.round(~) -> 반올림
- 200 < x < 300 -> 조건문은 (200 < x && x < 300)

### 20년 6월 22일

- short url 플젝 시작.
- 폰트 적용 @font-face{font-famaily:name src:url~format('type')}
- flex하고 자식에 width 100%주면 나머지 공간 다 먹음

### 20년 6월 23일

- 마진이 잘 안먹는다 하면 마진겹침 생각해봐 해결법으로 clearfix::before or after
- 마진겹칩은 인접한 블럭들끼리, 상하단만 생김. 해결하려면 위에 겹친거에 clearfix해줘야해
- shorten url project 콘텐츠 부분까지 했음.

### 20년 6월 24일

- 마진은 width height가 있어야 먹음
- 마진 겹침 부모에 clearfix 먹여서 해결
- flex로 가로는 정렬이 되는데 세로쪽을 어케 할지 모르겠네 space-between하고 싶은데.

## 2020년 7월

### 20년 7월 4일

- 풀스크린 shorten url 페이지 완성은 했다만 반응형이 똥이다
- 이렇게 어려울 줄이야... 일단 만들어 놓은거로 하나씩 고치면서 스크린 줘서 반응형 하는데 다른 사람 예제를 보니까 내껀 똥이다.
- 그 사람 코드 뜯어보니까 grid랑 flex를 겁나 쓰길래 나는 grid를 모른단 말이야 오늘 공부중이다...
- 해외 유튜브가 확실히 정보가 많아서 잘 봐야겠다
- 24일에 질문은 flex로 aling-self 했으면 됐을듯 center end 이거로 ㅇㅇ
- 하튼 반응형이 어렵다. 이번에 플젝 끝나면 할 것들이 바닐라js, 반응형플젝 하나 더, js심화? 이정도하고 넘어가면 될 듯하다. 리액트 도대체 언제해?ㅋㅋㅋㅋ
- 제이쿼리랑 부트스트랩은 패스한다.

### 20년 7월 6일

- CSS GRID
- 메인태그에 디스플레이 그리드 넣어서 적용 (플랙스와 동일)
- 그럼 칼럼으로 정렬
- grid-template-columns : 100px 100px -> 2열로 100픽셀씩
- grid-template-columns : 물론 %도 가능(부모의 width를 받아옴) 1fr : 가득차게
- 만약 1fr 1fr 1fr로 하면 33%씩 나눠서함
- grid-template-rows : 위와 동일
- 단위 vh는 화면 비례 단위
- 개별로 선택
  - 개별 선택자에 gird-column-start : 1;
  - grid-column-end : 3;
  - -> 1행부터 3행까지 쭈욱
  - 축약형 -> grid-column : 1/3; row도 동일
- grid-template-areas : 개별 선택자에 먼저 gird-area : ~;로 이름을 부여함
- 그 담에 grid-template-areas: "box1 box2"
  "box3 ." .은 공백을 의미
- justify-items : center -> column 정렬
- align-items : center -> row 정렬
- 개별 정렬 -> 개별선택자에 justify-self, align-self : start end center etc
- grid-template-columns : repeat(3, 300px) -> 300px씩 3줄
- grid-template-columns : repeat(auto-fill, 300px) -> 300px씩 스크린 크기에 따라 조절
- grid-template-columns : repeat(auto-fill, minmax(300px, 1fr)) -> 최소 300픽셀로 시작해서 화면이 커지면 1fr까지 커짐 그러다 300픽셀 자리가 나면 한칸이 더 들어가고
- grid-column-gap : 20px -> 세로로 갭생김

### 20년 7월 27일

- JS STUDY
- 문자형으로 변환 String(~), 숫자형으로 변환 Number(~);
- typeof 변수명 으로 어떤 형인지 확인 가능
- 문자열 연결 +로 가능 피연산자 중 어느 하나가 문자열이면 다른 하나도 문자열로 변환됩니다.
- +말고 -나 /사용시 피연산자는 숫자로 변환
- 단항 연산자로 +는 숫자 앞에선 별거 없고 다른 자료형에선 숫자로 바꿔줌 == Number()

- 할당 연산자 체이닝 : a=b=c=2+2; -> 우측부터 평가 진행 그 담에 C B A순서로 할당 및 공유 근데 가독성 떨어져서 별로임

- 문자열 대소 비교 -> 사전 순 -> Z > A // true
- 정확히는 유니코드순 즉, 소문자가 더 큼
- 다른 형을 가지면 숫자형으로 바꿈
- ===은 stric해서 '' !=== flase임
- null <= 0 이 참인 이유는 <만났을때 null이 0이됨
- undefined는 비교 불가

- ||는 첫 번째 truthy 값을 반환합니다.
- 논리병합 연산자 ??는 값이 정의되어있는 첫 번째 값을 반환합니다

- null 병합 연산자 ??를 사용하면 피연산자 중 ‘값이 할당된’ 변수를 빠르게 찾을 수 있습니다.

- ??는 변수에 기본값을 할당하는 용도로 사용할 수 있습니다.

- 괄호 없이 ??를 ||나 &&와 함께 사용하는 것은 금지되어있습니다.

- switch case문에서 비교할땐 ===로 비교가 돼서 자료형까지 맞춰줘야해

- 함수의 주요 용도 중 하나는 중복 코드 피하기입니다.
- 함수에선 외부 변수에 접근하는 것뿐만 아니라, 수정도 할 수 있습니다.
- 전역변수를 사용하지 않거나 최소한으로만 사용합니다.

- 매개변수에 값을 전달하지 않으면 그 값은 undefined가 됩니다.
- function showMessage(from, text = "no text given") -> 함수 기본값 설정
- return문이 없거나 return 지시자만 있는 함수는 undefined를 반환합니다.
- return 끝엔 자동으로 세미콜론 들어감.
- 함수이름 가이딩

showMessage(..) // 메시지를 보여줌

getAge(..) // 나이를 나타내는 값을 얻고 그 값을 반환함

calcSum(..) // 합계를 계산하고 그 결과를 반환함

createForm(..) // form을 생성하고 만들어진 form을 반환함

checkPermission(..) // 승인 여부를 확인하고 true나 false를 반환함

function min(a,b){
return (a>b)?b:a;
}

- 화살표 함수

let double = n => n _ 2;
// let double = function(n) { return n _ 2 }과 거의 동일합니다.

alert( double(3) ); // 6

### 20년 7월 30일

- 대괄호 표기법

let user = {
name: "John",
age: 30
};

let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");

// 변수로 접근
alert( user[key] ); // John (프롬프트 창에 "name"을 입력한 경우)

그런데 점 표기법은 이런 방식이 불가능합니다.

let user = {
name: "John",
age: 30
};

let key = "name";
alert( user.key ) // undefined

- 객체 복사법
- 객체 = 객체하면 주소가 공유되어 한쪽을 고치면 나머지도 고쳐져서 값만 옮기려면 Object.assign

// permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

### 20년 7월 31일

- new연산자
  함수 이름의 첫 글자는 대문자로 시작합니다.
  반드시 "new" 연산자를 붙여 실행합니다.

- 옵셔널 체이닝
  옵셔널 체이닝 문법 ?.은 세 가지 형태로 사용할 수 있습니다.

obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함

### 21년 1월 21일

- var let 차이점
- var는 전역변수로 스코프가 잡히고 let은 지역변수로 잡힌다

```

var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    console.log("My value: " + i);
  };
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
}

var funcs = [];

for (let i = 0; i < 3; i++) {
  var a = 5;
  funcs[i] = function () {
    console.log("test : " + i);
  };
}

for (var k = 0; k < 3; k++) {
  funcs[k]();
}

console.log(a);

```

```
결과
3
3
3
---
1
2
3
---
5
```

## 21년 1월 24일

### 콜백지옥

- 콜백 체인의 문제점 : 가독성이 떨어짐. 디버깅이 어려워짐. 유지보수도 어려워짐

### 해결법 1 : promise

- 비동기적인 것을 수행할때 콜백대신 유용하게 사용 가능
- state, producer, comsumer
- 프로미스가 만들어져서 오퍼레이션을 수행 중 - pending, 성공하면 fulfilled 실패하면 rejected
- 원하는 기능을 만드는 프로듀서, 소비하는 컨슈머
- resolve : 성공했을때 콜백, reject 실패시 콜백
- 시간이 걸리는 네트워크 통신 같은걸 비동기적으로 프로미스를 사용함.
- 프로미스는 만들어지면 executor가 자동으로 바로 시작됨.
- resolve랑 reject는 then, catch, finally로 사용가능

```
const promise = new Promise((resolve, reject) =>{
  resolve(~)
  reject(~)
})
promise.then(value => {~}); // resolve
        .catch(rejectValue =>{~})// reject
        .finally(()=>{~ 무조건 실행})
```

### promise chaining

- then then then 이런식으로 묶을 수 있음.
- 댄으로 프로미스를 받을 수도 있음.

### 해결법 2 : async , await

- 얘네는 프로미스를 더 간결하고 동기적으로 실행되는 것처럼 보이게 해줌.
- 프로미스 체이닝을 간결하게 바꿔줌.
- 함수 앞에 async 를 쓰면 프로미스 처럼 행동하게 됨 함수가
- await은 async 선언된 함수 안에서만 사용 가능. 동기적으로 끝날때까지 기다려 시키는거
- 리졸브는 걍 리턴 때리고, 에러는 throw 시키면 됨.
- 그리고 트라이 캐치 쓰면 됨.
- 병렬로 실행하려면, 일단 불러놓고, await 써서 둘다 완료되면 다음게 실행되게
- 근데 굳이 위처럼 두번 작성하지 않고 promise.all을 사용함
- Promise.all([promise1(),promise2()]).then(fruits=>fruits.join('+'))
- 즉 위에 코드는 배열안에 모든 프로미스가 실행되면 결과가 fruits 배열에 담김.
- Promise.race([~,~]).then((~)=>{~})
- race는 여러 배열 프로미스 중에서 젤 빠른놈만 가져옴

### async await

- 에이싱크로 들어오면 계속 실행하다가 어웨잇을 만나면 그 함수를 탈출하고 나머지 할거를 쭉쭉다함 그리고 호출 스택 비면 마이크로 큐(프로미스 콜백)을 호출함

```
[돌맷] [오후 10:21] Promise.resolve(val)는
val를.. 프로미스로 감싼걸 던져줄 뿐이에요
[돌맷] [오후 10:22] Promise 생성자의 콜백함수로 전달되는 resolve를 실행해야 해당 promise가 완료되었다고 전달할 수 있어요
[택] [오후 10:22] async에서 return val이 있으면 log찍을때 val이 리졸브로 나오긴해서 Promise.reslove() 대신 더미 값으로 return val 했는데도 안되네요..
[택] [오후 10:22] 아 그냥 리졸브를 던지는건 해당이 안되나요?
[택] [오후 10:23] 생성자의 콜백으로만 가능한가요?
[돌맷] [오후 10:23] 네네
[택] [오후 10:23] 알려주셔서 감사합니다!
[돌맷] [오후 10:23] new Promise( resolve => setTimeout(resolve, ms) ) .. 같은 느낌으로
[택] [오후 10:24] 그럼 async로 작성한다해도 결국에 new Promise가 작성이 되야겠네요
[돌맷] [오후 10:24] 그쵸그쵸
[택] [오후 10:24] 아 정말 감사합니다!
[택] [오후 10:24] 덕분에 배웠습니다
[돌맷] [오후 10:24] async는 Promise를 동기적으로 처리하기 위해 사용한다.. 구 생각하면 편할 것 같아요
```

## 21년 1월 27일

- MVC패턴 model1, model2

  - 다지인 패던 : SW개발방법을 공식화 한 것
  - MVC 패턴 : 모델 뷰 컨트롤러 역할로 구분한 개발론
  - 모델 1 : jsp(뷰)와 자바빈(모델)로 이루어짐
    - 장점 : 구조가 단순
    - 단점 : 출력과 로직 코드가 섞여 jsp가 복잡해짐. 프론트와 백이 혼재되어 분업이 용이하지 않음. 유지보수가 어렵
  - 모델 2 : mvc와 유사. 자바빈(모델) + jsp(뷰) + 서블릿(컨트롤러)
    - 장점 : 뷰 로직의 분리로 분업 용이, 유지보수가 쉬움
    - 단점 : 모델 1에 비해 습득이어렵, 작업량 많음.

- MVC흐름

  - 사용자는 원하는 기능을 처리하기 위한 모든 요청을 컨트롤러에 보낸다.
  - 컨트롤러는 모델을 사용하고, 모델은 알맞은 비지니스 로직을 수행한다.
  - 컨트롤러는 사용자에게 보여줄 뷰를 선택한다.
  - 선택된 뷰는 사용자에게 알맞은 결과 화면을 보여준다. 이 때, 사용자에게 보여줄 데이터는 컨트롤러를 통해서 전달받는다.

- 모델
  - 값과 기능을 가지고 있는 객체 DB
  - 비지니스 로직을 수행하게 됨.
- 뷰
  - 모델에 포함된 데이터의 시각화.
  - 사용자가 보는 화면
  - 모델과 컨트롤러의 데이터는 저장하지 않는다.
- 컨트롤러
  - 모델 객체로의 데이터 흐름을 제어
  - 뷰와 모델의 역할을 분리
  - 이벤트 처리역할
  - 모델과 뷰를 알아야함
  - 뷰와 모델의 변경을 계속 업데이트해줘야함.
- why mvc?

  - 컴포넌트 코드 결합도를 낮춤
  - 코드 재사용성을 높임
  - 구현자 간의 커뮤니케이션 효율성을 높임

- 많은 실수가 있는 부분

  1. 모델에서 뷰의 접근 또는 역할 수행
  2. 뷰에서 일어나는 과한 값 검증과 예외처리
  3. 뷰에서 일어나는 비즈니스 로직

## 21년 1월 28일

### 크론 CRON

- 난 자동 크롤링때문에 접했는데 뭔지 궁금해서 찾아보게 됐당
- 크론 : 유닉스 같은 컴퓨터 운영 체제 시간 기반 작업 스케줄러.
- 사용자는 크론을 사용하여 주기적으로 실행되도록 작업을 예약한다. 일반적으로 시스템 유지보수 또는 관리를 자동화한다.
- Agenda, Node-cron, Node-schedule 세 개가 있음
- agenda는 몽고디비 필수.
- 결국 노드 스케줄러가 젤 ㄱㅊ

## 21년 2월 1일

### MVP패턴

- mvc와 다르게 모델과 뷰의 결합도를 낮춤
- mvc는 컨트롤레에서 발생하지만 뷰에서 사용자 이벤트 발생. 이를 프레젠터에게 전달.
- 모든 뷰에 대한 이벤트는 뷰에서 일어나지만 데이터가 필요하면 프레젠터에 전달. 이를 업데이트된 뷰에 대한 정보를 받아서 뷰에서 처리
- 프레젠터는 뷰에서 전달받은 이벤트를 처리하고 뷰에 전달함. 뷰와 모델을 이어줌
- 모델은 데이터를 불러오거나 캐시함. mvc와 동일

- 단점
  - class하나로 전체 코드를 모름
  - 인터페이스 양이 많아짐. 뷰와 프레젠터가 1ㄷ1 관계.

## 21년 2월 6일

### JS function 화살표 함수

- 차이점 : 펑션은 자기만의 this를 갖고 화살표는 부모의 this를 받음

### 구조분해 문법

- example = {a:123,b:567}
- const {a,b} = example;
- const [x,y,z,,,y] = arr;
- 비어있는 자리에는 넣지 않겠다.

### 객체지향 디자인 패턴 1

- 싱글턴 패턴 : 공통으로 사용하는 하나의 객체
  - 각 페이지마다 new로 객체를 생성하는 것이 아닌 static 변수와 메소드를 공통으로 사용해서 다 같이 씀

### 함수형 프로그래밍

- 변경 가능한 상태를 불변상태로 만들어 사이드 이펙트를 없앤다.
  - 인풋이 동일하면 항상 아웃풋은 동일해야한다.
- 모든 것이 객체이다.
  - 함수형 언어에서 모든 것은 객체이다. 함수도 객체임 그래서 함수를 값으로 할당할 수 있고 파라미터로 전달 및 결과 값으로 반환도 가능함.
  - 위 세 가지를 만족하면 1급 객체. 자바는 변수에 할당이 안됨.
- lambda 및 콜랙션, 스트림과 같은 api를 통해 보일러 플레이트를 제거하고 내부에 직접적인 함수 호출을 통해 가독성을 높인다.
  ### 보일러 플레이트 (template)
      - 변경없이 계속하여 재사용할 수 있는 저작품. 약간 초심자들이 바로 사용할 수 있게 만들어 놓은 초기 단게?
- 동시성 작업을 보다 쉽고 안전하게 구현!
  - 불변상태이기에 여러 쓰레드에서 접근하더라도 사이드 이펙트를 발생시키지 않음.

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

### 암호화 vs 해시

- 암호화는 평문을 암호로 만들고 복호화로 다시 평문이 되지만
- 비밀번호에서 사용되는 해시는 평문을 바꾸고 다시 되돌리기가 어렵다
- 해쉬 사용하기
  - createHash(알고리즘) sha512에 digest(인코딩) base64tkdyd
  - pbkdf2 알고리즘
- 양방향 암호화
  - 둘이 같은 키가 있어야 암호화 복호화를 할 수 있음.
  - key를 잘 간수해야함.
  - crypto 사용이 좀 어려움 그래서 crypto-js라는 모듈로 편하게 쓸 수 있음.
  - 대칭형 암호화 -> AES
  - 비대칭 암호화 -> RSA
  - 해시 -> sha512
- 키 관리하는 법
  - KMS를 사용함. AWS key management service

### worker_threads

- 노드에서 멀티 스레드 방식으로 작업할 수 있음.

## 21년 2월 8일

### 쿠키와 세션

- 서버로부터 쿠키가 오면 웹 브라우저는 쿠키를 저장했다가 요청할 때마다 쿠키를 같이 보내줌.
- 쿠키는 요청과 응답의 헤더에 저장됨.

### 헤더와 본문

    - 헤더 : 요청과 응답에 대한 정보를 갖고 있는 곳
    - 본문 : 서버와 클라 간에 주고받을 실제 데이터를 담아두는 공간.
    - 쿠키는 부가적인 저옵이므로 헤더에 저장

### REST API

- REpresentational State Transfer, 네트워크 구조의 한 형식
  - 서버의 자원을 정의하고, 자원에 대한 주소를 지정하는 방법을 가르킴.
  - HTTP 요청 메소드. GET POST PUT PATCH DELETE
  - 코딩전에 서버 주소 구조를 미리 정리하고 코딩 시작.

### https와 http2

- https : 웹서버에 ssl 암호화를 추가함. 오고가는 데이터를 암호화해서 중간에 요청을 가로채더라도 내용을 확인할 수 없게 해줌.
- http2 : ssl 암호화에 더불어 최신 프로토콜인 HTTP2를 사용할 수 있게 해줌. 1.1보다 빠름

### cluster

- 싱글 스레드인 노드가 코어를 모두 사용할 수 있게 해주는 모듈.

### package.json package-lock.json

- https://junwoo45.github.io/2019-10-02-package-lock/

### cookie-parser

- 요청에 동봉된 쿠키를 해석해준다.

### 미들웨어의 순서

- 스태틱은 굳이 morgan json urlencoded cookie parser를 거칠 필요 없이 morgan 이후에 바로 와도 된다. 그래야 낭비를 막을 수 있다.

### express-session

- 세션 관리용 미들웨어. 제너레이터에 안깔려있음

```javascript
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret code",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
```

- resave : 요청이 왔을 때, 세션에 수정사항이 없더라도 세션에 다시 저장할지
- saveUninitialized : 세션에 저장할 내역이 없더라도 세션을 저장할지. 방문자 추적할때 사용
- secret : 필수 항목으로 쿠키 바서의 비밀키. 이 키는 환경변수에 저장!. 쿠키에도 시크릿 할 때 이 값을 넣음.
- cookie 안에 있는건 쿠키에 대한 설정. maxAge, domain. path, expires etc

- express-session은 세션 관리시 클라이언트에 쿠키를 보낸다. 이를 세션 쿠키
- 배포할때는 store 옵션을 통해 디비에 세션을 저장하도록

- 이 모듈은 req객체 안에 req.session 객체를 만듬.

### connect-flash

- 일회성 메시지들을 웹 브라우저에 나타낼 때 좋음.
- req.flash에 req.flash(키, 값)으로 값을 설정하고 req.flash(키)로 값을 불러옴.
- 한번 flash쓰면 그 키에 갑을 사라짐.
- 일회성 성질을 통해 일회성 경고 메시지를 flash 미들웨어로 보내면 조아

### 라우터

- 라우터에서 router.use,get 할때
- 여러개의 미들웨어 장착 가능.
- 그래서 실제 라우터 로직이 실행되는 미들웨어 전에 로그인 여부나 관리자 여부를 체크하는 미들웨어를 중간에 넣어두곤 함.
- req.params와 req.query로 요청 주소에 대한 정보를 사용할 수 있다.

### EJS

- 변수는 <%= 변수명 %>
- 이스케이프하고 싶지 않다면 <%- %>로!
- js코드는 <% >에 넣음!
- 템플릿에 변수 넣으려면 res.render(뷰, {변수명 : 값})

### 에러처리 미들웨어

### mysql 시퀄라이저

## 21년 2월 11일

- 자동로그인의 원리

  1. 사용자가 자동로그인을 체크하면 표준 세션 관리 쿠키와 로그인 쿠키(만료기한이 없는? expires를 1달로 잡을까?)가 발행된다.

  - 로그인 쿠키에는 사용자 이름과 적절한 토큰이 있다. 토큰은 큰 난수 이걸 db에 저장한다.

  2. 로그인하지 않은 사용자가 사이트를 방문하여 로그인 쿠키를 제공하면 사용자 이름과 토큰이 db에서 조회.

  - 조회 된 쌍이 있으면 인증 된 것으로 간주하고, 사용 된 토큰은 db에서 제거하고, 동시에 새 토큰이 생성되어, 사용자 이름과 함께 쌍으로 db에 저장되고, 새 로그인 쿠키가 사용자에게 발급된다.

  3. 쌍이 없으면 쿠키는 무시된다.

- 문제점
  - 만약 쿠키를 도난 당했을때, 사용자가 다시 로그인하기 전까지는 해커가 피해자인척 할 수 있음.
- 해결책
  - 식별자를 추가하여 해결. 유효하지 않은 토큰과 유효한 식별자를 함께 제시하면 도난이 발생!

```
 발전된 방법의 디자인

이 설계는 밀러의 설계에서 2번과 3번만 바뀌었다고 봐도 된다.

사용자가 자동로그인을 체크하고 로그인하면 표준 세션 관리 쿠키와 함께 로그인 쿠키가 발행된다.

로그인 쿠키는 사용자의 이름과 식별자, 토큰을 포함한다. 식별자와 토큰은 충분히 큰 난수이다(암호화). 이 셋의 쌍은 데이터베이스 테이블에 저장된다.

로그인하지 않은 사용자가 사이트를 방문하여 로그인 쿠키를 제공하면 사용자 이름, 식별자, 토큰이 DB에서 조회된다.

셋의 쌍이 있는 경우 사용자는 인증 된 것으로 간주된다. 사용 된 토큰이 DB에서 삭제되고, 새 토큰이 생성된다. 새 토큰은 사용자 이름과 이전과 동일한 식별자와 함께 DB에 저장되고, 새 로그인 쿠키가 사용자에게 발급된다.

사용자 이름과 식별자가 같은 DB 정보와 토큰이 일치하지 않으면 도난이 일어난 것으로 간주된다. 사용자에게 강한 경고를 보내고 사용자가 기억 한 모든 세션이 삭제된다.

사용자 이름 과 식별자가 없으면 로그인 쿠키가 무시된다.

식별자는 재사용되는 것이 중요하다. 식별자가 매번 바뀔경우 도난당한 경우와 만료되어 삭제된 경우를 구별할 수가 없다.
```

## 21년 2월 15일

### 세션

- 왜 생겼나?
  - 1. http 통신은 stateless 함 그래서 서버 클라 모두 상태 유지를 안해줌 statefull 하게 하려고 생김
- 쿠키
  - 클라이언트가 서버에 요청 했을 때, 요청한 사용자에게 증거를 남기기 위한 증거물이 Cookie
- 저장방식
  1. 메모리
  - 문제점 : 서버가 죽었을 때, 사용자랑 상태가 달라짐. 아니여도 메모리가 넘치는 문제 발생
  2. 파일
  - 문제점 : 여러 디바이스를 통해 접속 하므로 각각의 디바이스 마다 Session과 Cookie가 생성되는 것과 동일한 상황이라 볼 수 있습니다.
    그러면 위와 같은 문제를 어떻게 해결해야 할까요? 아쉽게도 Session 만으로는 한계가 있습니다. 여기까지가 Session의 역할은 다 했다고 생각합니다.
  3. db
  - 세션은 단순히 로그인 유지, 나머지 정보는 디비에 저장 제일 깔끔

## 21년 2월 23일

-https://d2.naver.com/news/3435170 을 읽고 쓰는 감상문?

- 백엔드 개발자를 꿈꾸는 학생개발자에게 라는 글
- 백앤드 개발자는 인접한 분야의 개발자와 소통할 기회가 많다. 그렇기에 더욱 깊이 있는 전문 분야와 어플 개발 능력이 있으면 유능한 개발자가 될 수 있다.
- 백앤드 개발자가 보람을 느낄 때 : 성능을 개선 시킬때, 모듈의 구조를 개선하여 코드가 줄때, 트래픽이 늘어도 잘 버틸때..
- 서버는 24시간 돌기 때문에, 항상 장애 상황에 대응해야하기도 함. 그래서 oncall을 정해서 당번제로 돌기도 함.
- 백엔드 개발은 여러 분야와 연결되기에 많은 덕목을 쌓을 수 있다.
- 머신러닝 빅데이터 시대이기에 대용량 서비스를 개발하는 백엔드 개발자가 중요하기도함. 대용량 분산처리에 대해..
- 웹 생태계의 스펙

```
HTML, HTTP(1.1 , HTTP/2)
기본 SDK, 라이브러리/프레임워크 이해와 활용
클라이언트를 위한 API 설계
서버/컴퍼넌트/객체 간의 역할 분담/의존성/통신 방법 설계
저장소 활용
DBMS 설계
Cache 적용
Global/Local cache 적용범위, 라이프 싸이클, 솔루션 선택
파일 저장 정책/솔루션 선택 활용
검색엔진 연동 방식 결정
빌드 도구
Maven/Gradle
배포 전략
성능 테스트/프로파일링/튜닝
JVM 레벨의 튜닝 (GC 옵션 등)
웹 서버(Nginx,Tomcat)등의 설정/튜닝
OS 설정의 주요 값 확인
인접 기술에 대한 이해
DBMS, Front End 등
서버 개발자에만 해당하지는 않는 항목
테스트 코드 작성/리팩토링 기법
버전 관리 전략
branch 정책 등
위 내용을 아는 것을 추천
```

- 여전히 RDB를 잘 다루는 것은 중요한 역량
- 개발도구를 '배워야'하는 개발자보다는 스스로 익힐 수 있고, 적절한 도구를 선택할 수 있는 개발자가 현장에서는 필요

```
레벨2
개발도구의 공식 레퍼런스를 보고 사용법을 스스로 익힐 수 있음
자신이 경험한 사용법을 문서화해서 팀 내에 전파할 수 있음
이정도 되는 개발자를 요구
```

- 테스트를 잘해야함. 테스트를 통해 더욱 빠른 일처리, 버그 발견을 할 수 있음.

## 21년 2월 24일

### 자료구조

### Array & LinkedList

### Array

- 배열은 인덱스를 통한 원소 접근이 용이하며 구현이 쉽다.
- 단점으론 삽입, 삭제 등에 대한 연산에 비용이 많이 듬.
- 삭제하면 순서를 맞추기 위해, 모든 원소를 앞으로 옮기고, 삽입 또한, 해당 원소 뒤 인덱스를 이동시켜야함

### LinkedList

- 각 원소가 다음 인덱스 위치의 주소를 갖고 있어서, 데이터를 쉬프트 안하고, 주소 값만 바꿔주면 된다!
- 근데 얘는 접근이 좀 그럼... 1번 인덱스부터 차례대로 찾아가야함.

### 스택

- FILO, 먼저 들어간 놈이 나중에 나옴. 괄호 유효성 체크에 사용됨.

### 큐

- FIFO 먼저 들어가면 먼저 나옴, 힙 구현, 작업 우선순위에 사용됨

### Tree

- 비선형 자료구조. 계층적 구조를 표현함.

```
Node (노드) : 트리를 구성하고 있는 원소 그 자체를 말한다.
Edge (간선) : 노드와 노드사이를 연결하고 있는 선을 말한다.
Root(Node) : 트리에서 최상위 노드를 말한다.
Terminal(Node) : 트리에서 최하위 노드를 말한다. Leaf Node라고도 한다.
Internal(Node) : 트리에서 최하위 노드를 제외한 모든 노드를 말한다.
```

### Binary Tree

- leaf 노드를 제외한 모든 노드의 자식이 두개임.
- 각 층이 level, level의 수를 height

- Full binary tree(모든 level이 가득참) 랑 complete binary tree(위에서 아래로 왼쪽에서 오른쪽으로 채워짐) 의 차이를 알면 좋음

### binary search tree

- 효율적인 저장방법. 규칙대로 저장하면 평균 탐색시간 logN으로 끊을 수 있음

```
이진 탐색 노드에 저장된 값은 유일한 값이다.
루트 노드의 값은 왼쪽에 있는 모든 노드의 값보다 크다.
루트 노드의 값은 오른쪽에 있는 모든 노드의 값보다 작다.
각 서브 트리별로 2, 3번 규칙을 만족한다.
저장할 때 위의 규칙대로 잘 저장하기만 하면, 루트 노드로부터 원하는 값을 찾아나가는 것은 어렵지 않을 것이다. 하지만 값이 추가되고 삭제됨에 따라, 한 쪽에만 치우친 Skewed Tree(편향 트리)가 될 가능성이 있다. 이를 해결하기 위해 Rebalancing이라는 기법을 사용하여 트리를 재조정하게 된다.
```

### red black tree

- 리밸런싱 기법, 기존 이진탐색트리의 비효율성을 개선한 방법

```
아래 규칙을 따름
각 노드는 Red 혹은 Black이라는 색깔을 갖는다.
루트 노드는 Black이다.
각 말단 노드(NIL)는 Black이다.
어떤 노드의 색이 Red라면, 두 자식 노드의 색은 모두 Black이다.
어느 한 노드로부터 리프노드(NIL)까지의 Black의 수는 리프노드를 제외하면 모두 같다(이를 Black-Height라 한다).
```

```
RBT 특징
Binary Search Tree이므로, BST의 특징을 모두 갖고있다.
루트로부터 말단 노드까지의 최소 경로는 최대 경로의 두 배보다 크지 않다. 이를 Balanced한 상태라 한다.
노드의 Child가 없을 경우, Child를 가리키는 포인터에 NIL(혹은 NULL)값을 저장한다. 이러한 NIL 노드들을 말단 노드로 간주한다. 말단 노드이기 때문에, 이 노드들의 색은 Black이다.
```

### binary heap

- 배열에 기반한 완전 이진탐색트리.
- max-heap은 상위 노드의 값이 하위 노드의 값보다 큼. min은 상위가 더 작음
- 최대 최소 값 찾기가 용이함.

### hashTable

- 키와 밸류로 이루어짐
- 검색 속도가 상당히 빠름. 보통 O(1) 충돌이 안나면 ㅇㅇ
- 다른 키를 넣었는데 동일한 인덱스가 나오면 충돌임

### graph

- 정점과 간선의 집합이며, 일종의 트리임

```
탐색 방법에는 깊이 우선 탐색(DFS, Depth First Search)와 너비 우선 탐색(BFS, Breadth First Search)이 있다.
깊이 우선 탐색은 말 그대로 깊숙히 들어가서 탐색하고 나오는 것이며, 유용한 자료구조는 Stack이다.
너비 우선 탐색은 임의의 한 정점에 대해 인접한 정점을 queue에 넣고(enqueue), dequeue연산에서 나온 하나의 정점으로 들어가서 그 정점의 인접한 정점을 다시 Queue에 넣어서 탐색하는 방식. BFS로 찾은 경로는 최단 경로이다.
```

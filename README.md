# TIL
TIL

## 2020년 6월
### 20년 6월 19일
- TIL 레포 깃 연동
- 제로초 git 강의에 나온 git flow를 momentum clone에 적용 (기능별 브런치 생성 및 마스터로 뿌리기)
- 날씨 api를 사용하기 위해 현재 위치 가져오기 (For JS)
    -  navigator.geolocation.getCurrentPositon(사용자가 허락할 시 함수, 거절할때 함수);

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

- 할당 연산자 체이닝 :  a=b=c=2+2; -> 우측부터 평가 진행 그 담에 C B A순서로 할당 및 공유 근데 가독성 떨어져서 별로임

- 문자열 대소 비교 -> 사전 순  -> Z > A // true
- 정확히는 유니코드순 즉, 소문자가 더 큼
- 다른 형을 가지면 숫자형으로 바꿈
- ===은 stric해서 '' !=== flase임
-  null <= 0 이 참인 이유는 <만났을때 null이 0이됨
- undefined는 비교 불가
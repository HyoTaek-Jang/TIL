### 21년 1월 19일

- HTTP : req와 res를 나타냄. html css는 컨탠츠임. 서버와 클라이언트가 서로 알아들을 수 있는 공통의 메세지 - http
- 웹브라우저 : 사용자가 요청한 정보를 서버에 대신 물어봐주는 것. 헤더를 만들어서 물어봄
- 웹서버는 그 헤더를 받아서 응답 헤더를 보내줌.

### req header

- 첫 줄은 어떤 방식으로 통신할지 명시
- host 웹사이트의 주소
- User-Agent : 웹브라우저의 다른 표현. 요청하는 브라우저가 뭔지.
- Accept-Encoding : 데이터가 많으면 압축을 하는데, 어떤 압축 방식을 지원하는지 명시

### res header

- 404 not found, 500 server error
- Content-Type : 어떤 형식으로 데이터를 줄지

### 더 알면 좋은 것

- https(보안), cache(성능),

### 21년 1월 19일

- REST API : 남의 컴퓨터를 실행시키는 명령
- 특정 기술이 아닌 http를 가지고 기계가 통신할때 http의 잠재력을 끌어내는 모범사례
- 데이터를 리소스, 자원이라함.
- 리소스는 URI로 표현됨.
- Collection ex) topics
- Element ex) topics/1 or topics/rest
- 리소스는 4가지 기능(메소드)이 있음.CRUD http가 가진 메소드를 이용함.
- CRUD === POST, GET, PUT(PATCH) , DEL
- http 메소드를 본래의 목적에 맞게 쓰자
- RESTAPI가 규정하지 않는거 : 어떤 데이터 타입으로 통신할지
- 규정하는 것 : 리소스를 식별할때 URI를 통해 식별한다. 행위를 할 땐 http고유메소드(GET POST PUT DEL)를 이용한다. 결과는 응답코드를 정확히 사용한다.
- http프로토콜을 얘 답게 사용하자 라는게 restapi가 주장하는 것.
- GET : 컬렉션읽기, 엘리먼트 읽기.
- PATCH : 부분수정
- PUT : 전체수정, 언급하지 않은 것은 삭제
- DELETE : 리소스를 지정하고 삭제하면 삭제됨. 컬렉션 삭제는 위험해서 막혀있기도 함.
- 관계 : 종속관계는 topics/2/comment 이렇게 표현

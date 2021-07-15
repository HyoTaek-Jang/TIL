### 0629

1. 기획서 이해 마크다운으로 작성
2. MySQL 연동작업 - 간단한 CRUD 연습 예정 [스프링부트 mysql](https://memostack.tistory.com/163)

- 레퍼런스 보면서 작업하는데, compile이 안되서 찾아보니까 사라짐. [[Gradle] implementation vs compile
  ](https://bluayer.com/13)
- [롬복](https://www.daleseo.com/lombok-popular-annotations/)
- [롬복 영상](https://youtu.be/2VYBQ_99RJg)

### 0630

0. 깃헙 받아와서 개발환경 세팅
1. MySQL 설정 변경. 프로젝트 환경세팅과 동일하게
2. Maven 프로젝트 빌드

- 어제 테스트 코드 문제 @SpringBootTest 붙이니까 해결됨
- 근데 저 어노테이션을 스프링 서버에 올리고 테스트 하는거 아닌가?
  [스프링부트테스트](https://goddaehee.tistory.com/211)

3. 컨트롤러 조작 [@RequestMapping](https://joont92.github.io/spring/@RequestMapping/)

4. serviceImpl와 service! - 구현한 클래스에 @service 어노테이션

- 엔티티 CreationTimestamp 추가!@CreationTimestamp를 사용하면 insert 시 자동으로 시간이 저장된다.

- dto Controller와 Service 사이에서 데이터를 주고 받는 DTO를 구현해줘야한다.[스프링부트 게시판 제작](https://velog.io/@max9106/Spring-Boot-JPA-MySQL-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%9E%91%EC%84%B1%EA%B8%B0%EB%8A%A5)

5. postNotice, postNoticeTest 구현 완료

### 0701

1. updateNotice 구현 완료

- 오늘 할 거 딜리트, 뷰 올 하고 테스트 코드 만들고 에러처리 ㅇㅇ!

2. delete
   -> [람다 내부에는 final 변수만?!](https://ecsimsw.tistory.com/entry/%EC%99%9C-anonymous-inner-class%EB%8A%94-final-%EB%B3%80%EC%88%98%EB%A7%8C-%EC%A0%91%EA%B7%BC%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C)

3. [array vs array list](https://yoon-dailylife.tistory.com/7)

4. delete, getAll 구현완료
5. 포스트맨으로 기능 테스트, 테스트코드로 서비스코드 테스팅 완료
6. [@DynamicInsert, @DynamicUpdate](https://dotoridev.tistory.com/6)
7. joinColumn fk설정 [링크](https://data-make.tistory.com/611)[강제로 다른 칼럼 참고하기](https://velog.io/@kir3i/JPA-PK%EA%B0%80-%EC%95%84%EB%8B%8C-%ED%95%84%EB%93%9C%EB%A5%BC-%EC%B0%B8%EC%A1%B0%ED%95%98%EB%8A%94-FK%EB%A5%BC-%EB%A7%8C%EB%93%A4-%EB%95%8C)
8. officeInfo테이블 생성

### 0702

- 할일 : officeInfo 기능 구현

1. OfficeInfo에 OfficeId cascade

2. 관계설정MappedBy [영상](https://youtu.be/hsSc5epPXDs)

3. officeInfo post 작업, test 완료

4. cascade를 연결해야힘. 어케함!!! 왜 안돼!!!
5. 화난다 화나. 일단 수동으로 연결함.

6. [DTO, DAO, VO](https://gmlwjd9405.github.io/2018/12/25/difference-dao-dto-entity.html)

7. dto toEntity 작업때문에 office에 getById 만듬

```java
          if(officeById.isPresent()){
      return OfficeInfo.builder()
              .officeId(officeById.get())
              .content(content)
              .title(title)
              .build();
  }
  return null;

        return officeById.map(office -> OfficeInfo.builder()
                .officeId(office)
                .content(content)
                .title(title)
                .build()).orElse(null);

이렇게 변함


```

### 0705

1. parseToOfficeInfo를 추가해서 dto -> office -> officeInfo로 만듬
2. post 부분 리팩토링

3. 오늘 할 일! - update, del, 같은 회사 검색
4. delete 기능 구현
5. [jpa 쿼리문 작성](https://sundries-in-myidea.tistory.com/91)
6. getInfosByOfficeId 기능 구현 완료
7. officeInfo 전체 기능 구현 완료
8. 스프링 시큐리티 jwt [예제](https://mangkyu.tistory.com/57)
9. 401에러. 접근제어 [해결법](https://employee.tistory.com/entry/Spring-Boot-Security-%EC%A0%91%EA%B7%BC-%EC%A0%9C%EC%96%B4)
   [해결법2](https://subbak2.tistory.com/11)
10. [io.jsonwebtoken.UnsupportedJwtException: Signed Claims JWSs are not supported](https://stackoverflow.com/questions/61016123/io-jsonwebtoken-unsupportedjwtexception-signed-claims-jwss-are-not-supported)
11. 스프링채널 추천 [유튭](성지채널, IT 알려주는 은행원)

### 0706

-할일

1. 컨텍트어스 정리 및 이해
2. req 정리? 어케 보내여 딱 정해!
3. req 명세 정리 및 테이블 구성

```
1. 프라이빗하게 관리자와 연락하는



기능 사용자
1. 문의하기
2. 자신의 문의사항 확인
3. 문의 수정 및 삭제

관리자
1. 전체 문의 확인
2. 답 안한 문의 확인
3. 답변하기
4. 답변 수정 삭제
```

```
table

qna

문의사항id pk
유저id fk
답변id fk
등록일
글내용
글제목
상태


reply

답변id pk
등록일
글내용
```

```
미팅 의견

개발환경 셋팅
공지, 회사 info 구현완료 테이블 수정이나 추가는 공유해서 작업함.
명세서랑 테스트코드도 완료!

명세랑 api들 보고! 컨펌! 해야함!
jsp도 함께 할듯..!

```

1. jpa연관관계 [블로그](https://victorydntmd.tistory.com/208)
2. saveQna 완료
3. saveQnaReply 완료
4. 테이블 수정함.

### 0707

1. saveQnaReply 테스트코드 작성
2. mysql 한국시간 동기화
3. [jpa업데이트 쿼리메소드](https://minkukjo.github.io/framework/2020/07/07/Spring-132/)
4. reply달면 suc으로 state바꿔줌
5. 내가 쓴 문의들 리스트 확인 ㅇㅋ
6. qna 답변확인 + 테스트코드

### 0708

1. cascade 달아줘야함. qna 지우면 답변도 지워지게, officeInfo 도 ㅇㅇ!

2. Qna확인 GET | /contactUs?qnaId={qnaId}
3. Qna업데이트 PUT | /contactUs 개발 완료
4. 딜리트 하고있는데 cascade가 안되서 고생중. 편법으로 완료
5. 테스트 코드 작성해야함 - 완료!

### 0709

1. 전체 문의 확인
2. 답변 안한 문의 확인
3. 답변 수정 삭제 기능 완료
4. 컨텍트 어스 기능 구현 완료!!!

### 0712

1. [jpa 사용법](https://jobc.tistory.com/120)
2. s3 spring 연결 및 업로드, get! [블로그](https://willseungh0.tistory.com/78) [유튭](https://youtu.be/vY7c7k8xmKE)
3. ec2 : 아마존 리눅스 자바 설치 [블로그](https://lemontia.tistory.com/941)
4. 80번 포트를 8080으로 리디렉션 [블로그](https://codechacha.com/ko/use-80port-in-aws/)

### 0713

0. 할거!

- 테스트 코드 작성

1. delete file

```
정기미팅!

지난주 기존 3개 api 모두 완료
파일관련 api 처리 s3 개인 계정에 테스트용으로 파서 연결해서 api 만드는중~

내일이면 다 할듯

지희님 코드가 이미 이해하고 로직짜려면 힘드니까 서버랑 rds도 걍 내가 하는게 날듯

ci/cd??
```

2. responseEntity [블로그](https://devlog-wjdrbs96.tistory.com/182)
3. 어제 잘 되던 로직이 안되서 뭐지뭐지 하다가 s3 키 재발급 받아서 넣으니까됨...
4. com.amazonaws.SdkClientException: Failed to connect to service endpoint: warning해결 [블로그](https://lemontia.tistory.com/1006), 인텔리제이 vm option변경 [블로그](http://blog.geun.kr/90)
5. download, geturl 기능 구현 완료

6. 젠킨스 설치 및 연결[블로그1](https://jojoldu.tistory.com/544) [블로그2](https://velog.io/@yundleyundle/AWS-EC2%EC%97%90-Jenkins-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)

### 0714

- 할일
  1. api 명세 작성
  2. 테스트 코드 작성

3. [도커 아마존 리눅스 설치](https://megazonedsg.github.io/1-Make-Docker/#6-docker-machine%EC%9C%BC%EB%A1%9C-aws-%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B2%84-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

### 0715

0. ec2 메이븐 빌드법 [블로그](https://miniminis.github.io/2019/10/13/spring/springboot-deploy/)

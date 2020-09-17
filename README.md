
![react](https://img.shields.io/badge/React-16.13.1-orange)
![react-navigation](https://img.shields.io/badge/ReactNavigation--orange)
![react-native](https://img.shields.io/badge/ReactNativeCLI--orange)
![redux](https://img.shields.io/badge/Redux-4.0.5-orange)
![redux-hooks](https://img.shields.io/badge/ReduxHooks--orange)
![redux-saga](https://img.shields.io/badge/ReduxSaga-1.1.3-orange)
![styled-components](https://img.shields.io/badge/StyledComponent-5.1.1-green)
![express](https://img.shields.io/badge/Express-4.17.1-blue)
![JWT](https://img.shields.io/badge/JWT-8.5.1-blue)
![mysql](https://img.shields.io/badge/Mysql-2.1.0-blue)
![sequelize](https://img.shields.io/badge/Sequelize-6.3.3-blue)
![multer](https://img.shields.io/badge/Multer-1.4.2-blue)
![passport](https://img.shields.io/badge/Passport-0.4.1-blue)

# :cat:TOM (T-label Open Market)

### :four_leaf_clover:프로젝트 소개
- 팀명: :mouse:Jerry
- 서비스 소개 <br>
화훼시장에는 수 많은 도소매 업자들이 있습니다.<br>
도소매 업자들에게 판매채널을 하나더 열어 주고<br>
소비자들도 하나의 꽃집에서 꽃을 주문하는게 아니라 여러 꽃집에서<br>
다양한 화훼의 품종을 보며 살 수 있고, 그 화훼에 대한 설명도 자세히 알려주는<br>
화훼를 전문적으로 다루는 오픈마켓 서비스입니다.<br>
- 특징
  - 화훼를 전문적으로 다루는 오픈마켓이다.
  - 소비자들은 꽃에 대한 정보를 잘 모르기 때문에 그 부분에 대한 정보를 제공해 줄 수 있다.

---
### :four_leaf_clover:팀원 소개
  
#### 팀장 : 심다슬

- 사진
- Role : Team Leader
- Works :
  - 상품배너, 베스트상품관련 API 구현
  - 테스트 케이스 작성(회원가입, 로그인, 로그아웃, 회원탈퇴, email중복체크, 상품배너, 베스트상품 API)
  - 상품상세페이지 API 구현
  - 회원 정보 수정, 회원정보수정시 재인증 API 구현
  - 판매중인 상품관련 API 구현
  - QnA, reply(CRUD) API 구현
  - 배송관련(배송조회, 배송상태, 구매확정) API 구현
  - 상품이미지 샘플 찾기
  - 상품상세페이지 샘플 제작, 배너 제작
  - API, Wiki, ReadMe 문서 작성
- Pair Work :
  - API 설계 
  - DB 스키마 설계
  - Server, DB 초기 세팅
- Tech-Presentation Topic : 

#### 팀원 : 정근석

- 사진
- Role : Team Member
- Works :
   - 로그인 / 로그아웃 기능 → 로그인 및 로그아웃 시 Header에서 링크 전환 (redux, redux-saga 사용)
   - 회원가입 기능 → 유효성 검사를 통해 올라로된 정보 입력 기능 구현
   - 소비자 마이페이지  - 회원정보 수정 및 회원탈퇴 기능 
   - 소비자 마이페이지  - 구매내역 조회 → 데이터베이스에서 해당유저의 구매내역 출력(redux, redux-saga 사용)
   - 배송조회 기능 → 배송조회 API 연결 
   - 판매자 마이페이지 - 인허가 페이지 전환 → 소비자인지 판매자인지 확인 후 판매자로 로그인 할 경우 페이지 변경
   - 판매자 마이페이지 - 판매등록상품 조회 → 데이터베이스에서 해당유저의 판매등록상품 출력(redux, redux-saga 사용)
   - 판매자 마이페이지 - 판매된 상품 조회 → 데이터베이스에서 해당유저의 판매내역 출력(redux, redux-saga 사용)
- Tech-Presentation Topic :  RN CLI 환경설정 및 전환으로 발생한 오류와 해결의 반복
 

#### 팀원 : 함석호

- 사진
- Role : Team Member
- Works :
  - 회원가입,이메일 체크, 로그인, 로그아웃, 회원탈퇴 API 구현
  - 구글 소셜 로그인 구현
  - 구매내역 API 구현
  - DB관계, 데이터타입 변경작업
  - 상품리스트 API 구현
  - 테스트 케이스 작성(상품리스트, 상세페이지, qna,review 게시판, 마이페이지[구매내역,판매내역])
  - review 게시판 CRUD API 구현
  - 구매확정, 판매내역 API 구현
  - EC2, RDS 배포작업
  - 인증방식 Express-Session에서 JWT로 리팩토링
- Pair Works :
  - API 설계
  - DB 스키마 설계
  - Server, DB 초기 세팅
- Tech-Presentation Topic : 

#### 팀원 : 황선주

- 사진
- Role : Team Member
- Works :
  - 게시판 구현 - QnA 게시판 CRUD 구현, QnA의 각 질문마다 답글을 달 수 있는 Reply 게시판  CRUD 구현, Review 게시판  CRUD 구현
  - 검색 구현 - 키워드를 중심으로 상품 검색 기능
  - 장바구니 구현 - 수량 조절 후 장바구니 추가, 총 수량 및 금액 산출 기능 
  - 매 페이지별 라우팅 구현 - header와 nav를 중심으로 페이지별 라우팅 기능 구현, 뒤로가기 기능 구현
  - 상품 제반 페이지 구현 - 스타일드 컴포넌트와 css를 활용
  - 리덕스, 리덕스 사가 연결 및 백엔드 측과 api 연결
- Tech-Presentation Topic : 사가의 동시적인 비동기 요청을 처리하는 방법

---   
### :four_leaf_clover:와이어 프레임
<img width="1051" alt="스크린샷 2020-07-17 오후 1 20 58" src="https://user-images.githubusercontent.com/57708971/87748352-9a3e9700-c830-11ea-9fb7-5155a2cf79d9.png">
<img width="721" alt="스크린샷 2020-07-17 오후 1 21 44" src="https://user-images.githubusercontent.com/57708971/87748353-9e6ab480-c830-11ea-8548-8f524c010a1b.png">
<img width="1112" alt="스크린샷 2020-07-17 오후 1 21 53" src="https://user-images.githubusercontent.com/57708971/87748358-a0347800-c830-11ea-9c44-9f45654c7258.png">
<img width="880" alt="스크린샷 2020-07-17 오후 1 21 59" src="https://user-images.githubusercontent.com/57708971/87748364-a1fe3b80-c830-11ea-87db-bcfdb7129c40.png">

---
### :four_leaf_clover:워크플로우
![TOM-flowchart](https://user-images.githubusercontent.com/57708971/87740095-4e81f280-c81c-11ea-92b0-b40c79970843.jpg)

---
### :four_leaf_clover:데이터 베이스 스키마  
![image](https://user-images.githubusercontent.com/49306239/89499319-c5e2ea80-d7fa-11ea-8d03-25775142b5bd.png)

---  
### :four_leaf_clover:스크린샷 & 데모



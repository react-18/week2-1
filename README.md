# 📗&nbsp;&nbsp;원티드 프리온보딩 3번째 과제 - 대시보드 페이지 구현

<br />

## 🖥&nbsp;&nbsp;배포 주소
https://xenodochial-hopper-9ccbfd.netlify.app/

<br />

## 👩&nbsp;&nbsp;팀원소개 및 담당업무
|   이가윤     |      신혜리   |     한재성    |     이선재    |
| :----------: | :----------: | :----------: | :----------: |
|<img src="https://avatars.githubusercontent.com/u/67543454?v=4" width=100 alt="_"/>| <img src="https://avatars.githubusercontent.com/u/72786354?v=4" width=100 alt="_"/> |<img src="https://avatars.githubusercontent.com/u/57760806?v=4" width=100 alt="_"/> | <img src="https://avatars.githubusercontent.com/u/63578094?v=4" width=100 alt="_"/>|
|  사이드바 구현 | 체크박스 구현 | 토글 구현 | 카드 구현|
| [Github](https://github.com/Gayun00) |[Github](https://github.com/rachel490) | [Github](https://github.com/Han-D-Peter) |[Github](https://github.com/Sunjae95)|


<br />

## 🎮&nbsp;&nbsp;구현 기능
- 견적 요청 카드 필터링
    - 선택한 가공방식, 재료 조건이 포함된 카드 노출
    - 두 가지 조건이 모두 선택될 시 두 조건에 모두 속하는 카드 노출
    - ‘상담중' 토글 클릭 시 해당 상태에 속하는 카드 노출
- 리덕스를 이용한 상태관리
    - 토글버튼 및 필터 드롭다운에 적용
- 반응형 구현 : 모바일
    - 모바일화면에서 사이드바 나타나도록 구현
- mock rest-api server를 활용한 데이터 관리 (json-server)
- 피그마를 바탕으로한 css 작업
   

|  카드 불러오기  |  토글 필터링  |
| :------------: | :----------: |
| <img src="https://user-images.githubusercontent.com/63578094/153025747-4a2a523f-de54-4c52-8503-cf52bd2d07d0.gif"/>| <img src="https://user-images.githubusercontent.com/63578094/153010972-b989cc55-bd79-47df-84e3-9374d58ec627.gif"/>|
|  체크박스 필터링  |  사이드바  |
|<img src="https://user-images.githubusercontent.com/63578094/153010954-d4cf5900-14ec-4bc0-80a6-baf74b4790b9.gif"/>| <img src="https://user-images.githubusercontent.com/63578094/153015644-0d427da5-71c0-4f68-923e-2acc2cfb337d.gif"/>|

<br />

## 🧗‍&nbsp;&nbsp;프로젝트 과정 소개
### 진행 방식
- 공통 컴포넌트 개별 작업 후 페어프로그래밍 진행
- 페어프로그래밍 (Vsc Liveshare 사용)
    - Redux toolkit 세팅, 프로젝트 과정 중 문제 해결, 이벤트 처리 등
    - 이번 과제에서 처음으로 도입한 Typescript와 Redux toolkit의 빠른 습득과 효율적인 문제해결 목적
    - 팀원간의 코드리뷰 진행
<br />
   
### Git 커밋 컨벤션

> Option: 내용(상세 내용)
> 
- Feat - 새로운 기능 추가
- Fix - 버그 수정
- Docs - 제품 코드 수정 없음
- Style - 코드 형식, 정렬, 주석 등의 변경
- Refactor - 코드 리팩토링
- Test - 테스트 코드 추가
- Chore - 환경설정, 빌드 업무, 패키지 매니저 설정등..

<br />

## ⚙&nbsp;&nbsp;프로젝트 설치 및 시작

### 프로젝트 클론

> $ git clone [https://github.com/2201infinity/adm_product_add.git](https://github.com/react-18/week2-1.git)


### 패키지 설치

> $ npm install

### 서버 실행

> $ npm start

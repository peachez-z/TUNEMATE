# TuneMate

> 🎵음악 취향 기반 친구 추천 뮤직플레이어🎵

새로운 친구를 사귀는데에 어려움이 있으셨나요??

음악 듣는 것을 좋아하시나요??

**TuneMate**는 **스트리밍** 기능을 제공하고 **음악 취향 기반**으로 친구를 추천해줍니다.

친구를 사귀고 함께 플레이리스트를 만들어 나가 보세요

![image](https://github.com/peachez-z/TUNEMATE/assets/122859326/1e5b04fc-e7cb-4a07-b454-3f6dc98c9d70)



## 💡 주요기능

| 구분 | 기능                          | 설명                                                                                                    |
| ---- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1    | 음악 스트리밍                 | Spotify API를 활용한 음악 스트리밍 서비스                                                               |
| 2    | 음악 취향 기반 친구 추천      | 코사인 유사도를 이용하여 대표 플레이리스트 기반 유사한 사용자 추천                                      |
| 3    | 음악 취향 기반 곡 추천        | 콘텐츠 기반 필터링을 이용하여 가수 이름, 템포, 에너지 등 곡의 특징을 벡터화하여 유사도 측정 후 곡 추천  |
| 4    | 플레이리스트 실시간 공동 편집 | SSE(Server-Sent-Event)를 활용하여 플레이리스트 변경 이벤트 발생 시 연결 된 사람에게 변경 된 데이터 전송 |

## 💡 부가기능

| 구분 | 기능           | 설명                                                     |
| ---- | -------------- | -------------------------------------------------------- |
| 1    | 친구와의 채팅  | WebSocket, RabbitMQ 활용하여 구현                        |
| 2    | 공연 정보 제공 | 스케줄러 활용, 인터파크 티켓 사이트 크롤링하여 정보 제공 |
| 3    | 만남 일정 관리 | 공연 정보를 토대로 만남 일정 관리                        |

## 🖥️ 서비스 화면

- 로그인 화면
- 메인화면
- 내 프로필

<p align="center">  

<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/4b5dc1c9-10d2-424c-8805-887d36bd087b"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/27114c45-47e0-459a-b6a8-961f3303ea02"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/c5c37356-3bf1-40e5-a67e-ad0e39646ecd"  width="200" height="400"/>
</p>

---
<br>

- 플레이리스트 설정
- 곡 추가
- 플레이리스트 순서 변경
<p align="center">  
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/c31d2dd5-8995-439a-9bbf-31ef28e23ecc"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/8e6db16c-fc7d-47ac-8ece-c06168932c57"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/3763a7d7-cd4d-4450-a44b-61dd1c3fac3c"  width="200" height="400"/>

</p>

---
<br>

- 친구목록 화면
- 친구 추천 화면
- 공고 모집 목록
<p align="center">
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/11c7f547-61e5-424f-af1c-2ca5505a356a"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/cb29a504-ddb9-4772-ac73-a21f7a409dc8"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/160d8bb6-d0bc-44fc-8491-51c17aadf0f9"  width="200" height="400"/>
</p>

---
<br>

- 공고 상세 화면
- 공고 요청 화면
- 플레이리스트 화면
- 플레이리스트 화면 2
<p align="center">
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/96e8af92-a4c5-4ffe-9b53-eab72bb33764"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/cf27b408-ce8e-4a4d-a8f9-01af760b37c1"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/2bb83717-5303-439e-84cd-7cc15333686e"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/ce4f2b00-8a94-4bf3-b7f9-bef716665fec"  width="200" height="400"/>
</p>

---
<br>

- 채팅 화면
- 공동 플레이리스트 곡 추가(유저 1)
- 공동 플레이리스트 곡 추가(유저 2)

<p align="center">
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/eb341407-15a9-4367-af91-9bd1f8f0aee8"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/1163a748-a016-4b9d-9739-95651c89d066"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/1a487531-9e06-41bb-8873-eb2c47b53d3f"  width="200" height="400"/>

</p>

---
<br>

- 공동 플레이리스트 곡 위치 변경(유저 1)
- 공동 플레이리스트 곡 위치 변경(유저 2)

<p align="center">
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/b93dd230-51f5-4f37-b286-8828552ab24c"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/676fa5f8-4713-48ae-9d93-854672f700db"  width="200" height="400"/>

</p>

---
<br>

- 공동 플레이리스트 곡 삭제(유저 1)
- 공동 플레이리스트 곡 삭제(유저 2)

<p align="center">
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/1e8fa33f-bebd-45fd-a1b9-cc1fa929a8a7"  width="200" height="400"/>
<img src="https://github.com/peachez-z/TUNEMATE/assets/122859326/d0e94af4-017d-499e-84ef-d1607be69e11"  width="200" height="400"/>

</p>


## 🐳 아키텍처
![Architecture](https://github.com/peachez-z/TUNEMATE/assets/122859326/0ff4925d-8e4a-446e-bd3e-05eff9379abb)

## 🛠️ 기술스택

`Backend`

- IntelliJ IDE
- Springboot 3.1.5
- Spring cloud netflix eureka
- Spring cloud gateway
- Spring cloud openfeign
- Spring security
- Spring Data JPA
- QueryDSL
- Java 17
- WebSocket
- RabbitMQ
- SSE
- JWT
- Gradle
- Swagger
- FastAPI
- Pandas

`Data`

- mySQL
- Redis
- MongoDB

`Frontend`

- visual Studio Code IDE
- Next.js
- React
- Bootstrap
- Spotify API

`Infra`

- Mobaxterm
- AWS EC2
- Nginx
- Jenkins
- Docker
- Docker-compose

`etc`

- Gitlab
- Notion
- Jira
- Mattermost

## 📅 프로젝트 진행 기간

2023.10.10(화) ~ 2023.11.17(금) (6주간 진행)

## 👨‍💻 팀원 소개
![image](https://github.com/peachez-z/TUNEMATE/assets/122859326/ec325498-e61d-489a-8b48-6d3c20e22a1a)
![image](https://github.com/peachez-z/TUNEMATE/assets/122859326/5ac753d3-c007-4115-ae26-b9693f68f567)


# 어바웃홈 - Frontend

> 우리집 정보 알리미 서비스

<div align="center">
<img src="https://user-images.githubusercontent.com/98331852/241625890-ec9c9d5e-23b7-41b4-8c0b-ce4812d8a04b.png" width="49%">
<img src="https://user-images.githubusercontent.com/98331852/241626232-a34f50cc-5dba-4fbf-8b53-06d16b889aaa.png" width="49%">
</div>

## 👨🏻‍💻 MEMBER

|      | 김성현                                          | 최문준                                             |
| ---- | ----------------------------------------------- | -------------------------------------------------- |
| Role | [BE](https://github.com/k0905shs/about-home-BE) | [FE](https://github.com/Moonjuun/my_home_frontend) |
| Git  | [@k090shs](https://github.com/k0905shs)         | [@Moonjuun](https://github.com/Moonjuun)           |

## 🤔 Background

- Problem: 정보의 비대칭으로 인한 전세 사고 및 사기가 늘어나고 있음
- Solution: 해당 소재지와 보증금/월세 등을 입력하면 해당 소재지의 최우선변제권과 정보를 알려주는 **부동산 정보 제공 서비스**
- Vision: **정보의 비대칭성 해소** / 사회초년생과 정보 취약계층의 **부동산 정보** 알권리 제공

## ✨ Features

- [x] **국토교통부 API**: 국토교통부 API를 통해 정확한 정보 제공
- [x] **다양한 정보 제공**: 공시지가, 실거래가, 전세 실거래가 등의 거래 내역 제공
- [x] **최우선변제권 1**: 보증금, 월세 입력시 해당 소재지의 최우선 변제권을 보여주는 기능 구현
- [x] **최우선변제권 2**: 최초 근저당설정 일자를 입력시 해당 년월에 맞는 최우선변제권을 보여줌
- [x] **사용자 친화적 기능**: 진단 페이지에서 권리사항 체크 시 결과 페이지에서 해당 체크한 부분만 open 기능 구현

## 🔮 Demo

### 1. 진단하기

<img src="https://user-images.githubusercontent.com/98331852/241632586-58fb1e70-3659-4cd9-96b4-b28861fa4799.png" width="50%">

- 해당 input에 값 입력

### 2. 결과 페이지 - 거래가 확인

<div align="center">
<img src="https://user-images.githubusercontent.com/98331852/241632668-7cd6c820-a098-466e-9aa9-cb31266863f3.png" width="40%">
<img src="https://user-images.githubusercontent.com/98331852/241632725-423701ce-0898-4096-97cb-4476866ca7ec.png" width="55%">
</div>

- 공시지가, 실거래가, 전세가 및 각 거래별 상세 거래 확인 가능

### 3. 결과 페이지 - 고액 체납자 확인

<img src="https://user-images.githubusercontent.com/98331852/241635435-c8ad665c-c818-4791-85c1-5b26cf0de151.png" width="50%">

### 4. 결과 페이지 - 확인사항

<img src="https://user-images.githubusercontent.com/98331852/241632856-d28f5834-1ac0-45ce-919d-f9a9fb0559c1.png" width="50%">
- 최우선변제권, 그 외 권리사항 확인 가능

## 🛠 Tech Stack

### Frontend

`React`, `Next.JS`, `BootStrap`, `Recharts`, `styled-components`, `Responsive Web`, `AWS EC2`

## Site

https://about-home.net

## Getting Started

### Install

```bash
$ npm i
```

### Build

```bash
$ npm run build
```

### Start

```bash
$ npm start
```

## Directory

```bash
├── public
├── src
│   └── Layout
├── pages # 페이지 관리
│   ├── components # 컴포넌트
│   ├── api # 서버 통신 함수
│   ├── _app.js
│   └── index.js
├── utils # 유틸 함수
├── styles # 스타일링 관련
│
└── ....etc
```

## Version

- 1.0.0 첫 배포 2023-05-23
- 1.1.0 진단페이지 등기부등본 X 컴포넌트 추가 2023-05-30
- 1.1.1 결과페이지 거래내역 없을시 노출되는 문구 시안성 개선 2023-05-30
- 1.2.1 공지사항 페이지 추가 2023-06-27
- 1.2.2 주소 선택시 공백 노출 수정 2023-06-27
- 1.2.1 Footer 공유하기 URL 버튼 클릭시 사용자 피드백

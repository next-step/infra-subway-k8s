<p align="center">
    <img width="200px;" src="https://raw.githubusercontent.com/woowacourse/atdd-subway-admin-frontend/master/images/main_logo.png"/>
</p>
<p align="center">
  <img alt="npm" src="https://img.shields.io/badge/npm-%3E%3D%205.5.0-blue">
  <img alt="node" src="https://img.shields.io/badge/node-%3E%3D%209.3.0-blue">
  <a href="https://edu.nextstep.camp/c/R89PYi5H" alt="nextstep atdd">
    <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fedu.nextstep.camp%2Fc%2FR89PYi5H">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/next-step/atdd-subway-service">
</p>

<br>

# 인프라공방 샘플 서비스 - 지하철 노선도

<br>

## 🚀 Getting Started

### Install
#### npm 설치
```
cd frontend
npm install
```
> `frontend` 디렉토리에서 수행해야 합니다.

### Usage
#### webpack server 구동
```
npm run dev
```
#### application 구동
```
./gradlew clean build
```
<br>

## 미션

* 미션 진행 후에 아래 질문의 답을 작성하여 PR을 보내주세요.


### 1단계 - 화면 응답 개선하기
1. 성능 개선 결과를 공유해주세요 (Smoke, Load, Stress 테스트 결과)

* http_req_duration
  * smoke: 21.12ms > 17.9ms(-3.22ms) 
  * load: 145.05ms > 55.84ms(-89.21ms)
  * stress: 1060ms > 540.68ms(-519.32ms)

### Smoke
<table>
    <thead>
        <tr>
            <td>before</td>
            <td>after</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="/images/smoke_before_k6.png" alt="smoke before k6" width="640px;" height="640px;"></td>
            <td><img src="/images/smoke_after_k6.png" alt="smoke after k6" width="640px;" height="640px;"></td>
        </tr> 
        <tr>
            <td><img src="/images/smoke_before_grafana.png" alt="smoke before grafana" width="640px;" height="640px;"></td>
            <td><img src="/images/smoke_after_grafana.png" alt="smoke after grafana" width="640px;" height="640px;"></td>
        </tr>
    </tbody>
</table>

### Load
<table>
    <thead>
        <tr>
            <td>before</td>
            <td>after</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="/images/load_before_k6.png" alt="load before k6" width="640px;" height="640px;"></td>
            <td><img src="/images/load_after_k6.png" alt="load after k6" width="640px;" height="640px;"></td>
        </tr> 
        <tr>
            <td><img src="/images/load_before_grafana.png" alt="load before grafana" width="640px;" height="640px;"></td>
            <td><img src="/images/load_after_grafana.png" alt="load after grafana" width="640px;" height="640px;"></td>
        </tr>
    </tbody>
</table>

### Stress
<table>
    <thead>
        <tr>
            <td>before</td>
            <td>after</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="/images/stress_before_k6.png" alt="stress before k6" width="640px;" height="640px;"></td>
            <td><img src="/images/stress_after_k6.png" alt="stress after k6" width="640px;" height="640px;"></td>
        </tr> 
        <tr>
            <td><img src="/images/stress_before_grafana.png" alt="stress before grafana" width="640px;" height="640px;"></td>
            <td><img src="/images/stress_after_grafana.png" alt="stress after grafana" width="640px;" height="640px;"></td>
        </tr>
    </tbody>
</table>


2. 어떤 부분을 개선해보셨나요? 과정을 설명해주세요
* gzip 압축
* cache 설정
* http2 설정

---

### 2단계 - 스케일 아웃

1. Launch Template 링크를 공유해주세요.

2. cpu 부하 실행 후 EC2 추가생성 결과를 공유해주세요. (Cloudwatch 캡쳐)

```sh
$ stress -c 2
```

---


3. 성능 개선 결과를 공유해주세요 (Smoke, Load, Stress 테스트 결과)

### 3단계 - 쿠버네티스로 구성하기
1. 클러스터를 어떻게 구성했는지 알려주세요~ (마스터 노드 : n 대, 워커 노드 n대)

2. 스트레스 테스트 결과를 공유해주세요 (기존에 container 한대 운영시 한계점도 같이 공유해주세요)

3. 현재 워커노드에서 몇대의 컨테이너를 운영중인지 공유해주세요

---

### [추가] WAS 개선하기

1. springboot에 HTTP Cache, gzip 설정하기

2. Data Cache 설정하기

---

### [추가] 클러스터 운영하기
1. kibana 링크를 알려주세요

2. grafana 링크를 알려주세요

3. 지하철 노선도는 어느정도로 requests를 설정하는게 적절한가요?

4. t3.large로 구성할 경우 Node의 LimitRange, ResourceQuota는 어느정도로 설정하는게 적절한가요?

5. 부하테스트를 고려해볼 때 Pod은 몇대정도로 구성해두는게 좋다고 생각하나요?

6. Spinaker 링크를 알려주세요.

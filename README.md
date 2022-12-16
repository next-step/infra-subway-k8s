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

[노션 페이지]에 상세하게 정리했습니다.

2. 어떤 부분을 개선해보셨나요? 과정을 설명해주세요

캐싱과 압축을 통해 네트워크 IO 비용을 평균 60% 줄이고, 스크립트를 비동기로 실행해 렌더링하는 시간을 최소 20% 가량을 줄여 웹 성능을 개선할 수 있었습니다.

---

### 2단계 - 스케일 아웃

1. Launch Template 링크를 공유해주세요.

https://ap-northeast-2.console.aws.amazon.com/ec2/home?region=ap-northeast-2#LaunchTemplateDetails:launchTemplateId=lt-07ad780a983efd43e

2. cpu 부하 실행 후 EC2 추가생성 결과를 공유해주세요. (Cloudwatch 캡쳐)

CPU가 50% 기준으로 인스턴스를 늘리도록 설정했고, 부하테스트를 진행한 결과와 같이 인스턴스 개수가 늘어난 것을 확인했습니다.

<img width="278" alt="스크린샷 2022-12-16 오전 10 53 57" src="https://user-images.githubusercontent.com/92219795/208003960-cf7c08e9-82d8-4572-b1d6-ac45fbf2b3a9.png">

<img width="1085" alt="스크린샷 2022-12-16 오전 10 53 43" src="https://user-images.githubusercontent.com/92219795/208003937-aa9028b5-4e7d-4379-ab3e-2d358fd90529.png">

> 최대 개수로 지정한 7대 보다 넘을 것을 고려해서 20대로 변경했습니다.


```sh
$ stress -c 2
```

---


3. 성능 개선 결과를 공유해주세요 (Smoke, Load, Stress 테스트 결과)

### Smoke Test

```
execution: local
     script: smoke.js
     output: InfluxDBv1 (http://localhost:8086)

  scenarios: (100.00%) 1 scenario, 1 max VUs, 40s max duration (incl. graceful stop):
           * default: 1 looping VUs for 10s (gracefulStop: 30s)

running (10.9s), 0/1 VUs, 9 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  10s

     ✓ logged in successfully
     ✓ retrieved member

     checks.....................: 100.00% ✓ 18       ✗ 0
     data_received..............: 8.7 kB  797 B/s
     data_sent..................: 2.2 kB  206 B/s
     http_req_blocked...........: avg=26.92ms  min=1µs     med=2µs     max=484.67ms p(90)=2.3µs   p(95)=72.7ms
     http_req_connecting........: avg=704.88µs min=0s      med=0s      max=12.68ms  p(90)=0s      p(95)=1.9ms
   ✓ http_req_duration..........: avg=76.72ms  min=22.2ms  med=31.85ms max=822.53ms p(90)=53.08ms p(95)=172.48ms
     http_req_failed............: 100.00% ✓ 18       ✗ 0
     http_req_receiving.........: avg=1.14ms   min=71µs    med=149µs   max=8.82ms   p(90)=2.99ms  p(95)=6.83ms
     http_req_sending...........: avg=449.88µs min=102µs   med=448µs   max=972µs    p(90)=735.4µs p(95)=823.24µs
     http_req_tls_handshaking...: avg=17.56ms  min=0s      med=0s      max=316.17ms p(90)=0s      p(95)=47.42ms
     http_req_waiting...........: avg=75.12ms  min=21.69ms med=29.78ms max=821.85ms p(90)=52.63ms p(95)=171.84ms
     http_reqs..................: 18      1.651325/s
     iteration_duration.........: avg=1.21s    min=1.05s   med=1.06s   max=2.36s    p(90)=1.33s   p(95)=1.84s
     iterations.................: 9       0.825662/s
     vus........................: 1       min=1      max=1
     vus_max....................: 1       min=1      max=1
```

### Load Test

```
execution: local
     script: load.js
     output: -

scenarios: (100.00%) 1 scenario, 6 max VUs, 30m30s max duration (incl. graceful stop):
         * default: Up to 6 looping VUs for 30m0s over 6 stages (gracefulRampDown: 30s, gracefulStop: 30s)

running (30m00.0s), 0/6 VUs, 97541 complete and 0 interrupted iterations
default ✓ [======================================] 0/6 VUs  30m0s

   ✓ Randing page status check
   ✓ Paths Page status check
   ✓ Path api status check

   checks.........................: 100.00% ✓ 292623    ✗ 0
   data_received..................: 344 MB  191 kB/s
   data_sent......................: 13 MB   7.2 kB/s
   http_req_blocked...............: avg=86.7µs   min=0s      med=1µs     max=479.97ms p(90)=1µs      p(95)=2µs
   http_req_connecting............: avg=23.61µs  min=0s      med=0s      max=169.38ms p(90)=0s       p(95)=0s
 ✓ http_req_duration..............: avg=23.26ms  min=10.43ms med=16.07ms max=544.06ms p(90)=32.04ms  p(95)=44.31ms
     { expected_response:true }...: avg=23.26ms  min=10.43ms med=16.07ms max=544.06ms p(90)=32.04ms  p(95)=44.31ms
   http_req_failed................: 0.00%   ✓ 0         ✗ 292623
   http_req_receiving.............: avg=78µs     min=5µs     med=49µs    max=23.13ms  p(90)=114µs    p(95)=179µs
   http_req_sending...............: avg=120.11µs min=10µs    med=71µs    max=24.15ms  p(90)=191µs    p(95)=316µs
   http_req_tls_handshaking.......: avg=61.4µs   min=0s      med=0s      max=466.11ms p(90)=0s       p(95)=0s
   http_req_waiting...............: avg=23.06ms  min=49µs    med=15.9ms  max=543.93ms p(90)=31.87ms  p(95)=44.1ms
   http_reqs......................: 292623  162.56404/s
   iteration_duration.............: avg=70.71ms  min=33.35ms med=52.08ms max=815.1ms  p(90)=100.69ms p(95)=203.87ms
   iterations.....................: 97541   54.188013/s
   vus............................: 3       min=1       max=6
   vus_max........................: 6       min=6       max=6
```

### Stress

```
execution: local
   script: stress.js
   output: -

scenarios: (100.00%) 1 scenario, 120 max VUs, 23m30s max duration (incl. graceful stop):
         * default: Up to 120 looping VUs for 23m0s over 7 stages (gracefulRampDown: 30s, gracefulStop: 30s)

running (23m00.1s), 000/120 VUs, 760911 complete and 0 interrupted iterations
default ✓ [======================================] 000/120 VUs  23m0s

   ✓ Randing page status check
   ✓ Paths Page status check
   ✓ Path api status check

   checks.........................: 100.00% ✓ 2282733     ✗ 0
   data_received..................: 2.7 GB  1.9 MB/s
   data_sent......................: 99 MB   72 kB/s
   http_req_blocked...............: avg=8.04µs   min=0s      med=0s      max=217.69ms p(90)=1µs     p(95)=1µs
   http_req_connecting............: avg=2.26µs   min=0s      med=0s      max=76.48ms  p(90)=0s      p(95)=0s
 ✓ http_req_duration..............: avg=17.28ms  min=10.23ms med=16.56ms max=391.34ms p(90)=20.94ms p(95)=23.23ms
     { expected_response:true }...: avg=17.28ms  min=10.23ms med=16.56ms max=391.34ms p(90)=20.94ms p(95)=23.23ms
   http_req_failed................: 0.00%   ✓ 0           ✗ 2282733
   http_req_receiving.............: avg=264.36µs min=3µs     med=20µs    max=252.53ms p(90)=553µs   p(95)=1.64ms
   http_req_sending...............: avg=44.73µs  min=4µs     med=26µs    max=29.57ms  p(90)=59µs    p(95)=86µs
   http_req_tls_handshaking.......: avg=5.15µs   min=0s      med=0s      max=141.05ms p(90)=0s      p(95)=0s
   http_req_waiting...............: avg=16.97ms  min=0s      med=16.32ms max=390.8ms  p(90)=20.37ms p(95)=22.48ms
   http_reqs......................: 2282733 1654.058257/s
   iteration_duration.............: avg=52.11ms  min=35.28ms med=50.63ms max=497.63ms p(90)=61.03ms p(95)=65.21ms
   iterations.....................: 760911  551.352752/s
   vus............................: 119     min=1         max=119
   vus_max........................: 120     min=120       max=120
```

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

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

- 측정 대상 :http_req_duration (ms)
- 표기 순서 : NoTuning / gzip 개선 / cache 개선 / http2 개선 / AllTuning 
- 결과 
    - Smoke Test 결과 
      - 3 / 4 / 3 / 4 / 4
    - Load Test 결과
      - 49 / 55 / 48 / 48 / 44
    - Stress Test 결과
      - 130 / 132 / 182 / 201 / 178
- 참조
    - smoke.js 테스트 결과 (NoTuning, gzip, cache, http2, AllTuning 순서)
![normal_smoke.JPG](image/normal_smoke.JPG)
![gzip_smoke.JPG](image/gzip_smoke.JPG)
![cache_smoke.JPG](image/cache_smoke.JPG)
![http_smoke.JPG](image/http_smoke.JPG)
![last_smoke.JPG](image/last_smoke.JPG)

    - load.js 테스트 결과 (NoTuning, gzip, cache, http2, AllTuning 순서)
![normal_load.JPG](image/normal_load.JPG)
![gzip_load.JPG](image/gzip_load.JPG)
![cache_load.JPG](image/cache_load.JPG)
![http_load.JPG](image/http_load.JPG)
![last_load.JPG](image/last_load.JPG)

    - stress.js 테스트 결과 (NoTuning, gzip, cache, http2, AllTuning 순서)
![normal_stress.JPG](image/normal_stress.JPG)
![gzip_stress.JPG](image/gzip_stress.JPG)
![cache_stress.JPG](image/cache_stress.JPG)
![http_stress.JPG](image/http_stress.JPG)
![last_stress.JPG](image/last_stress.JPG)

    - webpagetest 테스트 결과 (NoTuning, gzip, cache, http2, AllTuning 순서)
![normal_webpagetest.JPG](image/normal_webpagetest.JPG)
![gzip_webpagetest.JPG](image/gzip_webpagetest.JPG)
![cache_webpagetest.JPG](image/cache_webpagetest.JPG)
![http_webpagetest.JPG](image/http_webpagetest.JPG)
![last_webpagetest.JPG](image/last_webpagetest.JPG)

2. 어떤 부분을 개선해보셨나요? 과정을 설명해주세요
- 아래와 같이 nginx 설정을 변경하였습니다.
    - content-encoding 추가 (gzip)
    - Cache 를 사용하도록 설정
    - HTTP 버전 변경 (1.1 -> 2)
    
---

### 2단계 - 스케일 아웃

1. Launch Template 링크를 공유해주세요.
    
    - https://ap-northeast-2.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchTemplateDetails:launchTemplateId=lt-00158f39fb0d83a1e
   

2. cpu 부하 실행 후 EC2 추가생성 결과를 공유해주세요. (Cloudwatch 캡쳐)
   ![countInstance.JPG](image/countInstance.JPG)
   ![cpuUtilization.JPG](image/cpuUtilization.JPG)
```sh
$ stress -c 2
```

---


3. 성능 개선 결과를 공유해주세요 (Smoke, Load, Stress 테스트 결과)
    - smoke 테스트 결과 (ms)
        - 4 > 5
    - load 테스트 결과 (ms)
        - 44 > 4
    - stress 테스트 결과 (ms)   
        - 178 > 19
    - 참고
        - smoke 테스트
![last_smoke.JPG](image/last_smoke.JPG)
![autuscailing_smoke.JPG](image/autuscailing_smoke.JPG)
        - load 테스트
![last_load.JPG](image/last_load.JPG)
![autuscailing_load.JPG](image/autuscailing_load.JPG)
        - smoke 테스트
![last_stress.JPG](image/last_stress.JPG)
![autuscailing_stress.JPG](image/autuscailing_stress.JPG)

### 3단계 - 쿠버네티스로 구성하기
1. 클러스터를 어떻게 구성했는지 알려주세요~ (마스터 노드 : n 대, 워커 노드 n대)
    - 마스터 노드 1대, 워커 노드 3대
2. 스트레스 테스트 결과를 공유해주세요 (기존에 container 한대 운영시 한계점도 같이 공유해주세요)

- 환경
    - stressTestCase1 : Replicas = 1, VUser = 2000
    - stressTestCase2 : Replicas = 10, VUser = 2000

- 결과
    - case 1 : 7ms (max)
    - case 2 : 3ms (max)
- 결론
    - Replicas 를 여러 개로 구성한 경우, 적절한 로드 밸런싱을 통해 성능 한계가 더 높아진다.
    - Container 를 한대로 운영 시, 트래픽이 몰리는 Stress 상황에서 원활한 서비스가 이루어지지 않을 수 있다.

- 참고 

case1 : 

![case1.JPG](image/case1.JPG)
![case1_stress.JPG](image/case1_stress.JPG)

case2 :

![case2.JPG](image/case2.JPG)
![case2_stress.JPG](image/case2_stress.JPG)

3. 현재 워커노드에서 몇대의 컨테이너를 운영중인지 공유해주세요

- 10대 (파드 내 각각 한개 컨테이너)

![case2.JPG](image/case2.JPG)
![containerCountInPod.JPG](image/containerCountInPod.JPG)


---

### [추가] WAS 개선하기

1. springboot에 HTTP Cache, gzip 설정하기

2. Data Cache 설정하기

3. no-cache, no-store, must-revalidate 를 모두 설정하는 이유
    - 특정 상황과 브라우저에 따라 캐시라고 판단하는 기준이 다를 수 있기 때문에, 확실한 캐시 무효화를 위해 3가지 옵션을 모두 설정합니다. 

- 참고
  - 테스트 결과
    - NoConfig
  ![1_load.JPG](image/1_load.JPG)
  ![1_stress.JPG](image/1_stress.JPG)
    - gzip, cache-control  
  ![2_load.JPG](image/2_load.JPG)
  ![2_stress.JPG](image/2_stress.JPG)
    - Spring Data Cache(Redis)
  ![3_load.JPG](image/3_load.JPG)
  ![3_stress.JPG](image/3_stress.JPG)
    - Etag
  ![4_load.JPG](image/4_load.JPG)
  ![4_stress.JPG](image/4_stress.JPG)

---

### [추가] 클러스터 운영하기
1. kibana 링크를 알려주세요

2. grafana 링크를 알려주세요

3. 지하철 노선도는 어느정도로 requests를 설정하는게 적절한가요?

4. t3.large로 구성할 경우 Node의 LimitRange, ResourceQuota는 어느정도로 설정하는게 적절한가요?

5. 부하테스트를 고려해볼 때 Pod은 몇대정도로 구성해두는게 좋다고 생각하나요?

6. Spinaker 링크를 알려주세요.

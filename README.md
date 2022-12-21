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

[WebPageTest]<br>
[RunningMap](https://wu22e-subway.kro.kr/)

| 데스크톱 기준               | 성능 개선 전 | gzip 적용 | cache 적용 | gzip + cache 적용 |
|-----------------------|---------|---------|----------|-----------------|
| 성능                    | 67      | 91      | 68       | 93              |
| First Contentful Paint | 2.7s    | 1.2s    | 2.6s     | 1.2s            |
| Speed Index           | 2.7s    | 1.8s    | 2.6s     | 1.5s            |
| Largest Contentful Paint | 2.8s    | 1.3s    | 2.7s     | 1.3s            |
| Time to Interactive   | 2.8s    | 1.3s    | 2.7s     | 1.3s            |
| Total Blocking Time   | 50s     | 50ms    | 50ms     | 50ms            |
| Cumulative Layout Shift | 0.004   | 0.004   | 0.004    | 0.004           |


#### [성능 개선 전 / smoke test]
![image](https://user-images.githubusercontent.com/52458039/207430174-d44d83c8-e421-4bf6-b4f1-7a618f7e0ca7.png)
![image](https://user-images.githubusercontent.com/52458039/207430115-5408870c-1356-4031-ac7b-ae95a45d5fe2.png)

#### [성능 개선 전 / load test]
![image](https://user-images.githubusercontent.com/52458039/207991305-0051cb46-ac28-4778-ba52-0c3e3ccf0e9a.png)
![image](https://user-images.githubusercontent.com/52458039/207991206-8702b407-bf08-4922-9191-b8440132fcb1.png)

#### [성능 개선 전 / stress test]
![image](https://user-images.githubusercontent.com/52458039/207992290-828a5eef-1d0b-4b6b-bec0-7487f2354663.png)
![image](https://user-images.githubusercontent.com/52458039/207992189-0f6aed45-a322-4103-b7d1-c920c1a55f90.png)

#### [gzip 적용 / smoke test]
![image](https://user-images.githubusercontent.com/52458039/208254552-6f43df57-1f11-4999-a1dc-c0b10d6093a2.png)
![image](https://user-images.githubusercontent.com/52458039/208254588-8cb00fe8-5f96-47ab-bfc1-2df31bbed405.png)

#### [gzip 적용 / load test]
![image](https://user-images.githubusercontent.com/52458039/208254749-8e7735ec-3894-453b-b3a4-5874af96d465.png)
![image](https://user-images.githubusercontent.com/52458039/208254789-227ec7f8-bb50-40fd-87c5-3a2cc3790d4e.png)

#### [gzip 적용 / stress test]
![image](https://user-images.githubusercontent.com/52458039/208255022-87ce1ae9-2e9c-4983-b08f-84caac6e4614.png)
![image](https://user-images.githubusercontent.com/52458039/208255063-99cc4618-5ad6-4051-971c-da59fca6edd1.png)

#### [cache 적용 / smoke test]
![image](https://user-images.githubusercontent.com/52458039/208269675-fa5eac4f-0951-4daf-8998-8d795b1798a4.png)
![image](https://user-images.githubusercontent.com/52458039/208269687-416704cc-1a06-43a8-8f99-7027d039605c.png)

#### [cache 적용 / load test]
![image](https://user-images.githubusercontent.com/52458039/208269755-395fe5ae-3e69-44f2-8d05-004289708727.png)
![image](https://user-images.githubusercontent.com/52458039/208269774-321a5a03-8c1d-4238-8461-6855c656d37d.png)

#### [cache 적용 / stress test]
![image](https://user-images.githubusercontent.com/52458039/208269921-4f2c429a-6dd4-4b8a-8155-06bcbb29eddd.png)
![image](https://user-images.githubusercontent.com/52458039/208269933-72889199-3cda-4a6e-903c-eecd51407e8b.png)

#### [gzip + cache 적용 / smoke test]
![image](https://user-images.githubusercontent.com/52458039/208270521-b277b489-6896-4384-8750-832c1444a6cd.png)
![image](https://user-images.githubusercontent.com/52458039/208270542-f12a9bea-d7c8-4ebb-8738-16c60b4b57e2.png)


#### [gzip + cache 적용 / load test]
![image](https://user-images.githubusercontent.com/52458039/208270723-9cab668b-d2c5-4d6c-a99f-eca8df97ebe8.png)
![image](https://user-images.githubusercontent.com/52458039/208270759-e94d1899-40f0-4047-b6ff-19dfcbcb5b45.png)

#### [gzip + cache 적용 / stress test]
![image](https://user-images.githubusercontent.com/52458039/208270864-adf5e793-091a-41e5-b24b-6e64ae8af919.png)
![image](https://user-images.githubusercontent.com/52458039/208270879-2865f4e6-01f8-434b-8bc0-632475eb472b.png)

#### [nginx worker-connection 설정 변경 후 stress test]
![image](https://user-images.githubusercontent.com/52458039/208278686-c1fb5aff-ee42-4f03-bc5e-2a131cf59432.png)
![image](https://user-images.githubusercontent.com/52458039/208278710-d07bbc6c-5df6-495c-b816-e83a7a8f8f78.png)

2. 어떤 부분을 개선해보셨나요? 과정을 설명해주세요

- WebPageSpeed 상으로 gzip 만을 적용 했을 때 웹 성능(FCP, LCP, SI, TTI) 이 훨씬 향상 되는 모습을 지표로 보여준다.
- cache 만을 적용 했을 때는 성능 개선 전과 큰 차이가 없음.
- gzip 적용 후 smoke test 결과, 성능 개선 전과 비교하여 평균 Latency 가 약 20ms 빨라짐
- cache 적용 후 smoke test 결과, 성능 개선 전과 비교하여 평균 Latency 가 약 10ms 빨라짐
- gzip + cache 함께 적용 후 SI 가 (gzip 만 적용했을 떄의 SI에 비해) 300ms 정도 개선 됨
- gzip + cache 함께 적용 후 smoke test 는 (gzip 만 적용했을 때의 latency 에 비해) 약 100ms 정도 개선됨. (큰 차이는 없어 보임)
- load 와 stress 테스트는 성능 개선 전과 큰 차이가 없음 (WAS 개선이 필요해 보임)
- stress 테스트의 경우, gzip 혹은 cache 적용과 상관 없이 계속 `connection reset by peer` 현상이 발생
  - 소켓 오픈 파일 default (ulimit -a 의 open files 기준) 1024 였음.
  - stress 테스트 도중 `ls -l /proc/{어플리케이션 PID}/fd | wc -l` 명령을 통해 부하 테스트 진행 중 열리는 파일 디스크립터 갯수를 확인
    - 약 200 개 부터 `connection reset by peer` 현상이 발생 -> 1024 가 되기 전에 발생
  - 소켓 오픈 파일 기본 값은 넉넉 하므로 nginx 의 worker process 문제로 판단
  - nginx error log 확인 결과 다음과 같은 512 개의 worker connection 부족 에러 로그가 찍힘.
    ![image](https://user-images.githubusercontent.com/52458039/208278803-d622a9bd-359e-42fa-929e-4f2da08b42e0.png)
  - worker_connection 을 소켓 오픈 파일 default 값인 1024 에 맞추고 stress 테스트 진행 하니 더이상 `connection reset by peer` 는 발생하지 않음.
  - 하지만 평균 latency 는 약 5초로 굉장히 늦은 지연 시간이 측정 됨.
  - 그라파나의 latency 그래프를 보면 약 5분간의 테스트 중, 초기 약 300ms, 2분 뒤 약 4초, 또 2분뒤 약 16초 정도로 latency 지연 속도가 급격히 증가함


---

### 2단계 - 스케일 아웃

1. Launch Template 링크를 공유해주세요. <br>
https://ap-northeast-2.console.aws.amazon.com/ec2/home?region=ap-northeast-2#LaunchTemplateDetails:launchTemplateId=lt-0d1ec83a449661858

2. cpu 부하 실행 후 EC2 추가생성 결과를 공유해주세요. (Cloudwatch 캡쳐)

[CPU Utilization]
![image](https://user-images.githubusercontent.com/52458039/208428639-0756e2b5-ae1f-4f3a-9a4e-7bb482ce580f.png)

[Group Total Instances]
![image](https://user-images.githubusercontent.com/52458039/208428427-54fd5beb-8e04-4415-be2e-ad093ae2f77f.png)


```sh
$ stress -c 2
```

해당 명령어 실행 후 인스턴스가 4개 까지 증가되는 것을 확인해볼 수 있었음.

---


3. 성능 개선 결과를 공유해주세요 (Smoke, Load, Stress 테스트 결과)

지난 미션에서 VUser 계산을 잘못하여서 스크립트를 수정함. (시나리오상 1회의 요청인데 2로 나눠서 계산된 VUser 값이 반토막 나고 있었음)
계산된 결론
- 평균 VUser = 13
- 피크타임 VUser = 32

변경된 VUser 를 기준으로
smoke, load, stress 에 사용된 스크립트를 수정함. (특히, stress 테스트의 경우 duration 지정이 잘못된 부분도 있었는데 이 또한 수정함.)
처음에는 늘어난 인스턴스 4개중 1개가 꺼져서 3개의 인스턴스를 가지고 smoke, load, stress 테스트를 진행하였음. 

#### [인스턴스 3개의 smoke test 결과]
![image](https://user-images.githubusercontent.com/52458039/208440576-4375fa3e-e5b9-4575-a2b8-69ea3ce86549.png)
- 인스턴스의 갯수가 1개 일때와 큰 차이는 없어 보임.


#### [인스턴스 3개의 load test 결과]
![image](https://user-images.githubusercontent.com/52458039/208440415-a83cf9ec-a5de-4476-8c8a-be260e81e0b6.png)
- 목표 응답 시간인 300ms 에는 미치지 못함. 인스턴스가 좀더 필요해 보임.

[인스턴스 9개 load test 결과]
![image](https://user-images.githubusercontent.com/52458039/208478271-bda86788-489b-4ee1-803b-8c63b53c824f.png)
![image](https://user-images.githubusercontent.com/52458039/208479016-3c876117-c3ed-46be-9a41-cfeced1ebc85.png)
- 인스턴스 9개를 사용할 경우 목표 응답시간인 300ms 를 달성함. (최대 응답시간이 약 1초 정도 되는데, VUser 값이 10초간 13 -> 32 로 갑자기 늘면서 조금의 지연이 생김.)
- VUser 32 정도의 피크타임 에서도 평균 응답시간이 목표값인 약 300ms 에 근사한 응답 시간을 보여준다.  

[인스턴스 9개 stress test 결과]
```
{ duration: '10s', target: 32},
{ duration: '30s', target: 32},
{ duration: '10s', target: 64},
{ duration: '1m', target: 64},
{ duration: '10s', target: 100},
{ duration: '1m', target: 100},
{ duration: '10s', target: 200},
{ duration: '1m', target: 200},
{ duration: '10s', target: 300},
{ duration: '1m', target: 300},
{ duration: '10s', target: 200},
{ duration: '1m', target: 200},
{ duration: '10s', target: 0}        
```

![image](https://user-images.githubusercontent.com/52458039/208488007-f5aa3a0d-1159-4ce7-b03c-3bc2f41e85dc.png)
- VUser 가 32 에서 64로 늘어나는 구간부터 평균 응답시간이 1초 대로 보임. 
- 인스턴스 9 대 기준 VUser 가 32 일때 목표로 하는 300ms 응답 시간을 안정적으로 얻을 수 있다.
- VUser 32 이상이 되면 그떄부터 응답 시간이 1초로 확 늘어나게 된다. 
- 인스턴스 1대와 비교하여 그래프의 경향을 봤을 떄, 인스턴스 1대의 경우, VUser 가 급격히 증가하는 부분에서 응답 지연이 치솟는 경향이 보였는데, 스케일 아웃을 통해 인스턴스가 나눠서 요청을 받아서 응답 지연이 치솟는 경향은 보이지 않음.
- 다만 꾸준히 지연시간이 늘어나는 모습을 보이고 있음. 
- 결론적으로, 인스턴스 9대일 때, (32 Active User 의) rps 약 107 ( = 32 (VUser) / 0.3 (T)) 까지는 300ms 내외로 응답하는 안정성을 갖추고 있다.
- 이후 이벤트가 발생함을 대비하기 위해 보수적으로 9대의 2~3배 정도의 인스턴스를 늘려서 문제 상황에 대응하도록 한다.



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

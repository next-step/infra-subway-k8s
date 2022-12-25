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
마스터 노드 1대, 워커 노드 9대 -> 9대 테스트 하며 목표 응답 시간을 받지 못해 16대 까지 늘림.

2. 스트레스 테스트 결과를 공유해주세요 (기존에 container 한대 운영시 한계점도 같이 공유해주세요)
- VUser 32 -> 64 -> 100 -> 200 -> 300 -> 200 순서로 각 구간 1분간 테스트 진행함.
#### [container 가 1개인 경우]
- deploy.yaml -> replicas = 1 지정 <br>
![image](https://user-images.githubusercontent.com/52458039/209293831-d97c691a-6f1d-445c-afb5-4de74c5305ba.png)
- stress 테스트 
![image](https://user-images.githubusercontent.com/52458039/209302308-b383c343-500e-40a4-9f16-1d3de76c5f10.png)
#### [결과 해석]
![image](https://user-images.githubusercontent.com/52458039/209304299-dd0a47a6-5f94-4085-926c-b87f26cdbd4c.png)
- 컨테이너를 한대만 운영하면, 워커 노드 9대 중 하나의 워커 노드, 그리고 그 워커 노드에서의 하나의 컨테이너가 전부 트래픽을 받기 때문에 상당히 느린 응답 결과가 측정됨.
- 그래프 양상을 봤을 때, VUser 32 구간 (최대 트래픽), 즉 초기 1분 구간 에서도 지연이 발생함을 확인할 수 있음.

#### [container 가 9개인 경우]
- deploy.yaml -> replicas = 9 지정 <br>
![image](https://user-images.githubusercontent.com/52458039/209305573-27ec3c03-dcca-44c8-ae94-138bff2fc639.png)
- load 테스트 (VUser 32)
![image](https://user-images.githubusercontent.com/52458039/209309257-7cb91cee-d8e0-44e2-b72c-36776f76121a.png)
- stress 테스트
![image](https://user-images.githubusercontent.com/52458039/209308395-0c07fd75-7463-45ac-bc13-0ce6c9e751a2.png)
#### [결과 해석]
![image](https://user-images.githubusercontent.com/52458039/209305214-ff5117d1-0664-4564-ab4d-6dc516372ab0.png)
- 각 컨테이너가 각 워커 노드에 잘 할당된 모습을 볼 수 있다.
- load 테스트를 진행 했을 때, 응답 시간이 (p95 기준) 300ms 보다는 더 늘어남. (인스턴스 9대에 대한 부하테스트 시에는 300ms 정도로 계측이 됐었음.)
- stress 테스트를 통해 VUser 가 32 구간일떄 평균적으로 1초 정도의 응답 시간을 보여주고 있다. 이후 VUser 가 증가하면서 목표 응답시간을 맞추지 못하고 점진적으로 1초 -> 약 30초 정도로 응답 시간이 느려지는 것을 확인할 수 있다.

#### [container 가 18개인 경우]
- deploy.yaml -> replicas = 18 지정 <br>
![image](https://user-images.githubusercontent.com/52458039/209311540-f79c5cb1-c174-43c4-b3ba-91e7f2a22c07.png)
- load test (VUser 32)
![image](https://user-images.githubusercontent.com/52458039/209313021-f62e08a2-4a0d-4b9a-a885-fa27605a76e9.png)
- stress test
![image](https://user-images.githubusercontent.com/52458039/209314467-2b918d9b-ce55-4ee4-bace-525e5afe17e1.png)

#### [결과 해석]
![image](https://user-images.githubusercontent.com/52458039/209311431-2a4a6ef3-787c-46c9-8713-f6057720dba3.png)
- 각 워커노드에 3개, 2개, 2개, 2개, 2개, 2개, 1개, 2개, 2개의 컨테이너가 할당된 모습이다.
- 오히려 컨테이너를 9개 -> 18개로 두배로 늘렸더니, load 테스트의 경우 그라파나의 응답 시간의 그래프 양상이 튀는 구간이 많아짐.
  - 워커노드 한대에 여러 컨테이너가 동시에 요청을 처리하다 보니 컨테이너 1대에 비해 리소스가 부족하여 응답 지연이 더 발생하지 않았나 예상해 봄.
- stress 테스트의 경우, container 가 9대나 18대나 응답 지연 시간만 보면 큰 차이는 없어보임.
  - 하지만 그라파나의 응잡 지연 양상을 보면, 튀는 구간이 9대에 비해 많은 것을 확인할 수 있음. (9대일 때에 비해 18대 일때, 그래프의 요동이 많아 보임.)
  - 이 또한 load 테스트와 비슷한 이유일 거라 추측됨.

여기까지 워커노드 9대를 이용했음.
--- 
목표 응답 시간을 얻기 위해 워커 노드를 16대로 늘리고 테스트를 진행함.
#### [container 가 16개인 경우]
- deploy.yaml -> replicas = 16 지정 <br>
![image](https://user-images.githubusercontent.com/52458039/209339886-5d95538f-6623-4475-8797-bb3f55272f4f.png)
- load test (VUser 32)
![image](https://user-images.githubusercontent.com/52458039/209339976-17cdfff5-0da6-4548-8d07-a567cf1141fc.png)
- stress test
![image](https://user-images.githubusercontent.com/52458039/209340162-a78a4bff-c2a4-4c4e-b452-8ae720a137f4.png)

#### [결과 해석]
- 워커 노드 16대, 컨테이너 16개를 사용했을 때, load test 에서 원하는 목표 응답 시간을 얻을 수 있었음.
- stress test 결과도 마찬가지로 VUser 32 구간까지는 목표 응답시간을 만족함.
  - VUser 64 부터는 1.5초 대로 목표 응답시간을 맞추지 못함.

3. 현재 워커노드에서 몇대의 컨테이너를 운영중인지 공유해주세요
- 워커 노드 1대당 컨테이너 1개 씩 운영하였음. 


#### [피드백 반영]
- mysql max_connection 은 현재 151 임.
  ![image](https://user-images.githubusercontent.com/52458039/209455782-f7f047fe-4f41-4213-b95c-8456265bc5e2.png)
- stress 테스트 전, mysql status 는 아래와 같다.
![image](https://user-images.githubusercontent.com/52458039/209456285-186a3d66-c11f-4609-a332-b66002a4dfb5.png)
![image](https://user-images.githubusercontent.com/52458039/209456278-b4e31ccf-9bec-4ea1-ba8d-dfc196aa570d.png)

- stress 테스트 후, mysql status 는 아래와 같다.
![image](https://user-images.githubusercontent.com/52458039/209455817-d478eea7-6a1d-4eda-987e-ae6202199bf2.png)
![image](https://user-images.githubusercontent.com/52458039/209456259-655c30be-0c6f-4640-9f16-6158a0eec173.png)
- Connection Usage (%) = Threads_connected / max_connections * 100 = 152 / 151 * 100 = 100% 를 넘어섬.
- 실시간으로 부하테스트 진행하며 status 를 관찰한 결과 시작하자마자 Thread_connected 는 152 로 최대 max connection 만큼의 스레드가 생성되고 연결되어 요청을 처리하고 있음.
- 모든 connection 이 연결된 상태로 요청을 계속해서 받다보니 지연이 계속 발생하게됨. -> 테스트 약 1분이 지나면 aborted_clients 갯수가 늘어나는 것을 확인함. (hikaricp connection timeout default 값이 30s 이므로 초반의 낮은 rps 를 처리하는 것을 감안하여 1분 정도 후 지연으로 인한 요청 거부 현상이 생기는 것은 타당해 보임.)
- 현재 워커노드 16대에 컨테이너 16대를 운영중에 있고, hikaricp default max connection pool default 10 인 상황이므로, 실시간으로 디비 connection 이 최소 160개를 계속 유지하며 요청을 하는 상황이므로, mysql 의 max_connections 로 인한 문제가 없게끔 151 -> 2000 정도로 늘리고 다시 부하테스트를 진행한다.<br>
![image](https://user-images.githubusercontent.com/52458039/209456573-9628a5dd-7ed1-4162-84f1-2eb185db214a.png)
- 부하테스트 결과
![image](https://user-images.githubusercontent.com/52458039/209456713-13848f5f-2a51-4b45-97dd-7b88890adbb0.png)
![image](https://user-images.githubusercontent.com/52458039/209456756-7e39f11d-5941-47b1-9ac9-1d7c269113e0.png)
- 커넥션으로 인한 에러는 발생하지 않음.
- max_connection 설정과 비교하여 p95 값은 많이 개선됨.
- 초반 피크 구간 (VUser 32) 에서는 이전 테스트에서도 connection 문제는 없었을 것이므로 응답 시간이 비슷한 모습이다.
- 1분 이후부터 p90 과 p95 값이 차이가 많이 나기 시작함. (이전 테스트에서는 둘다 비슷한 응답시간의 양상을 보였음. 튀는 부분이 별로 없고 연속적으로 응답시간이 지연되는 모습이었음.)
  - connection 문제는 해결되었지만, thread 별로 요청을 처리하는 시간이 상이한것으로 예상됨 -> 이전 테스트에 비해 커넥션을 잘 가져와서 요청을 처리했기에 빠른 응답시간이 좀더 많아진 것으로 예상됨. (하지만 rps 가 높아지면서 여전히 요청 지연 현상은 남아있음) 
  - VUser 64 부터는 원하는 목표 응답시간을 잘 처리하지는 못하는 모습임. 


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

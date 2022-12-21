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

- 부하 테스트는 스케일 아웃 이후에 다시 테스트 진행

2. 어떤 부분을 개선해보셨나요? 과정을 설명해주세요

```bash
# 웹 성능 개선 목록
- 정적 파일 gzip 압축 적용
- HTTP cache 적용
- js 파일 비동기 로딩 적용
- HTTP 2.0 적용

# WAS 
- 무한으로 실행되는 병렬 처리 코드 제거
- 동기로 실행되는 응답 지연 코드 제거
```

---

### 2단계 - 스케일 아웃

1. Launch Template 링크를 공유해주세요.

- https://ap-northeast-2.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#LaunchTemplateDetails:launchTemplateId=lt-0f6d07a5aab91ad3f

2. cpu 부하 실행 후 EC2 추가생성 결과를 공유해주세요. (Cloudwatch 캡쳐)

- `/result/load/img` 경로에 추가 완료
- https://ap-northeast-2.console.aws.amazon.com/cloudwatch/home?region=ap-northeast-2#dashboards:name=jeongmin94-dashboard;start=PT15M

3. 성능 개선 결과를 공유해주세요 (Smoke, Load, Stress 테스트 결과)

- `/result/load` 경로에 추가 완료

### 3단계 - 쿠버네티스로 구성하기
1. 클러스터를 어떻게 구성했는지 알려주세요~ (마스터 노드 : n 대, 워커 노드 n대)

- 마스터 노드 1대
- 워커 노드 최대 16대
- 데이터베이스 전용 EC2 1대

2. 스트레스 테스트 결과를 공유해주세요 (기존에 container 한대 운영시 한계점도 같이 공유해주세요)

- `/result/k8s/load/result.md`에 작성 완료
- 컨테이너를 한대만 운영하면 인스턴스 하나에 서버를 실행시키는 것과 크게 다르지 않은 것 같음
  - 다만 쿠버네티스 덕분에 모종의 이유로 애플리케이션이 종료되어도 다시 실행시켜준다는 점에서 안정성이 조금 더 높아보임
  - 테스트 환경이 이상한건지 워커 노드에 컨테이너의 개수를 1대를 운영할 때 가장 성능이 좋게 나옴
  - 해당 현상의 원인이 무엇인지 파악이 힘듬

3. 현재 워커노드에서 몇대의 컨테이너를 운영중인지 공유해주세요

- replicas 6

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
    name: my-app

spec:
    replicas: 6
    # 컨테이너의 라벨을 선택
    selector:
        matchLabels:
            run: app
    strategy:
        # RollingUpdate | Recreate (잘 안쓰임)
        type: RollingUpdate

        rollingUpdate:
            # RollingUpdate 중 최대 중단 Pod 허용개수 (또는 비율)
            maxUnavailable: 25%
            # RollingUpdate 중 최대 초과 Pod 허용개수 (또는 비율)
            maxSurge: 25%
    template:
        metadata:
            labels:
                run: app
        # Pod의 spec과 같음
        spec:
            containers:
            - name: subway
              image: kim9099i/subway:0.0.5

```

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

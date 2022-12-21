# 레플리카 6개로 세팅하고 테스트

## 스모크

```markdown
running (1m00.0s), 0/2 VUs, 369 complete and 0 interrupted iterations
default ✓ [======================================] 0/2 VUs  1m0s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 1107     ✗ 0   
     data_received..................: 1.5 MB  24 kB/s
     data_sent......................: 54 kB   893 B/s
     http_req_blocked...............: avg=282.27µs min=0s       med=1µs      max=73.41ms  p(90)=2µs      p(95)=2µs     
     http_req_connecting............: avg=59.83µs  min=0s       med=0s       max=9.68ms   p(90)=0s       p(95)=0s      
   ✓ http_req_duration..............: avg=53.65ms  min=4.69ms   med=7.6ms    max=560.05ms p(90)=145.53ms p(95)=166.37ms
       { expected_response:true }...: avg=53.65ms  min=4.69ms   med=7.6ms    max=560.05ms p(90)=145.53ms p(95)=166.37ms
     http_req_failed................: 0.00%   ✓ 0        ✗ 1107
     http_req_receiving.............: avg=123.15µs min=9µs      med=77µs     max=6.23ms   p(90)=191µs    p(95)=306.39µs
     http_req_sending...............: avg=143.9µs  min=15µs     med=78µs     max=5.01ms   p(90)=251.4µs  p(95)=396.39µs
     http_req_tls_handshaking.......: avg=171.3µs  min=0s       med=0s       max=24.02ms  p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=53.39ms  min=1.78ms   med=7.33ms   max=559.89ms p(90)=144.81ms p(95)=166.18ms
     http_reqs......................: 1107    18.44574/s
     iteration_duration.............: avg=162.62ms min=120.81ms med=150.85ms max=647.89ms p(90)=195.34ms p(95)=232.51ms
     iterations.....................: 369     6.14858/s
     vus............................: 1       min=1      max=1 
     vus_max........................: 2       min=2      max=2 

```

## 로드

- 워커 노드 16개
- 2분, 10분씩 부하 테스트 진행

```markdown
running (2m40.2s), 000/132 VUs, 6971 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  2m40s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 20913     ✗ 0    
     data_received..................: 28 MB   177 kB/s
     data_sent......................: 1.0 MB  6.5 kB/s
     http_req_blocked...............: avg=273.26µs min=0s       med=1µs    max=46.16ms p(90)=1µs     p(95)=1µs   
     http_req_connecting............: avg=63.87µs  min=0s       med=0s     max=12.65ms p(90)=0s      p(95)=0s    
✗ http_req_duration..............: avg=892.46ms min=3.91ms   med=8.15ms max=12.37s  p(90)=3.41s   p(95)=4.11s
{ expected_response:true }...: avg=892.46ms min=3.91ms   med=8.15ms max=12.37s  p(90)=3.41s   p(95)=4.11s
http_req_failed................: 0.00%   ✓ 0         ✗ 20913
http_req_receiving.............: avg=486.94µs min=5µs      med=65µs   max=266.7ms p(90)=414.8µs p(95)=1.58ms
http_req_sending...............: avg=92.14µs  min=7µs      med=57µs   max=12.66ms p(90)=175µs   p(95)=225µs
http_req_tls_handshaking.......: avg=204.56µs min=0s       med=0s     max=31.83ms p(90)=0s      p(95)=0s    
http_req_waiting...............: avg=891.88ms min=919µs    med=8ms    max=12.37s  p(90)=3.41s   p(95)=4.11s
http_reqs......................: 20913   130.53024/s
iteration_duration.............: avg=2.67s    min=117.78ms med=2.66s  max=12.39s  p(90)=4.51s   p(95)=5.93s
iterations.....................: 6971    43.51008/s
vus............................: 2       min=2       max=132
vus_max........................: 132     min=132     max=132

ERRO[0161] some thresholds have failed

running (10m40.0s), 000/132 VUs, 24471 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  10m40s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 73413      ✗ 0    
     data_received..................: 99 MB   154 kB/s
     data_sent......................: 3.6 MB  5.6 kB/s
     http_req_blocked...............: avg=8.68ms   min=0s       med=1µs    max=11.17s   p(90)=1µs   p(95)=2µs   
     http_req_connecting............: avg=54.94µs  min=0s       med=0s     max=28.82ms  p(90)=0s    p(95)=0s    
   ✗ http_req_duration..............: avg=1.1s     min=3.69ms   med=8.78ms max=30.78s   p(90)=3.76s p(95)=6.39s 
       { expected_response:true }...: avg=1.1s     min=3.69ms   med=8.78ms max=30.78s   p(90)=3.76s p(95)=6.39s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 73413
     http_req_receiving.............: avg=555.85µs min=5µs      med=72µs   max=269.78ms p(90)=495µs p(95)=1.96ms
     http_req_sending...............: avg=140.77µs min=8µs      med=75µs   max=18.71ms  p(90)=240µs p(95)=371µs 
     http_req_tls_handshaking.......: avg=8.62ms   min=0s       med=0s     max=11.16s   p(90)=0s    p(95)=0s    
     http_req_waiting...............: avg=1.1s     min=91µs     med=8.53ms max=30.78s   p(90)=3.76s p(95)=6.39s 
     http_reqs......................: 73413   114.708834/s
     iteration_duration.............: avg=3.35s    min=119.36ms med=2.17s  max=30.8s    p(90)=8.58s p(95)=11.32s
     iterations.....................: 24471   38.236278/s
     vus............................: 1       min=1        max=132
     vus_max........................: 132     min=132      max=132

ERRO[0640] some thresholds have failed    
```

## 스트레스

- 워커 노드 16개
- 100명부터 시작해서 600명까지 1분당 100명씩 증가
- vuser 약 450~470명 부터 서버에서 요청을 정상적으로 처리하지 못하는 현상 발생
- 워커 노드를 늘린만큼 평균, max 값이 줄어들었음

```markdown
running (7m11.5s), 000/600 VUs, 16797 complete and 0 interrupted iterations
default ✓ [======================================] 000/600 VUs  7m0s

     ✗ index page check
      ↳  99% — ✓ 16795 / ✗ 2
     ✗ get stations check
      ↳  99% — ✓ 16796 / ✗ 1
     ✗ find path check
      ↳  99% — ✓ 16647 / ✗ 150

     checks.........................: 99.69% ✓ 50238      ✗ 153  
     data_received..................: 69 MB  160 kB/s
     data_sent......................: 2.6 MB 6.1 kB/s
     http_req_blocked...............: avg=390.98µs min=0s      med=0s     max=89.28ms p(90)=1µs    p(95)=1µs   
     http_req_connecting............: avg=89µs     min=0s      med=0s     max=18.26ms p(90)=0s     p(95)=0s    
   ✗ http_req_duration..............: avg=2.6s     min=3.6ms   med=9.31ms max=35.37s  p(90)=9.91s  p(95)=15.47s
       { expected_response:true }...: avg=2.56s    min=3.6ms   med=9.25ms max=31.86s  p(90)=9.78s  p(95)=15.36s
     http_req_failed................: 0.30%  ✓ 153        ✗ 50238
     http_req_receiving.............: avg=1.28ms   min=0s      med=40µs   max=2.12s   p(90)=543µs  p(95)=2.06ms
     http_req_sending...............: avg=59.7µs   min=7µs     med=36µs   max=6.62ms  p(90)=108µs  p(95)=164µs 
     http_req_tls_handshaking.......: avg=298.33µs min=0s      med=0s     max=83.18ms p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=2.6s     min=80µs    med=9.19ms max=35.37s  p(90)=9.88s  p(95)=15.47s
     http_reqs......................: 50391  116.772026/s
     iteration_duration.............: avg=7.81s    min=61.68ms med=5.2s   max=35.4s   p(90)=19.02s p(95)=25.93s
     iterations.....................: 16797  38.924009/s
     vus............................: 1      min=1        max=600
     vus_max........................: 600    min=600      max=600

ERRO[0432] some thresholds have failed
```
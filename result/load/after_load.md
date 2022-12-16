# 부하테스트 - 스케일 아웃 적용

## smoke 테스트

- 응답 시간이 소폭 증가하긴 했지만, 이상 없음

```
 execution: local
     script: smoke.js
     output: -

  scenarios: (100.00%) 1 scenario, 2 max VUs, 1m30s max duration (incl. graceful stop):
           * default: Up to 2 looping VUs for 1m0s over 1 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (1m00.0s), 0/2 VUs, 432 complete and 0 interrupted iterations
default ✓ [======================================] 0/2 VUs  1m0s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 1296      ✗ 0   
     data_received..................: 1.6 MB  27 kB/s
     data_sent......................: 159 kB  2.6 kB/s
     http_req_blocked...............: avg=26.15µs  min=0s      med=5µs      max=18.53ms  p(90)=13µs     p(95)=14µs    
     http_req_connecting............: avg=3.93µs   min=0s      med=0s       max=5.09ms   p(90)=0s       p(95)=0s      
   ✓ http_req_duration..............: avg=46.01ms  min=5.52ms  med=7.47ms   max=1.52s    p(90)=119.3ms  p(95)=148.89ms
       { expected_response:true }...: avg=46.01ms  min=5.52ms  med=7.47ms   max=1.52s    p(90)=119.3ms  p(95)=148.89ms
     http_req_failed................: 0.00%   ✓ 0         ✗ 1296
     http_req_receiving.............: avg=1.06ms   min=8µs     med=108µs    max=215.43ms p(90)=443.5µs  p(95)=813.99µs
     http_req_sending...............: avg=29.72µs  min=2µs     med=23µs     max=489µs    p(90)=59µs     p(95)=65µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=44.92ms  min=5.45ms  med=7.35ms   max=1.51s    p(90)=116.81ms p(95)=143.2ms 
     http_reqs......................: 1296    21.587234/s
     iteration_duration.............: avg=138.93ms min=88.22ms med=122.07ms max=1.54s    p(90)=184.51ms p(95)=232.49ms
     iterations.....................: 432     7.195745/s
     vus............................: 1       min=1       max=1 
     vus_max........................: 2       min=2       max=2 
```

## load 테스트

- 2,2,2
- 스케일 아웃을 적용하기 전에 비해 응답 시간이 전체적으로 50% 정도 줄었음
- 인스턴스의 최대 확장 개수를 4개로 늘려서 다시 테스트를 진행

```
  scenarios: (100.00%) 1 scenario, 132 max VUs, 2m10s max duration (incl. graceful stop):
           * default: Up to 132 looping VUs for 1m40s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (1m40.1s), 000/132 VUs, 2798 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  1m40s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 8394      ✗ 0    
     data_received..................: 11 MB   107 kB/s
     data_sent......................: 1.0 MB  10 kB/s
     http_req_blocked...............: avg=104.21µs min=0s      med=4µs    max=27.13ms p(90)=9µs   p(95)=13µs  
     http_req_connecting............: avg=93.78µs  min=0s      med=0s     max=26.32ms p(90)=0s    p(95)=0s    
   ✗ http_req_duration..............: avg=1.28s    min=3.72ms  med=7.8ms  max=7.89s   p(90)=4.8s  p(95)=5.07s 
       { expected_response:true }...: avg=1.28s    min=3.72ms  med=7.8ms  max=7.89s   p(90)=4.8s  p(95)=5.07s 
     http_req_failed................: 0.00%   ✓ 0         ✗ 8394 
     http_req_receiving.............: avg=491.45µs min=8µs     med=104µs  max=108.2ms p(90)=816µs p(95)=1.68ms
     http_req_sending...............: avg=28.18µs  min=2µs     med=20µs   max=2.68ms  p(90)=43µs  p(95)=63µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s    p(95)=0s    
     http_req_waiting...............: avg=1.28s    min=3.64ms  med=7.67ms max=7.89s   p(90)=4.79s p(95)=5.07s 
     http_reqs......................: 8394    83.877222/s
     iteration_duration.............: avg=3.85s    min=99.98ms med=4.13s  max=7.91s   p(90)=5.18s p(95)=5.3s  
     iterations.....................: 2798    27.959074/s
     vus............................: 1       min=1       max=132
     vus_max........................: 132     min=132     max=132

ERRO[0100] some thresholds have failed  
```

- 4,2,4
- 인스턴스의 수가 두 배로 늘어난만큼 응답 시간이 줄어든 것을 확인할 수 있음
- 그러나 최번시 기준으로 2.2초 내로 모든 응답이 처리되어야 하는데, 아직 기준을 충족하지 못하기 때문에 인스턴스의 수를 더 늘려 테스트 진행

```
running (1m40.5s), 000/132 VUs, 4800 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  1m40s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 14400      ✗ 0    
     data_received..................: 18 MB   182 kB/s
     data_sent......................: 1.8 MB  18 kB/s
     http_req_blocked...............: avg=53.04µs  min=0s      med=2µs    max=18.97ms p(90)=6µs     p(95)=8µs     
     http_req_connecting............: avg=48.13µs  min=0s      med=0s     max=13.5ms  p(90)=0s      p(95)=0s      
   ✗ http_req_duration..............: avg=764.75ms min=3.57ms  med=7.11ms max=13.48s  p(90)=3.66s   p(95)=4.97s   
       { expected_response:true }...: avg=764.75ms min=3.57ms  med=7.11ms max=13.48s  p(90)=3.66s   p(95)=4.97s   
     http_req_failed................: 0.00%   ✓ 0          ✗ 14400
     http_req_receiving.............: avg=299.11µs min=6µs     med=54µs   max=39.71ms p(90)=420.1µs p(95)=900.04µs
     http_req_sending...............: avg=15.93µs  min=1µs     med=11µs   max=5.56ms  p(90)=27µs    p(95)=36µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=764.44ms min=3.55ms  med=7.03ms max=13.48s  p(90)=3.66s   p(95)=4.96s   
     http_reqs......................: 14400   143.242747/s
     iteration_duration.............: avg=2.29s    min=89.25ms med=1.03s  max=13.5s   p(90)=5.53s   p(95)=7.75s   
     iterations.....................: 4800    47.747582/s
     vus............................: 10      min=7        max=132
     vus_max........................: 132     min=132      max=132

ERRO[0101] some thresholds have failed 
```

- 6, 6, 10
- 6개에서 시작하여 최대 10개까지 늘릴 수 있도록 설정 변경
- `p(99) < 2200`의 조건을 만족하지 못하는 상태

```
  execution: local
     script: load.js
     output: -

  scenarios: (100.00%) 1 scenario, 132 max VUs, 2m10s max duration (incl. graceful stop):
           * default: Up to 132 looping VUs for 1m40s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (1m40.1s), 000/132 VUs, 8010 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  1m40s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 24030      ✗ 0    
     data_received..................: 31 MB   307 kB/s
     data_sent......................: 2.9 MB  29 kB/s
     http_req_blocked...............: avg=34.66µs  min=0s      med=3µs      max=20.08ms p(90)=6µs     p(95)=8µs   
     http_req_connecting............: avg=29.61µs  min=0s      med=0s       max=14.18ms p(90)=0s      p(95)=0s    
   ✗ http_req_duration..............: avg=443.68ms min=3.37ms  med=7.03ms   max=7.06s   p(90)=1.59s   p(95)=2.97s 
       { expected_response:true }...: avg=443.68ms min=3.37ms  med=7.03ms   max=7.06s   p(90)=1.59s   p(95)=2.97s 
     http_req_failed................: 0.00%   ✓ 0          ✗ 24030
     http_req_receiving.............: avg=319.25µs min=7µs     med=67µs     max=42.14ms p(90)=570.1µs p(95)=1.17ms
     http_req_sending...............: avg=18.69µs  min=1µs     med=14µs     max=5.31ms  p(90)=28µs    p(95)=37µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s      p(95)=0s    
     http_req_waiting...............: avg=443.34ms min=3.34ms  med=6.94ms   max=7.06s   p(90)=1.59s   p(95)=2.97s 
     http_reqs......................: 24030   240.047247/s
     iteration_duration.............: avg=1.33s    min=87.04ms med=804.37ms max=7.07s   p(90)=3.33s   p(95)=3.98s 
     iterations.....................: 8010    80.015749/s
     vus............................: 1       min=1        max=132
     vus_max........................: 132     min=132      max=132

ERRO[0101] some thresholds have failed  
```

- 12, 12, 12
- 95 퍼센트의 요청이 1.33초 내로 처리되어 모든 요청이 2.2초 내로 처리되는 목표에는 부합하진 않지만 실 서비스에서는 문제가 없어보임

```
  execution: local
     script: load.js
     output: -

  scenarios: (100.00%) 1 scenario, 132 max VUs, 2m10s max duration (incl. graceful stop):
           * default: Up to 132 looping VUs for 1m40s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (1m40.1s), 000/132 VUs, 15151 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  1m40s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 45453      ✗ 0    
     data_received..................: 58 MB   578 kB/s
     data_sent......................: 5.5 MB  55 kB/s
     http_req_blocked...............: avg=19.05µs  min=0s      med=2µs     max=18.36ms p(90)=5µs      p(95)=6µs  
     http_req_connecting............: avg=15.3µs   min=0s      med=0s      max=14.89ms p(90)=0s       p(95)=0s   
   ✗ http_req_duration..............: avg=233.6ms  min=3.31ms  med=6.83ms  max=3.71s   p(90)=860.33ms p(95)=1.33s
       { expected_response:true }...: avg=233.6ms  min=3.31ms  med=6.83ms  max=3.71s   p(90)=860.33ms p(95)=1.33s
     http_req_failed................: 0.00%   ✓ 0          ✗ 45453
     http_req_receiving.............: avg=225.22µs min=6µs     med=48µs    max=48.75ms p(90)=353µs    p(95)=751µs
     http_req_sending...............: avg=15.3µs   min=1µs     med=11µs    max=11.15ms p(90)=22µs     p(95)=30µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s   
     http_req_waiting...............: avg=233.36ms min=3.28ms  med=6.76ms  max=3.7s    p(90)=859.2ms  p(95)=1.33s
     http_reqs......................: 45453   454.093557/s
     iteration_duration.............: avg=701.25ms min=82.52ms med=387.1ms max=3.72s   p(90)=1.62s    p(95)=2.29s
     iterations.....................: 15151   151.364519/s
     vus............................: 1       min=1        max=132
     vus_max........................: 132     min=132      max=132

ERRO[0101] some thresholds have failed 
```

- 2,2,12로 부하 테스트 실행
- 인스턴스가 7개까지 늘어남
- 7, 2, 12 상태에서 다시 테스트 진행

```
running (7m40.1s), 000/132 VUs, 18434 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  7m40s

     ✗ index page check
      ↳  94% — ✓ 17470 / ✗ 964
     ✗ get stations check
      ↳  94% — ✓ 17362 / ✗ 1072
     ✗ find path check
      ↳  88% — ✓ 16297 / ✗ 2137

     checks.........................: 92.45% ✓ 51129      ✗ 4173 
     data_received..................: 66 MB  143 kB/s
     data_sent......................: 6.7 MB 15 kB/s
     http_req_blocked...............: avg=23.19µs  min=0s      med=4µs      max=56.16ms p(90)=7µs   p(95)=11µs  
     http_req_connecting............: avg=15.28µs  min=0s      med=0s       max=15.41ms p(90)=0s    p(95)=0s    
   ✗ http_req_duration..............: avg=1.05s    min=2.97ms  med=7.2ms    max=16.13s  p(90)=6.92s p(95)=8.27s 
       { expected_response:true }...: avg=1.14s    min=3.28ms  med=7.45ms   max=16.13s  p(90)=7.07s p(95)=8.31s 
     http_req_failed................: 7.54%  ✓ 4173       ✗ 51129
     http_req_receiving.............: avg=368.64µs min=7µs     med=94µs     max=88.47ms p(90)=459µs p(95)=1.05ms
     http_req_sending...............: avg=33.41µs  min=1µs     med=19µs     max=22.41ms p(90)=41µs  p(95)=62µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s    p(95)=0s    
     http_req_waiting...............: avg=1.05s    min=2.91ms  med=7.04ms   max=16.13s  p(90)=6.91s p(95)=8.27s 
     http_reqs......................: 55302  120.208429/s
     iteration_duration.............: avg=3.17s    min=11.74ms med=794.45ms max=16.15s  p(90)=8.45s p(95)=8.67s 
     iterations.....................: 18434  40.069476/s
     vus............................: 2      min=2        max=132
     vus_max........................: 132    min=132      max=132

ERRO[0461] some thresholds have failed   
```

- 7,7,12
- 테스트 후 11, 2, 12까지 인스턴스 늘어남
- 인스턴스가 11개인 상태에서 다시 테스트 진행

```
running (7m40.1s), 000/132 VUs, 42783 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  7m40s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 128349     ✗ 0     
     data_received..................: 163 MB  354 kB/s
     data_sent......................: 16 MB   34 kB/s
     http_req_blocked...............: avg=11.54µs  min=0s      med=3µs      max=38.1ms  p(90)=6µs      p(95)=8µs  
     http_req_connecting............: avg=5.88µs   min=0s      med=0s       max=20.96ms p(90)=0s       p(95)=0s   
   ✗ http_req_duration..............: avg=454.29ms min=3.23ms  med=7.13ms   max=13.86s  p(90)=690.06ms p(95)=4.08s
       { expected_response:true }...: avg=454.29ms min=3.23ms  med=7.13ms   max=13.86s  p(90)=690.06ms p(95)=4.08s
     http_req_failed................: 0.00%   ✓ 0          ✗ 128349
     http_req_receiving.............: avg=234.39µs min=6µs     med=70µs     max=38.89ms p(90)=359µs    p(95)=724µs
     http_req_sending...............: avg=24.15µs  min=1µs     med=16µs     max=17.14ms p(90)=30µs     p(95)=43µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s   
     http_req_waiting...............: avg=454.04ms min=3.19ms  med=7.02ms   max=13.86s  p(90)=689.18ms p(95)=4.07s
     http_reqs......................: 128349  278.987502/s
     iteration_duration.............: avg=1.36s    min=76.74ms med=312.16ms max=13.88s  p(90)=6.56s    p(95)=6.96s
     iterations.....................: 42783   92.995834/s
     vus............................: 1       min=1        max=132 
     vus_max........................: 132     min=132      max=132 

ERRO[0461] some thresholds have failed  
```

- 12, 2, 16
- 최대 인스턴스의 개수를 16개로 설정해도 12개에서 더 이상 늘어나지 않음
- max에서 35초가 넘는 응답이 있어 인스턴스 초기화 후 다시 진행

```
running (8m05.4s), 000/132 VUs, 49734 complete and 5 interrupted iterations
default ✓ [======================================] 000/132 VUs  7m40s

     ✗ index page check
      ↳  98% — ✓ 49114 / ✗ 625
     ✗ get stations check
      ↳  98% — ✓ 48989 / ✗ 750
     ✗ find path check
      ↳  98% — ✓ 48785 / ✗ 949

     checks.........................: 98.44% ✓ 146888     ✗ 2324  
     data_received..................: 187 MB 386 kB/s
     data_sent......................: 18 MB  37 kB/s
     http_req_blocked...............: avg=10.09µs  min=0s      med=2µs      max=43.7ms  p(90)=5µs      p(95)=7µs     
     http_req_connecting............: avg=5.01µs   min=0s      med=0s       max=16.39ms p(90)=0s       p(95)=0s      
   ✗ http_req_duration..............: avg=399.6ms  min=3.14ms  med=6.89ms   max=35.13s  p(90)=427.5ms  p(95)=941.95ms
       { expected_response:true }...: avg=358.63ms min=3.18ms  med=6.92ms   max=35.13s  p(90)=427.55ms p(95)=924.49ms
     http_req_failed................: 1.55%  ✓ 2324       ✗ 146888
     http_req_receiving.............: avg=207.76µs min=4µs     med=54µs     max=79.38ms p(90)=305µs    p(95)=612µs   
     http_req_sending...............: avg=22.09µs  min=1µs     med=12µs     max=19.88ms p(90)=28µs     p(95)=42µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=399.37ms min=3.09ms  med=6.79ms   max=35.13s  p(90)=427.2ms  p(95)=941.51ms
     http_reqs......................: 149212 307.383713/s
     iteration_duration.............: avg=1.19s    min=12.25ms med=238.27ms max=35.15s  p(90)=2.59s    p(95)=5.35s   
     iterations.....................: 49734  102.454371/s
     vus............................: 4      min=4        max=132 
     vus_max........................: 132    min=132      max=132 

ERRO[0486] some thresholds have failed  
```

- 12, 2, 12

```markdown
running (7m40.0s), 000/132 VUs, 72403 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  7m40s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 217209     ✗ 0     
     data_received..................: 276 MB  600 kB/s
     data_sent......................: 26 MB   58 kB/s
     http_req_blocked...............: avg=7.82µs   min=0s      med=3µs      max=22.11ms p(90)=5µs      p(95)=6µs  
     http_req_connecting............: avg=3.65µs   min=0s      med=0s       max=17.72ms p(90)=0s       p(95)=0s   
   ✗ http_req_duration..............: avg=267.47ms min=3.26ms  med=6.88ms   max=13.77s  p(90)=742.8ms  p(95)=1.27s
       { expected_response:true }...: avg=267.47ms min=3.26ms  med=6.88ms   max=13.77s  p(90)=742.8ms  p(95)=1.27s
     http_req_failed................: 0.00%   ✓ 0          ✗ 217209
     http_req_receiving.............: avg=189.97µs min=6µs     med=61µs     max=51.27ms p(90)=297µs    p(95)=585µs
     http_req_sending...............: avg=19.74µs  min=1µs     med=14µs     max=18.4ms  p(90)=26µs     p(95)=35µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s   
     http_req_waiting...............: avg=267.27ms min=3.19ms  med=6.79ms   max=13.77s  p(90)=742.29ms p(95)=1.27s
     http_reqs......................: 217209  472.19791/s
     iteration_duration.............: avg=802.99ms min=77.88ms med=423.01ms max=13.79s  p(90)=1.7s     p(95)=2.46s
     iterations.....................: 72403   157.399303/s
     vus............................: 1       min=1        max=132 
     vus_max........................: 132     min=132      max=132 

ERRO[0461] some thresholds have failed              
```

## stress 테스트

- 12, 2, 12
- 100명부터 600명까지 20초 간격으로 증가

```markdown
running (2m24.7s), 000/600 VUs, 16763 complete and 0 interrupted iterations
default ✓ [======================================] 000/600 VUs  2m20s

     ✗ index page check
      ↳  99% — ✓ 16758 / ✗ 5
     ✗ get stations check
      ↳  99% — ✓ 16736 / ✗ 27
     ✗ find path check
      ↳  99% — ✓ 16743 / ✗ 20

     checks.........................: 99.89% ✓ 50237      ✗ 52   
     data_received..................: 64 MB  441 kB/s
     data_sent......................: 6.1 MB 42 kB/s
     http_req_blocked...............: avg=223.55µs min=0s      med=3µs      max=1.34s    p(90)=6µs   p(95)=8µs  
     http_req_connecting............: avg=216.67µs min=0s      med=0s       max=1.34s    p(90)=0s    p(95)=0s   
   ✗ http_req_duration..............: avg=884.71ms min=2.96ms  med=6.96ms   max=22.37s   p(90)=3.48s p(95)=6.71s
       { expected_response:true }...: avg=885.62ms min=2.96ms  med=6.96ms   max=22.37s   p(90)=3.48s p(95)=6.71s
     http_req_failed................: 0.10%  ✓ 52         ✗ 50237
     http_req_receiving.............: avg=252.17µs min=6µs     med=68µs     max=109.27ms p(90)=326µs p(95)=750µs
     http_req_sending...............: avg=21.42µs  min=1µs     med=15µs     max=7.27ms   p(90)=28µs  p(95)=41µs 
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s    p(95)=0s   
     http_req_waiting...............: avg=884.44ms min=2.9ms   med=6.87ms   max=22.37s   p(90)=3.48s p(95)=6.71s
     http_reqs......................: 50289  347.531218/s
     iteration_duration.............: avg=2.65s    min=15.05ms med=862.52ms max=22.39s   p(90)=7.7s  p(95)=9.75s
     iterations.....................: 16763  115.843739/s
     vus............................: 16     min=5        max=599
     vus_max........................: 600    min=600      max=600

ERRO[0145] some thresholds have failed 
```

- 480여명 정도에서 정상적으로 요청을 처리하지 못하게 됨

```
running (08m18.7s), 000/600 VUs, 18288 complete and 598 interrupted iterations
default ✗ [=============================>--------] 480/600 VUs  08m18.7s/10m20.0s

     ✓ index page check
     ✓ get stations check
     ✗ find path check
      ↳  89% — ✓ 16298 / ✗ 1990

     checks.........................: 96.43% ✓ 53884      ✗ 1990 
     data_received..................: 68 MB  137 kB/s
     data_sent......................: 6.9 MB 14 kB/s
     http_req_blocked...............: avg=144.91µs min=0s      med=3µs      max=36.62ms  p(90)=8µs      p(95)=12µs  
     http_req_connecting............: avg=137.88µs min=0s      med=0s       max=36.47ms  p(90)=0s       p(95)=0s    
   ✗ http_req_duration..............: avg=3.14s    min=3.36ms  med=6.94ms   max=1m0s     p(90)=225.19ms p(95)=30.42s
       { expected_response:true }...: avg=1.54s    min=3.36ms  med=6.84ms   max=59.79s   p(90)=150.74ms p(95)=8.45s 
     http_req_failed................: 3.56%  ✓ 1990       ✗ 53884
     http_req_receiving.............: avg=170.74µs min=0s      med=63µs     max=171.71ms p(90)=215µs    p(95)=288µs 
     http_req_sending...............: avg=20.72µs  min=1µs     med=16µs     max=3.7ms    p(90)=36µs     p(95)=49µs  
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s    
     http_req_waiting...............: avg=3.14s    min=3.32ms  med=6.85ms   max=1m0s     p(90)=224.32ms p(95)=30.42s
     http_reqs......................: 55874  112.040911/s
     iteration_duration.............: avg=9.59s    min=76.91ms med=139.77ms max=1m39s    p(90)=34.41s   p(95)=58.16s
     iterations.....................: 18288  36.671872/s
     vus............................: 598    min=10       max=598
     vus_max........................: 600    min=600      max=600

ERRO[0499] some thresholds have failed  
```
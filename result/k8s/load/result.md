# 쿠버네티스 부하 테스트 결과

## 1. smoke 테스트

```markdown

running (1m00.1s), 0/2 VUs, 214 complete and 0 interrupted iterations
default ✓ [======================================] 0/2 VUs  1m0s

     ✓ index page check
     ✓ get stations check
     ✓ find path check

     checks.........................: 100.00% ✓ 642       ✗ 0  
     data_received..................: 863 kB  14 kB/s
     data_sent......................: 31 kB   517 B/s
     http_req_blocked...............: avg=305.11µs min=0s       med=1µs      max=61.12ms p(90)=2µs      p(95)=3µs     
     http_req_connecting............: avg=47.43µs  min=0s       med=0s       max=4.96ms  p(90)=0s       p(95)=0s      
   ✓ http_req_duration..............: avg=92.93ms  min=5.83ms   med=10.02ms  max=2.22s   p(90)=278.33ms p(95)=348.67ms
       { expected_response:true }...: avg=92.93ms  min=5.83ms   med=10.02ms  max=2.22s   p(90)=278.33ms p(95)=348.67ms
     http_req_failed................: 0.00%   ✓ 0         ✗ 642
     http_req_receiving.............: avg=320.8µs  min=11µs     med=105µs    max=9.96ms  p(90)=457.9µs  p(95)=1.2ms   
     http_req_sending...............: avg=211.18µs min=10µs     med=108µs    max=5.84ms  p(90)=377.9µs  p(95)=531.84µs
     http_req_tls_handshaking.......: avg=190.76µs min=0s       med=0s       max=20.91ms p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=92.4ms   min=3.84ms   med=9.74ms   max=2.21s   p(90)=277.87ms p(95)=348.29ms
     http_reqs......................: 642     10.681664/s
     iteration_duration.............: avg=280.78ms min=146.03ms med=214.31ms max=2.56s   p(90)=428.23ms p(95)=536.83ms
     iterations.....................: 214     3.560555/s
     vus............................: 1       min=1       max=1
     vus_max........................: 2       min=2       max=2
```

## 2. load 테스트

- 컨테이너 1대 운영시

```markdown
running (2m45.1s), 000/132 VUs, 1263 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  2m40s

     ✓ index page check
     ✓ get stations check
     ✗ find path check
      ↳  99% — ✓ 1261 / ✗ 2

     checks.........................: 99.94% ✓ 3787      ✗ 2    
     data_received..................: 5.5 MB 33 kB/s
     data_sent......................: 233 kB 1.4 kB/s
     http_req_blocked...............: avg=768.35µs min=0s       med=1µs     max=36.92ms p(90)=2µs     p(95)=2µs     
     http_req_connecting............: avg=180.98µs min=0s       med=0s      max=14.7ms  p(90)=0s      p(95)=0s      
   ✗ http_req_duration..............: avg=5.11s    min=4.19ms   med=13.43ms max=30.09s  p(90)=17.16s  p(95)=18.11s  
       { expected_response:true }...: avg=5.1s     min=4.19ms   med=13.42ms max=28.65s  p(90)=17.16s  p(95)=18.08s  
     http_req_failed................: 0.05%  ✓ 2         ✗ 3787 
     http_req_receiving.............: avg=752.07µs min=7µs      med=84µs    max=206.2ms p(90)=657.8µs p(95)=2.69ms  
     http_req_sending...............: avg=122.05µs min=8µs      med=79µs    max=8.15ms  p(90)=213µs   p(95)=288.79µs
     http_req_tls_handshaking.......: avg=578.4µs  min=0s       med=0s      max=30.42ms p(90)=0s      p(95)=0s      
     http_req_waiting...............: avg=5.11s    min=3.88ms   med=13.23ms max=30.09s  p(90)=17.16s  p(95)=18.11s  
     http_reqs......................: 3789   22.949802/s
     iteration_duration.............: avg=15.36s   min=601.27ms med=16.41s  max=30.1s   p(90)=19.26s  p(95)=21.08s  
     iterations.....................: 1263   7.649934/s
     vus............................: 6      min=6       max=132
     vus_max........................: 132    min=132     max=132

ERRO[0166] some thresholds have failed  
```

- 컨테이너 2대 운영시

```markdown
  scenarios: (100.00%) 1 scenario, 132 max VUs, 3m10s max duration (incl. graceful stop):
           * default: Up to 132 looping VUs for 2m40s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (2m45.8s), 000/132 VUs, 1063 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  2m40s

     ✓ index page check
     ✓ get stations check
     ✗ find path check
      ↳  99% — ✓ 1059 / ✗ 4

     checks.........................: 99.87% ✓ 3185      ✗ 4    
     data_received..................: 4.7 MB 29 kB/s
     data_sent......................: 208 kB 1.3 kB/s
     http_req_blocked...............: avg=1.22ms   min=0s     med=1µs     max=104.83ms p(90)=2µs    p(95)=2.59µs  
     http_req_connecting............: avg=254.76µs min=0s     med=0s      max=80.18ms  p(90)=0s     p(95)=0s      
   ✗ http_req_duration..............: avg=6.1s     min=4.05ms med=32.33ms max=31.88s   p(90)=19.78s p(95)=22.07s  
       { expected_response:true }...: avg=6.07s    min=4.05ms med=32.21ms max=31.88s   p(90)=19.76s p(95)=22.05s  
     http_req_failed................: 0.12%  ✓ 4         ✗ 3185 
     http_req_receiving.............: avg=2.58ms   min=9µs    med=95µs    max=657.74ms p(90)=4.41ms p(95)=13.05ms 
     http_req_sending...............: avg=143.94µs min=13µs   med=87µs    max=7.48ms   p(90)=255µs  p(95)=359.19µs
     http_req_tls_handshaking.......: avg=956.26µs min=0s     med=0s      max=50.33ms  p(90)=0s     p(95)=0s      
     http_req_waiting...............: avg=6.1s     min=3.96ms med=31.95ms max=31.88s   p(90)=19.76s p(95)=22.06s  
     http_reqs......................: 3189   19.236834/s
     iteration_duration.............: avg=18.32s   min=2.47s  med=18.43s  max=31.91s   p(90)=22.97s p(95)=24.29s  
     iterations.....................: 1063   6.412278/s
     vus............................: 18     min=7       max=132
     vus_max........................: 132    min=132     max=132

ERRO[0166] some thresholds have failed 
```

- 컨테이너 4대 운영시

```markdown
  scenarios: (100.00%) 1 scenario, 132 max VUs, 3m10s max duration (incl. graceful stop):
           * default: Up to 132 looping VUs for 2m40s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


running (2m50.6s), 000/132 VUs, 1025 complete and 0 interrupted iterations
default ✓ [======================================] 000/132 VUs  2m40s

     ✓ index page check
     ✓ get stations check
     ✗ find path check
      ↳  92% — ✓ 951 / ✗ 74

     checks.........................: 97.59% ✓ 3001      ✗ 74   
     data_received..................: 4.5 MB 27 kB/s
     data_sent......................: 203 kB 1.2 kB/s
     http_req_blocked...............: avg=1.22ms   min=0s       med=1µs     max=72.79ms  p(90)=2µs     p(95)=3µs    
     http_req_connecting............: avg=233.05µs min=0s       med=0s      max=9.13ms   p(90)=0s      p(95)=0s     
   ✗ http_req_duration..............: avg=6.48s    min=5.11ms   med=49.7ms  max=42.41s   p(90)=31.03s  p(95)=35.68s 
       { expected_response:true }...: avg=5.89s    min=5.11ms   med=45.83ms max=42.41s   p(90)=31.12s  p(95)=35.78s 
     http_req_failed................: 2.40%  ✓ 74        ✗ 3001 
     http_req_receiving.............: avg=4.75ms   min=7µs      med=87µs    max=356.73ms p(90)=7.92ms  p(95)=24.69ms
     http_req_sending...............: avg=107.68µs min=10µs     med=68µs    max=11.67ms  p(90)=186.6µs p(95)=257µs  
     http_req_tls_handshaking.......: avg=965.44µs min=0s       med=0s      max=45.82ms  p(90)=0s      p(95)=0s     
     http_req_waiting...............: avg=6.47s    min=1.34ms   med=49.58ms max=42.41s   p(90)=31.03s  p(95)=35.68s 
     http_reqs......................: 3075   18.024309/s
     iteration_duration.............: avg=19.45s   min=305.87ms med=19.71s  max=42.82s   p(90)=36.79s  p(95)=38.03s 
     iterations.....................: 1025   6.008103/s
     vus............................: 7      min=7       max=132
     vus_max........................: 132    min=132     max=132

ERRO[0171] some thresholds have failed  
```

## 3. stress 테스트

- 워커 노드 4대 - 컨테이너 1대

```markdown
running (3m19.9s), 000/600 VUs, 1689 complete and 308 interrupted iterations
default ✓ [======================================] 000/600 VUs  2m50s

     ✓ index page check
     ✓ get stations check
     ✗ find path check
      ↳  92% — ✓ 1564 / ✗ 125

     checks.........................: 97.80% ✓ 5557      ✗ 125  
     data_received..................: 10 MB  50 kB/s
     data_sent......................: 584 kB 2.9 kB/s
     http_req_blocked...............: avg=2.52ms   min=0s       med=1µs    max=61.61ms p(90)=16.76ms p(95)=23.87ms 
     http_req_connecting............: avg=569.5µs  min=0s       med=0s     max=19ms    p(90)=3.79ms  p(95)=5.31ms  
   ✗ http_req_duration..............: avg=11.79s   min=4ms      med=8.71s  max=45.73s  p(90)=31.04s  p(95)=34.41s  
       { expected_response:true }...: avg=11.25s   min=4ms      med=8.4s   max=38.67s  p(90)=29.98s  p(95)=33.8s   
     http_req_failed................: 2.19%  ✓ 125       ✗ 5557 
     http_req_receiving.............: avg=421.48µs min=7µs      med=70µs   max=51.38ms p(90)=306.9µs p(95)=1.11ms  
     http_req_sending...............: avg=131.45µs min=8µs      med=70µs   max=7.82ms  p(90)=260.9µs p(95)=356.94µs
     http_req_tls_handshaking.......: avg=1.92ms   min=0s       med=0s     max=42.44ms p(90)=11.84ms p(95)=18.25ms 
     http_req_waiting...............: avg=11.79s   min=3.84ms   med=8.71s  max=45.73s  p(90)=31.04s  p(95)=34.41s  
     http_reqs......................: 5682   28.424288/s
     iteration_duration.............: avg=34.88s   min=566.27ms med=36.33s max=1m9s    p(90)=55.88s  p(95)=59.28s  
     iterations.....................: 1689   8.449247/s
     vus............................: 9      min=9       max=600
     vus_max........................: 600    min=600     max=600

ERRO[0200] some thresholds have failed    
```

- 워커 노드 4대 - 컨테이너 2대

```markdown
running (3m19.9s), 000/600 VUs, 2991 complete and 126 interrupted iterations
default ✓ [======================================] 000/600 VUs  2m50s

     ✓ index page check
     ✓ get stations check
     ✗ find path check
      ↳  97% — ✓ 2903 / ✗ 88

     checks.........................: 99.04% ✓ 9137      ✗ 88   
     data_received..................: 15 MB  73 kB/s
     data_sent......................: 726 kB 3.6 kB/s
     http_req_blocked...............: avg=1.51ms   min=0s     med=1µs    max=44.54ms p(90)=2µs     p(95)=20.4ms 
     http_req_connecting............: avg=339.13µs min=0s     med=0s     max=20.1ms  p(90)=0s      p(95)=4.37ms 
   ✗ http_req_duration..............: avg=7.11s    min=3.79ms med=2.37s  max=43.12s  p(90)=24.06s  p(95)=31.73s 
       { expected_response:true }...: avg=6.85s    min=3.79ms med=2s     max=36.97s  p(90)=21.85s  p(95)=30.73s 
     http_req_failed................: 0.95%  ✓ 88        ✗ 9137 
     http_req_receiving.............: avg=494.7µs  min=7µs    med=61µs   max=84.66ms p(90)=313.6µs p(95)=1.97ms 
     http_req_sending...............: avg=70.23µs  min=7µs    med=53µs   max=5.62ms  p(90)=127µs   p(95)=159µs  
     http_req_tls_handshaking.......: avg=1.16ms   min=0s     med=0s     max=34.55ms p(90)=0s      p(95)=15.37ms
     http_req_waiting...............: avg=7.11s    min=3.7ms  med=2.37s  max=43.12s  p(90)=24.06s  p(95)=31.72s 
     http_reqs......................: 9225   46.156775/s
     iteration_duration.............: avg=21.39s   min=1.11s  med=18.74s max=59.7s   p(90)=39.79s  p(95)=44.17s 
     iterations.....................: 2991   14.965302/s
     vus............................: 8      min=8       max=600
     vus_max........................: 600    min=600     max=600

ERRO[0200] some thresholds have failed  
```
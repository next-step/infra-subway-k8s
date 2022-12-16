import http from 'k6/http';
import {check} from 'k6';

export let options = {
    stages: [
        {duration: '10s', target: 100},
        {duration: '10s', target: 200},
        {duration: '2m', target: 300},
        {duration: '2m', target: 400},
        {duration: '2m', target: 500},
        {duration: '2m', target: 600},
        {duration: '2m', target: 0},
    ],

    thresholds: {
        http_req_duration: ['p(99)<2200']
    },
};

const BASE_URL = 'http://dev.hey-mando.p-e.kr:8080';

export default function () {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let index = http.get(`${BASE_URL}`, params)
    check(index, {
        "index page check": (resp) => resp.status === 200
    });

    let paths = http.get(`${BASE_URL}/path`, params)
    check(paths, {
        "get stations check": (resp) => resp.status === 200
    });

    let source = Math.floor(Math.random() * 10 + 1);
    let target = Math.floor(Math.random() * 10 + 1);
    let findPath = http.get(`${BASE_URL}/paths/?source=${source}&target=${target}`)
    check(findPath, {
        "find path check": (resp) => resp.status === 200
    });
}

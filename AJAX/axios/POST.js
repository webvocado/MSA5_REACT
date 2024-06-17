// 모듈이 설치되어 있어야 한다.
// npm install axios
// axios 는 라이브러리로, 포함시켜야 한다.
const axios = require('axios')

const url = 'https://httpbin.org/post'
const data = {
    name : '김조은',
    age : 25
}
const headers = {
    'ContentType' : 'application/json'
}

// axios POST 요청
axios.post(url, data, headers)
     .then(resposne => {
        console.log(`data : ${resposne.data}`);
        // ⭐ console.dir(객체)
        // : 객체를 펼쳐서 로그를 출력해준다.
        console.dir(resposne.data);
     })
     .catch(error => {
        console.log(`error : ${error}`);
     })
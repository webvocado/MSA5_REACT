
async function fetchData() {
    const response = await fetch('https://httpbin.org/get') 
    // await 를 쓰면 비동기 응답을 기다린다.
    console.log(response);
    // json 객체로 변환
    const data = await response.json()
    return data

    // async await 가 없으면, 써줘야한다. 간결한 코드를 위해서 async await 쓰자
    // response.then((result) => {
    //     console.log(result);
    // })
}

// await 가 없으면 response 가 아직 응답이 오지 않아서 response 가 안찍힌다.
// await 를 붙이면, 서버에서 데이터가 넘어올 때까지 기다렸다가 코드를 실행해준다.

// await 는 함수안에서만 사용한다.
fetchData()
    .then((data) => {
        console.log(data);
    })

console.log(`async await 비동기 요청 처리`);

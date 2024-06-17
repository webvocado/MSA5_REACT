let input

const nickname = input ?? '김조은'   // NULL 병합
// const nickname = input
// if (input == null || input == undefined)
//     nickname = '김조은'

if( nickname ) {
    console.log("이름이 있습니다");
}
if( !nickname ) {
    console.log("이름이 없습니다");
}

console.log(`이름 : ${nickname}`);
// Map 생성
const map = new Map()

// set(key, value) : 요소 추가
map.set('신준수', '90점')
map.set('홍준범', '50점')
map.set('유상준', '10점')

// get(key) : 요소 가져오기
console.log(map);
console.log(map.get('신준수'));
console.log(map.get('홍준범'));
console.log(map.get('유상준'));


// Map 초기화 생성
const map2 = new Map([
    ['조연진', '지각'],
    ['김슬기', '조퇴']
])
console.log(map2)

// map 반복
console.log("map 반복");
map.forEach((value, key, map) => {
    console.log(`${key} : ${value}`)
})

// map 의 key 반복
console.log("map 의 key 반복");
for( const key of map.keys() ) {
    console.log(key);   
}

// map 의 value 반복
console.log("map 의 value 반복");
for( const value of map.values() ) {
    console.log(value);   
}
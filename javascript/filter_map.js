//11.24 수업

//filter : 원본 배열을 건드리지 않고 원하는 값만 추출해냄

let words = ['spray', 'limit', 'elite', 'exuberant', 'paresent'];
let result = words.filter(function(word, idx, arry){
     //console.log(word, idx, arry);
     //console.log(a,b,c,d);
    return words.length > 6;
});

console.log(words, result);
//map : 전체 데이터 중 각 요소에 대해 콜백 함수의 반환값으로 새로운 배열을 생성해 반환.원본 배열은 건드리지 않음, 전체 데이터의 각 요소에 대해 필요한 데이터 선별, 데이터 추가해야할 경우에 사용
//filter 는 원본 배열의 길이가 줄어들 수 있으나 map 은 길이가 줄어들지 않고 값만 변경됨.

let users = [
    {
        id : 100,
        name : 'Hong'
    },
    {
        id: 200,
        name : 'Kang'
    },
    {
        id: 300,
        name : 'Lee'
    }
]

// 객체는 복사의 개념이 없음
// 객체 내부값을 건드리게 되면 원본 데이터까지 수정이될 수 있음.
result = users.map(function(user){
    return {
        id: user.id,
        name: user.name,
        grade: user.id == 200 ? 'VIP' : '일반'
    }
});

console.log(users, result);
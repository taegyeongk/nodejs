//구조 분해할당
//선언되는 변수에 따라 대괄호 혹은 중괄호를 사용하면 됨.
let obj = {
    id : 100,
    name : 'Hong',
    birth : '1999-10-25'
}
//내가 원하는 값만 프로퍼티에서 빼옴, 객체 기반
//obj 에 age 가 없기때문에 불러올 값이 없음으로 undefined 로 출력됨
let { id, name, age } = obj;
console.log(id, name, age);

// module.export = {
//     object : {},
//     method : function(){}
// }

// let {object, method} = module;
//배열은 내부에 특정된 이름이 없기때문에 내가 설정할 수 있다. 다만 index 순서대로 값이 부여된다.
let array = ['Hello', 'Nice', 'Monday'];

//두개의 값만 출력하고 싶다면 x, y 까지만 적어주면 된다.
let [x, y, z] = array;
console.log(x,y,z);

//11.24 수업

let names = ["Hong", "Kang", "Adward", "Lee"];
names.sort();
console.log(names); //a부터 오름차순으로 정렬
names.reverse();  //내림차순으로 정렬
console.log(names);

let nums = [40, 100, 1, 5, 25, 10];
nums.sort();
console.log(nums);  //숫자도 시작하는 제일 첫 숫자 기준으로 오름차순 정렬 값이 작은 순서 x (유니코드 기준때문에)
nums.sort((a,b) =>{
    return a-b;  //40,100부터 숫자값을 순서대로 비교 후 음수일 경우 두번째값이 더 크다고 인식, 양수일 경우 첫번째 값이 더 크다고 인식된다.
});
console.log(nums);











class Human {
    //필드 , 생성자, 메소드, _는 암묵적으로 숨기는 것으로 건드리지 않음.
    
    constructor(){
        this._ssn;
        this._name = 'Hong';
        this._age;
    }

    //get과 set은 그 자체로 하나의 기능이기때문에 붙여서 사용 x
    //field 자체에 readonly 기능이있음
    get name (){
        return this._name;
    }

    set ssn(ssn){
        this._ssn = ssn;
    }

    get ssn(){
        return this._ssn = ssn;
    }
    set name(name){
        this._name= name;
    }
    get name(){
        return this._name;
    }
    set age(age){
        this._age = age;
    }
    get age(){
        return this._age;
    }
    getInfo(){
        console.log(this._ssn,this._name, this._age);
    }

}

let hu = new Human();
hu.ssn = '990505';
hu.name = 'Kang';
hu.age = 25;
hu.getInfo();

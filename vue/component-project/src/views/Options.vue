<template>
    <div>
        <input type="number" v-model="price"> 원
        <br>
        <input type="number" v-model="count"> 개
        <p> 과세 금액 : {{ amount }} </p>
        <p> 부가세 10% : {{ tax }} </p>
        <p> 결제 금액 : {{ total }}</p> 
    </div>
</template>
<script>
    const computed = {
        data(){
            return{
                price : 0,
                count : 0
            }
        },
        computed : {  //값이 바뀌어야할 경우 computed 로 처리
            amount(){
                return this.price * this.count;
            },
            tax(){
                return this.amount * 0.1;
            },
            total(){
                return this.amount + this.tax;
            }
        }
    }

    const watch = {
        data(){
            return {
                price : 0,
                count : 0,
                amount : '',
                tax : '',
                total : ''
            }
        },
        watch: { //데이터가 아니고 실행하는 작업을 수행하기때문에 return 구문이 빠짐
            price(){
                this.amount = this.price * this.count;
            },
            count(){
                this.amount = this.price * this.count;
            },
            amount(){
                this.tax = this.amount * 0.1;
                this.total = this.amount + this.tax;
            }
        }
    }

    export default watch
    //computed 사용 원할 경우 export default computed 로 작성
</script>

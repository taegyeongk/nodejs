<template>
    <div>
         <h1>{{ title + '!!!' }}</h1> <!--태그 사이에 {{}} 이중수염을 사용하면 자바스크립트 영역으로 인식된다. -->
        <h2 v-bind:name="'sample'" v-text="title" /> <!-- 태그 속성에 해당하는 고유 디렉티브 -->
        <p v-html="tagList"/> <!-- <strong> 태그는 보이지 않음 -->
        <p v-text="tagList"/> <!-- <strong> 태그 또한 문자열로 인식해서 나타냄 -->
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{ typeof valueModel }}</p>
        <input type="number" v-model.lazy="numberModel">
        <p>{{ numberModel + 10000 }}</p>
        <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel }}</p>
        <textarea v-model="textModel"/> <!-- 자기 자신이 많은 값을 가지고 있어서 p 는 필요없음 -->
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
        <p>{{ chData }}</p>
        <div>
            <input type="checkbox" value="서울" v-model="city">서울
            <input type="checkbox" value="대구" v-model="city">대구
            <p>{{ city }}</p>
        </div>
        <div>
            <input type="radio" value="독서" v-model="hobby">독서
            <input type="radio" value="영화" v-model="hobby">영화
            <input type="radio" value="운동" v-model="hobby">운동
            <p>{{ hobby }}</p>
            <hr>
            <img v-bind:style="styleData" v-bind:src="imgUrl">  <!-- imgUrl : 외부 url 사용 -->
            <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class Binding First</div>
            <div class="container" v-bind:class="myClass">Class Binding Second</div> 
            <!-- myClass : 해당 프로퍼티에 대한 클래스 값을 정의 -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title : 'Hello, Vue.js',
                tagList : '<strong>Today is ... </strong>',
                valueModel : 'Korea',
                numberModel : '0',
                selectModel : 'winter',
                textModel : '입력해보쇼',
                chData : '',
                city : [],
                hobby : '',
                imgUrl : 'https://i.namu.wiki/i/DUgdciLXlTOFQcVHz8FY0SpCRFeripHJCQm1NnlpMoLJ9yoYtT9jba3oCcxEAppD1oThaW6WkaM7TL619Ra-pBuSZh3WZg5DvI6wMDgqCtTzLDgvG3kEyxFA76HLuDL4fXTEQWYjqwCeA-ZPLdoVcA.webp',
                styleData : {
                    backgroundColor : 'beige',
                    width : '300px'
                },
                // backSetting : 'background-color:pink; width:200px;',
                // addStyle : 'height:200'  처럼 사용해도 되지만, 세부사항 수정이 불가하기 때문에 권장하지 않는다.
                isActive : true,
                //hasError : !this.isActive 는 데이터 속성에 있는 property를 변경하는 것 보다는 computed 속성으로 사용해줘야한다.
                myClass : 'active'
            }
        },
        computed : {
            hasError(){
                return !this.isActive;
            }
        }

    } //export : module.export 와 같이 객체에 대한 정보를 내보내는 역할.
</script>

<style scope>
    .container {
        width : 100%;
        height: 200px;
    }
    .active{
        background-color : yellow;
        font-weight : bold;
    }
    .text-red{
        color : red;
    }
</style>


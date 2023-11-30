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
                city : ''

            }
        }

    } //export : module.export 와 같이 객체에 대한 정보를 내보내는 역할.
</script>


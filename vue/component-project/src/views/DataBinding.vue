<template>
    <div>
         <h1>{{ title + '!!!' }}</h1> <!--태그 사이에 {{}} 이중수염을 사용하면 자바스크립트 영역으로 인식된다. -->
        <h2 v-bind:name="'sample'" v-text="title" /> <!-- 태그 속성에 해당하는 고유 디렉티브 -->
        <p v-html="tagList"/> <!-- <strong> 태그는 보이지 않음 -->
        <p v-text="tagList"/> <!-- <strong> 태그 또한 문자열로 인식해서 나타냄 -->
    </div>
</template>

<script>
    export default {
        data(){

            return {
                title : 'Hello, Vue.js',
                tagList : '<strong>Today is ... </strong>'

            }
        }

    } //export : module.export 와 같이 객체에 대한 정보를 내보내는 역할.
</script>


<template>
    <div class="container">
        <table class="table">
            <caption>Total : {{ count }}</caption> <!-- 내가 몇가지를 화면에 조회할것인지 보여줌 -->
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>나이</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(user, idx) in userList"
                @click="goToUserInfo(user.user_id)">  <!-- @click="goToUserInfo" : 이벤트 핸들러 등록 -->
                    <td>{{ user.user_no }}</td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ user.user_age }}</td>
                    <td>{{ dateFormat(user.join_date, 'yyyy년MM월dd일') }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            userList : [] //배열 메소드로 잡는게 편함
        }
    },
    computed : {
        count(){
            return this.userList.length;  //자바스크립트에서 length는 데이터 수정이 가능하다.값을 0으로 주면 데이터가 다 사라지게 됨.
        }
    },
    created(){
        //컴포넌트가 초기화할 데이터관련 진행. 마운트 되기 전부터 데이터를 가지고 있어야함.
    this.getUserList();
    },
    methods : {
        async getUserList(){ //전체조회
            let result = await axios.get('/api/t_users').catch(err=>{
                console.log(err);
            });
            let list = result.data;
            this.userList = list;
        },
        goToUserInfo(id){  //단건조회
            
            this.$router.push({ path : '/userInfo', query : { userId : id}});
           
           //$router 객체를 통해 프로그래밍 방식 페이지 전환, body 가 없기때문에 post 방식은 어려움
            //template 내에서 <route-link :to=”path”> 를 통해 페이지 이동을 하면 이는 내부에서 $router.push 를 호출
            //path : 'userInfo', query : { userId : id} : 경로와 키로 받을려고 사용
            //name : route 로 등록할때 사용한 name 속성
            //params : path속성이 '/target/:id' 일 경우 {'id' : 100} 같은 방식으로 넘겨야함. 어떤 방식이 지정되어있을때 넘길 수 있는 방식.(객체형태)
        },
        dateFormat(value){  //날짜 포맷변경
            //yyyy-MM-dd
            let date = new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDate()).slice(-2);
            // let result = format.replace('yyyy',year)
            //                     .replace('MM',month)
            //                     .replace('dd', day);
            // return result;            
            
            return `${year}년${month}월${day}일`;
        }
        
    }
}
</script>
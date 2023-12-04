<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">No.</th>
                    <td class="text-center">{{ userInfo.user_no }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">ID</th>
                    <td class="text-center">{{ userInfo.user_id }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center">{{ userInfo.user_pwd }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">{{ userInfo.user_name }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">{{ userGender }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center">{{ userInfo.user_age }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">가입날짜</th>
                    <td class="text-center">{{ joinDate }}</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-info" @click="goToUpdate(userInfo.user_id)">수정</button>
            <router-link to="/" class="btn btn-success">목록</router-link> <!-- router-link : 기본 a 태그를 기반으로 움직임. to : path -->
            <button class="btn btn-warning" @click="deleteInfo(userInfo.user_id)">삭제</button>
        </div>

    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        data(){
            return {
                searchNo : '',
                userInfo : {}
            }
        },
        created(){
            this.searchNo = this.$route.query.userId; //router를 동작시키면 route를 기반으로 하는 컴포넌트가 query 호출하면서 받은 속성값을 그대로 넘겨줌
            this.getUserInfo();
        },
        methods: {
            async getUserInfo(){
                let result = await axios.get(`/api/t_users/${this.searchNo}`)
                .catch(err=> console.log(err));
                this.userInfo = result.data;
            }, //함수는 전부 메소드 밑으로 들어와야한다.
            async deleteInfo(userId){
                let result = await axios.delete(`/api/t_users/${userId}`).catch(err =>console.log(err));
                console.log(result.data);
                let count = result.data.affectedRows; //affectedRows : 의미있는 속성으로 사용  DML시 실제로 영향을 미친 데이터 Row 수
                if(count == 0){
                    alert('정상적으로 삭제되지 않았습니다.');
                }else{
                    alert('정상적으로 삭제되었습니다.');
                    this.$router.push({ name : 'userList'}); //삭제 후 리스트로 돌아가기
                }

            },
            goToUpdate(id){
                this.$router.push({ path : '/userUpdate' , query : {userId : id }});
                //페이지를 열때 요청 : router 페이지가 열릴때 실행되는 시점에서의 값 : route
            }

        
        },
        computed : {
            userGender(){
                return this.userInfo.user_gender == 'M' ? '남' : '여';
            },
            joinDate(){
                let date = new Date(this.userInfo.join_date);
                let year = date.getFullYear();
                let month = ('0' + (date.getMonth() + 1)).slice(-2);
                let day = ('0' + date.getDate()).slice(-2);

                return `${year}년${month}월${day}일`;
            }
        }

    }
</script>

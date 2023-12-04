<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">No.</th>
                    <td class="text-center"><input type="text" v-model="userInfo.user_no" readonly></td> <!-- primary key, id는 수정되서는 안됨으로 readonly사용 -->
                </tr>
                <tr>
                    <th class="text-right table-primary">ID</th>
                    <td class="text-center"><input type="text" v-model="userInfo.user_id" readonly></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center"><input type="password" v-model="userInfo.user_pwd"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">
                        <input type="text" v-model="userInfo.user_name">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                        <input type="radio" value="M" v-model="userInfo.user_gender">남자
                        <input type="radio" value="F" v-model="userInfo.user_gender">여자
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center"><input type="number" v-model="userInfo.user_age"></td>
                </tr>
                <tr>
                    <th class="text-right table-primary">가입일자</th>
                    <td class="text-center">
                        <input type="date" v-model="userInfo.join_date">
                        </td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-success" @click="updateInfo">저장</button>
            <router-link to="/" class="btn btn-info">목록</router-link>
        </div>
    </div>
</template>
<script>
    import axios from "axios";

    export default{
        data(){
            return {
                searchNo : '',
                userInfo : {}
            }
        },
        created(){
            this.searchNo = this.$route.query.userId;
            this.getUserInfo();
        },
        methods : {
                async getUserInfo(){
                    let result = await axios.get(`/api/t_users/${this.searchNo}`)
                    .catch((err)=> console.log(err));
                    this.userInfo = result.data;
                    let newDate = this.dateFormat(this.userInfo.join_date, 'yyyy-MM-dd');
                    this.userInfo.join_date = newDate;
                },
                
                dateFormat(value,format){
                    //yyyy-MM-dd
                    let date = new Date(value);
                    let year = date.getFullYear();
                    let month = ('0' + (date.getMonth() + 1)).slice(-2);
                    let day = ('0' + date.getDate()).slice(-2);
                    let result = format.replace('yyyy',year)
                                        .replace('MM',month)
                                        .replace('dd', day);
                    return result;  
        
                },
                async updateInfo(){
                    if(!this.validation()) return; //논리 강제변환
                        let data = {
                            param : this.userInfo,  //가지고있는 데이터를 전체 넣어줌.readonly 사용해서 가능.잘못하면 다른 아이디가 수정될 수 있음.
                        };

                        let result = await axios.put(`/api/t_users/${this.userInfo.user_id}`,data)
                        .catch((err) => console.log(err));

                        console.log(result.data);
                        if(result.data.chagedRows == 0 ){
                            alert(`수정되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`);
                        }else{
                            alert(`정상적으로 수정되었습니다.\n`);
                            //수정된 화면과 수정하는 화면이 같기때문에 따로 페이징은 하지않는다.
                        }
                },
                getToday(){
                    let today = new Date();
                    let year = today.getFullYear();
                    let month = ('0' + (today.getMonth() + 1)).slice(-2);
                    let day = ('0' + today.getDate()).slice(-2);
                    return `${year}-${month}-${day}`;
                },
                validation(){
                    if(this.userInfo.user_id == 0){
                        alert('아이디가 입력되지 않았습니다.');
                        return false;
                    }
                    if(this.userInfo.user_pwd == ''){
                        alert('비밀번호가 입력되지 않았습니다.');
                        return false;
                    }
                    return true;
                }
            
            }
    }
</script>

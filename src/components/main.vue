<template>
    <div class="main-con">
        <div>登录获取更多信息</div>
        <div>
            <div><input type="text" class="username" v-model="loginData.username"></div>
            <div><input type="password" class="usercode" 
                        @mouseenter="enterarea" 
                        @mouseleave="leavearea"
                        v-model="loginData.password">
                <img src="src\assets\img\header\login.png" alt="" class="loginimg" v-show="isshow" @click="login">
            </div>
        </div>
        <div>
            <el-checkbox>记住密码</el-checkbox> 
        </div>
        <div class="del">
            <a href=":javescript" >忘记id或密码</a>
            <p>还没有注册? <a href=":javescript">快来注册你的第一个账号吧</a></p>
        </div>
    </div>
</template>>

<script>
import "../../src/main"
import axios from 'axios'
export default {
    name:'nav-main',
    data(){
        return{
            isshow:false,
            loginData:{
                grant_type:'password',
                client_id:3,
                client_secret:'he8rtcU6ceFlmiyf6fCilHfFaNyQkNLzfQPAw8KA',
                username:'1191125750@qq.com',
                password:'19980624l.',
                scope:''
            }
        }
    },
    methods:{
        enterarea(){
            this.isshow=true
        },
        leavearea(){
            this.isshow=false
        },
        login(){
            axios.post(`${this.$root.BaseUrl}/oauth/token`,this.loginData).then((res)=>{
                this.$root.headers.headers.Authorization=`${res.data.token_type} ${res.data.access_token}`;
                this.$router.push('/index/1');
            }).catch((err)=>{
                window.console.log(err);
            })
        }
    }
}
</script>>

<style lang="less" scoped>
.main-con{
    margin-top: 150px;
}
.username{
    margin-top: 5px;
    margin-bottom: 10px;
    height: 22px;
    width: 200px;
    border-radius:6px;
}
.usercode{
    margin-top: 5px;
    margin-bottom: 10px;
    height: 22px;
    width: 200px;
    border-radius:6px;
    position: relative;
}
.loginimg{
    position: absolute;
    top:265px;
    left: 760px;
}
.del{
    margin-top: 30px;
    font-size:15px
}
</style>
<template>
    <div class="login">
        <div class="logo">
<!--            <img src="../assets/img/logo.png" alt="my login image">-->
            <h1 style="color: #b3d8ff;font-size: 30px;line-height: 60px;">大学生兼职</h1>
        </div>
        <!-- 手机号 -->
        <div class="text_group">
            <div class="input_group" :class="{'is-invalid':!(phoneIdVali && phoneIdVerify)}">
                <input type="input" ref="phoneId" v-model="$store.state.admin.phoneId"  placeholder="手机号">
            </div>
            <div class="invalid-feedback" v-show="!phoneIdVali">请输入手机号</div>
            <div class="invalid-feedback" v-show="!phoneIdVerify">手机号输入有误，请重填</div>
        </div>
        <!-- 验证码 -->
        <div class="text_group">
            <div class="input_group is-invalid">
                <input type="input" placeholder="验证码" ref="code">
                <button @click="getCode" :disabled="Number.isInteger(btnValue)">{{btnValue}}</button>
            </div>
            <div class="invalid-feedback" v-show="!codeVali">请输入验证码</div>
            <div class="invalid-feedback" v-show="!codeVerify">验证码错误</div>
        </div>
        <div class="login_des">
            <p>
                新用户登录即自动注册，并表示已同意
                <span>《用户服务协议》</span>和<span>《隐私权政策》</span>
            </p>
        </div>
        <!-- 登录按钮 -->
        <div class="login_btn">
            <button @click="login">登录</button>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "login",
        data(){
            return{
                phoneIdVali:false,
                phoneIdVerify:true,
                btnValue:"获取验证码",
                codeVali:false,
                codeVerify:true,
            }
        },
        methods:{
            async getCode(){
                if(this.$store.state.admin.phoneId){
                    this.phoneIdVali = true;
                    if(!(/^1[3456789]\d{9}$/.test(this.$store.state.admin.phoneId))){
                        this.phoneIdVerify = false;
                    }else{
                        this.phoneIdVerify = true;
                        const data = await axios.get("/send",{
                            params:{
                                phoneId:this.$refs.phoneId.value
                            }
                        })
                        console.log(data)
                        if(data.ok===1){
                            this.$refs.code.value = data.code;
                            this.codeVali = true;
                            this.btnValue = 5;
                            const timer = setInterval(()=>{
                                if(Number.isInteger(this.btnValue)){
                                    this.btnValue--;
                                    if(this.btnValue<1){
                                        this.btnValue = "获取验证码"
                                        clearInterval(timer)
                                    }
                                }
                            },1000)
                        }else{
                            this.phoneIdVali = true;
                            alert(data.msg)
                        }

                    }
                }
            },
            async login(){
                this.codeVali = true;
                const data = await axios.post("/login",{
                        phoneId:this.$refs.phoneId.value,
                        code:this.$refs.code.value,
                })
                this.$store.commit("CHANGE_LOGIN_INFO",{phoneId:data.phoneId,token:data.token})
                alert(data.msg)
                if(data.ok===1){
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style scoped>
    .login {
        width: 100%;
        height: 100%;
        padding: 30px;
        box-sizing: border-box;
        background: #fff;
    }
    .logo {
        text-align: center;
    }
    .logo img {
        width: 150px;
    }
    .text_group,
    .login_des,
    .login_btn {
        margin-top: 20px;
    }
    .login_des {
        color: #aaa;
        line-height: 22px;
    }
    .login_des span {
        color: #4d90fe;
    }
    .login_btn button {
        width: 100%;
        height: 40px;
        background-color: #4cd96f;
        border-radius: 4px;
        color: white;
        font-size: 14px;
        border: none;
        outline: none;
    }
    .login_btn button[disabled] {
        background-color: #8bda81;
    }


    .input_group {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .input_group input {
        height: 100%;
        width: 60%;
        border:none;
        outline: none;
    }
    .input_group button {
        border: none;
        outline: none;
        background: #fff;
    }
    .input_group button[disabled] {
        color: #aaa;
    }
    .is-invalid {
        border: 1px solid red;
    }
    .invalid-feedback {
        color: red;
        padding-top: 5px;
    }
</style>

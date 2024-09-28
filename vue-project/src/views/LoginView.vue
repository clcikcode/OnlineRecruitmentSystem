
<template>
    <div class="login-content">
        <div class="login-yemian">
            <div class="login-jiehsao">
                <div class="login-jiehsao-content">
                    <div class="tubiao">
                        <div class="login-jiehsao-content-text">
                            <span class="login-jiehsao-content-text-title">找工作</span>
                            <span class="login-jiehsao-content-text-xiabiao">上线上直聘直接谈</span>
                        </div>
                    </div>

                    <div class="tubiao">
                        <div class="login-jiehsao-content-text">
                            <span class="login-jiehsao-content-text-title">沟通</span>
                            <span class="login-jiehsao-content-text-xiabiao">在线职位及时沟通</span>
                        </div>
                    </div>

                    <div class="tubiao">
                        <div class="login-jiehsao-content-text">
                            <span class="login-jiehsao-content-text-title">任性选</span>
                            <span class="login-jiehsao-content-text-xiabiao">各大行业职位任你选</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="login-area">
                <div class="login-area-title">
                    <span class="login-area-title-top">账号密码登录/注册</span>
                    <span class="login-area-title-mid">首次验证通过即注册直聘账号</span>
                    <el-segmented v-model="val" :options="items" size="large" @change="selectedsefmented" />
                </div>

                <div class="login-area-input">
                    <input placeholder="输入账号" v-model="uname" />
                    <input placeholder="输入密码" v-model="password" :type="'password'" />
                    <button @click="Login">登录</button>
                </div>

                <div class="login-area-check">
                    <input type="checkbox" />
                    <span>已阅读并同意线上直聘 《用户协议》《隐私政策》，允许线上直聘统一管理本人账号信息</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { login } from '../utils/apis';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            items: ['找工作登录', '招聘登录', '我要注册'],
            uname: "",
            password: "",
            val: '找工作登录'
        };
    },
    methods: {
        ...mapActions(['wsModule', 'initWebSocket']),
        Login() {
            if (this.uname && this.password) {
                const loginData = {
                    uname: this.uname,
                    password: this.password
                };
                login(loginData).then(res => {
                    console.log(res.data.data);
                    if (res.data.data.state) {
                        const token = res.data.data.token;
                        localStorage.setItem('token', token);
                        localStorage.setItem('senderId', res.data.data.uid);
                        localStorage.setItem('uname', res.data.data.uname);
                        localStorage.setItem('userImg', res.data.data.imgUrl);
                        localStorage.setItem('loginbuttonShow', false);
                        this.initWebSocket();
                        this.$router.push('/').then(() => {
                            location.reload();
                        });
                    } else {
                        alert(res.data.data.msg);
                    }
                });
            } else {
                alert("账号或密码不能为空");
            }
        },
        selectedsefmented(val) {
            console.log(val);
        }
    }
};
</script>
<style scoped>
.el-segmented {
  --el-segmented-item-selected-color: #fff;
  --el-segmented-item-selected-bg-color: #00a6a7;
  --el-border-radius-base: 10px;
}
.login-content {
    background-color: #00C1C1;
    width: 1700px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-yemian {
    width: 700px;
    height: 550px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 1px 1px 5px #E9ECF0;
    display: flex;
    flex-direction: row;
}

.login-jiehsao {
    width: 220px;
    height: 550px;
    background: linear-gradient(to bottom, #DFF1F4, #F2F4F7);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-jiehsao-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 220px;
    height: 270px;
}

.login-jiehsao-content-text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.login-jiehsao-content-text-title {
    color: #00A6A7;
    font-weight: bold;
}

.tubiao {
    display: flex;
    flex-direction: row;
    margin-left: 20px;
}

.login-jiehsao-content-text-xiabiao {
    color: #A39999;
    font-size: 14px;
}

.login-area {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 550px;
}

.login-area-title {
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 400px;
    margin-top: 70px;
    margin-left: 40px;
}

.login-area-title-top {
    margin-left: 100px;
    font-size: 22px;
}

.login-area-title-mid {
    margin-left: 104px;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #999999;
}

.login-area-input {
    display: flex;
    flex-direction: column;
    height: 190px;
    justify-content: space-between;
    margin-left: 70px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.login-area-input input {
    height: 50px;
    border: 1px #999999 solid;
    border-radius: 7px;
    width: 330px;
    padding-left: 10px;
    margin-top: 10px;
}

.login-area-input input:hover {
    border: 1px #00A6A7 solid;
}

.login-area-input button {
    height: 45px;
    width: 340px;
    color: white;
    background-color: #00A6A7;
    border: none;
    border-radius: 7px;
}

.login-area-check {
    display: flex;
    flex-direction: row;
    margin-left: 50px;
}

.login-area-check span {
    font-size: 12px;
    color: #999999;
}
</style>
  
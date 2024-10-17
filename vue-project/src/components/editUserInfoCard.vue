<template>
    <div class="form-content">
        <div class="form">
            <div class="form-item">
                <label for="name">姓名</label>
                <el-input v-model="name" style="width: 302px; height: 40px ;" placeholder="请输入真实姓名" />
            </div>

            <div class="form-item">
                <label for="email">当前求职状态</label>
                <el-select v-model="Statusvalue" placeholder="Select" size="large" style="width: 302px">
                    <el-option v-for="item in StatusOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>

            <div class="form-item">
                <label for="email">我的身份</label>
                <el-select v-model="Idvalue" placeholder="Select" size="large" style="width: 302px">
                    <el-option v-for="item in IdOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>

            <div class="form-item">
                <label for="age">年龄</label>
                <el-input v-model="age" style="width: 302px; height: 40px" placeholder="请输入真实年龄" />
            </div>

            <div class="form-item">
                <label for="phone">电话</label>
                <el-input v-model="phone" style="width: 302px; height: 40px" placeholder="请输入电话号码" disabled />
            </div>
        </div>

        <div class="dialog-footer">
            <el-button class="c-button" @click="submit">
                确认
            </el-button>
        </div>
    </div>
</template>
<script>
import { editUserInfo } from '../utils/apis';
export default {
    props: {
        userInfo: {
            type: Object,
        }
    },
    data() {
        return {
            name: "John Doe",
            phone: "13255781345",
            age: "",
            IdOptions: [
                {
                    value: '学生',
                    label: '学生',
                },
                {
                    value: '社会人员',
                    label: '社会人员',
                }
            ],
            StatusOptions: [
                {
                    value: '在校-考虑机会',
                    label: '在校-考虑机会',
                },
                {
                    value: '离校-随时到岗',
                    label: '离校-随时到岗',
                },
                {
                    value: '离校-暂不考虑',
                    label: '离校-暂不考虑',
                },
                {
                    value: '在职-考虑机会',
                    label: '在职-考虑机会',
                },
                {
                    value: '在职-暂不考虑',
                    label: '在职-暂不考虑',
                },
                {
                    value: '在校-暂不考虑',
                    label: '在校-暂不考虑',
                }
            ],
            Idvalue: '',
            Statusvalue: '',
        };
    },
    created() {
        if (!this.userInfo) {
            return;
        }
        this.name = this.userInfo.username;
        this.phone = this.userInfo.phoneNumber;
        this.age = this.userInfo.age;
        this.Idvalue = this.userInfo.jobs;
        this.Statusvalue = this.userInfo.status;
    },
    methods: {
        submit() {
            this.$emit('UserinfoSubmit', {
                show: false,
            });
            editUserInfo({
                username: this.name,
                age: this.age,
                jobs: this.Idvalue,
                status: this.Statusvalue,
            }).then((res) => {
                if (res.data.code === 200) {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                } else {
                    this.$message({
                        message: '修改失败',
                        type: 'error'
                    });
                }
            });
        }
    }
};
</script>
<style scoped>
.form-content {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 768px;
    border-radius: 10px;
    margin: 8px;
    padding: 20px 32px;
    background-color: #f8f8f8;
}

.form {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    flex-wrap: wrap;
    width: 768px;
    /* margin: 8px;
    padding: 20px 32px; */
    /* background-color: #f8f8f8; */
    border-radius: 10px;
}

.form-item {
    display: flex;
    flex-direction: column;
    margin: 0 0 20px;
    padding: 0 20px;
    width: 344px;
    height: 72px;
    gap: 5px;
}


.dialog-footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 20px;
}

.e-button {
    width: 88px;
    height: 35px;
    border-radius: 7px;
}

.e-button:hover {
    border-color: #00a6a7;
    color: #00a6a7;
}

.c-button {
    width: 88px;
    height: 35px;
    border-radius: 7px;
    background-color: #00a6a7;
    color: white;
}

.c-button:hover {
    background-color: #00a6a7;
    color: white;
}
</style>
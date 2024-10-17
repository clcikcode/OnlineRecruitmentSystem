<template>
    <div class="form-content">
        <div class="form">
            <div class="form-item">
                <label for="name">公司名称</label>
                <el-input v-model="name" style="width: 302px; height: 40px ;" placeholder="请输入公司名称" />
            </div>

            <div class="form-item">
                <label for="email">所属行业</label>
                <el-select v-model="value" placeholder="选择行业" size="large" style="width: 302px">
                    <el-option v-for="item in IndustryOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>

            <div class="form-item">
                <label for="email">所属部门</label>
                <el-input v-model="department" style="width: 302px; height: 40px" placeholder="请输入部门" />
            </div>

            <div class="form-item">
                <label for="age">职位名称</label>
                <el-input v-model="jobname" style="width: 302px; height: 40px" placeholder="请输入职位名称" />
            </div>

            <div class="form-item">
                <label for="phone">在职时间</label>
                <div class="time-select">
                    <el-input v-model="enterTime" style="width: 130px; height: 40px" placeholder="请输入入职时间" />
                    <span>至</span>
                    <el-input v-model="leaveTime" style="width: 130px; height: 40px" placeholder="请输入离职时间" />
                </div>

            </div>
        </div>
        <div class="form-textarea">
            <label for="jobContent">工作内容</label>
            <el-input class="e-input" v-model="textarea" style="width: 648px;" :rows="8" type="textarea"
                placeholder="请输入工作内容" />
        </div>

        <div class="dialog-footer">

            <el-button class="c-button" @click="confirmWorkexp">
                确认
            </el-button>
        </div>
    </div>
</template>
<script>
import { addWorkExperience } from '../utils/apis';
export default {
    props: {
        workExp: {
            type: Object,
        },
        classifications: {
            type: Array,
        }
    },
    data() {
        return {
            name: "",
            enterTime: "",
            leaveTime: "",
            department: "",
            textarea: "",
            jobname: "",
            IndustryOptions: [
            ],
            value: '',
            show: false,
        };
    },
    created() {
        for (let i = 0; i < this.classifications.length; i++) {
            this.IndustryOptions.push({
                value: this.classifications[i].classificationName,
                label: this.classifications[i].classificationName,
            });
        }
    },
    methods: {
        confirmWorkexp() {
            this.$emit('confirmWorkexp', {
                show: false,
            });
            addWorkExperience({
                companyName: this.name,
                industry: this.value,
                department: this.department,
                jobName: this.jobname,
                workTime: this.enterTime,
                endTime: this.leaveTime,
                jobContent: this.textarea,
            }).then((res) => {
                if (res.data.code === 200) {
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    });
                } else {
                    this.$message({
                        message: '添加失败',
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
    gap: 5px;
}

.form-item {
    display: flex;
    flex-direction: column;
    /* margin: 0 0 20px;
    padding: 0 20px; */
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

.time-select {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.time-select span {
    display: flex;
    align-items: center;
    font-size: 14px;
}

.form-textarea {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 768px;
    border-radius: 10px;
    gap: 5px;
}
</style>
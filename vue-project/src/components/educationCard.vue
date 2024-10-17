<template>
    <div class="form-content">
        <div class="form">
            <div class="form-item">
                <label for="name">学校名称</label>
                <el-input v-model="name" style="width: 302px; height: 40px ;" placeholder="请输入学校名称" />
            </div>

            <div class="form-item">
                <label for="email">学历</label>
                <el-input v-model="degree" style="width: 302px; height: 40px" placeholder="请输入学历"/>
            </div>

            <div class="form-item">
                <label for="email">专业</label>
                <el-input v-model="profession" style="width: 302px; height: 40px" placeholder="请输入专业"/>
            </div>

            <div class="form-item">
                <label for="phone">毕业时间</label>
                <div class="time-select">
                    <el-input v-model="leaveTime" style="width: 302px; height: 40px" placeholder="请输入毕业时间" />
                </div>

            </div>
        </div>
        <div class="form-textarea">
            <label for="jobContent">在校经历</label>
            <el-input class="e-input" v-model="textarea" style="width: 648px;" :rows="8" type="textarea" placeholder="请输入学校经历" />
        </div>

        <div class="dialog-footer">
            <el-button class="c-button" @click="confirmEducation">
                确认
            </el-button>
        </div>
    </div>
</template>
<script>
import{addEducationExperience} from '../utils/apis';
export default {
    props: {
        education: {
            type: Object,
        }
    },
    data() {
        return {
            name: "",
            leaveTime: "",
            textarea: "",
            profession: "",
            degree: "",
        };
    },
    created() {
        if (this.education) {
            this.name = this.education.school;
            this.leaveTime = this.education.graduationTime.split("T")[0];
            this.textarea = this.education.schoolExp;
            this.profession = this.education.profession;
            this.degree = this.education.degree;
        }
    },
    methods: {
        confirmEducation() {
            this.$emit('confirmEducation', {
                show: false,
            });
            addEducationExperience({
                school: this.name,
                graduationTime: this.leaveTime,
                schoolExp: this.textarea,
                profession: this.profession,
                degree: this.degree,
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
        },
    },
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
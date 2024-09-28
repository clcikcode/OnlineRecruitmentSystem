<template>
    <div class="publish-jobs">
        <div class="table">
            <table border="1" class="job-table">
                <thead>
                    <tr>
                        <th align="center">编号</th>
                        <th align="center">职位名称</th>
                        <th align="center">职位类型</th>
                        <th align="center">工作经验</th>
                        <th align="center">学历要求</th>
                        <th align="center">职位描述</th>
                        <th align="center">所属公司</th>
                        <th align="center">薪资</th>
                        <th align="center" width="204">设置</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                        <td align="center">{{ item.id }}</td>
                        <td align="center">{{ item.jobName }}</td>
                        <td align="center">{{ item.jobType }}</td>
                        <td align="center">{{ item.workExperience }}</td>
                        <td align="center">{{ item.educationalRequirements }}</td>
                        <td align="center">{{ item.jobDescription }}</td>
                        <td align="center">{{ item.company }}</td>
                        <td align="center">{{ item.salary }}</td>
                        <td>
                            <div class="button-group">
                                <button class="button" @click="editJob(item)">修改</button>
                                <button class="button warn" @click="deleteJob(item)">删除</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <button class="publish-jobs-button" @click="openModal">新建发布</button>
        </div>

        <!-- 模态框，作为弹窗 -->
        <div v-if="showModal" class="modal">
            <div class="addjobs">
                <div class="form-group">
                    <label for="job-id">编号</label>
                    <input id="job-id" v-model="newJob.id" type="text" class="form-control" placeholder="请输入编号" />
                </div>

                <div class="form-group">
                    <label for="job-name">职位名称</label>
                    <input id="job-name" v-model="newJob.jobName" type="text" class="form-control" placeholder="请输入职位名称" />
                </div>

                <div class="form-group">
                    <label for="job-type">职位类型</label>
                    <input id="job-type" v-model="newJob.jobType" type="text" class="form-control" placeholder="请输入职位类型" />
                </div>

                <div class="form-group">
                    <label for="work-experience">工作经验</label>
                    <input id="work-experience" v-model="newJob.workExperience" type="text" class="form-control"
                        placeholder="请输入工作经验" />
                </div>

                <div class="form-group">
                    <label for="education">学历要求</label>
                    <input id="education" v-model="newJob.educationalRequirements" type="text" class="form-control"
                        placeholder="请输入学历要求" />
                </div>

                <div class="form-group">
                    <label for="job-description">职位描述</label>
                    <textarea id="job-description" v-model="newJob.jobDescription" class="form-control" rows="3"
                        placeholder="请输入职位描述"></textarea>
                </div>

                <div class="form-group">
                    <label for="company">所属公司</label>
                    <input id="company" v-model="newJob.company" type="text" class="form-control" placeholder="请输入所属公司" />
                </div>

                <div class="form-group">
                    <label for="salary">薪资</label>
                    <input id="salary" v-model="newJob.salary" type="text" class="form-control" placeholder="请输入薪资" />
                </div>

                <div class="form-group">
                    <button type="submit" class="btn-submit" @click="submitJob">提交</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "publish-jobs",
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    jobName: "java",
                    jobType: "互联网",
                    workExperience: "2年",
                    educationalRequirements: "大专",
                    jobDescription: "负责开发",
                    company: "111公司",
                    salary: "10k",
                },
            ],
            showModal: false,
            newJob: {
                id: "",
                jobName: "",
                jobType: "",
                workExperience: "",
                educationalRequirements: "",
                jobDescription: "",
                company: "",
                salary: "",
            },
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        submitJob() {
            this.tableData.push({ ...this.newJob });
            this.showModal = false;
            this.resetForm();
        },
        resetForm() {
            this.newJob = {
                id: "",
                jobName: "",
                jobType: "",
                workExperience: "",
                educationalRequirements: "",
                jobDescription: "",
                company: "",
                salary: "",
            };
        },
        editJob(item) {
            // 编辑逻辑
            this.newJob = { ...item };
            this.showModal = true;
        },
        deleteJob(item) {
            // 删除逻辑
            this.tableData = this.tableData.filter((job) => job.id !== item.id);
        },
    },
};
</script>
<style scoped>
.publish-jobs {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.job-table {
    width: 100%;
    border-collapse: collapse;
}

.button-group {
    display: flex;
    gap: 10px;
}

.button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}

.button.warn {
    background-color: #dc3545;
}

.button:hover {
    opacity: 0.8;
}

.publish-jobs-button {
    width: 200px;
    background-color: #d9eef1;
    color: #03a6a7;
    margin-top: 20px;
}

.publish-jobs-button:hover {
    background-color: #03a6a7;
    color: white;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1000;
}

.addjobs {
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
}

.form-control {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-control:focus {
    border-color: #007bff;
    outline: none;
}

textarea.form-control {
    resize: none;
}

.btn-submit {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.btn-submit:hover {
    background-color: #0056b3;
}</style>

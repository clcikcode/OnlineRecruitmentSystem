<template>
    <div class="publish-jobs">
      <div class="table">
        <table border="1" class="job-table">
          <thead>
            <tr>
              <th align="center">编号</th>
              <th align="center">公司名称</th>
              <th align="center">公司类型</th>
              <th align="center">经营执照</th>
              <th align="center">公司创建时间</th>
              <th align="center">状态</th>
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
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button class="publish-jobs-button" @click="openPopup">新建公司</button>
      </div>
  
      <!-- 使用 Vue 插件或原生 Modal 实现弹窗 -->
      <div v-if="showPopup" class="popup">
        <div class="addjobs">
          <div class="form-group">
            <label for="job-id">编号</label>
            <input id="job-id" type="text" class="form-control" placeholder="请输入编号" v-model="newJob.id">
          </div>
  
          <div class="form-group">
            <label for="job-name">公司名称</label>
            <input id="job-name" type="text" class="form-control" placeholder="请输入职位名称" v-model="newJob.jobName">
          </div>
  
          <div class="form-group">
            <label for="job-type">公司类型</label>
            <input id="job-type" type="text" class="form-control" placeholder="请输入职位类型" v-model="newJob.jobType">
          </div>
  
          <div class="form-group">
            <label for="work-experience">经营执照</label>
            <input id="work-experience" type="text" class="form-control" placeholder="请输入经营执照" v-model="newJob.workExperience">
          </div>
  
          <div class="form-group">
            <label for="education">公司创建时间</label>
            <input id="education" type="text" class="form-control" placeholder="请输入公司创建时间" v-model="newJob.educationalRequirements">
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
  name: "company-add",
  data() {
    return {
      showPopup: false,
      newJob: {
        id: '',
        jobName: '',
        jobType: '',
        workExperience: '',
        educationalRequirements: '',
        jobDescription: ''
      },
      tableData: [
        {
          id: 1,
          jobName: 'java',
          jobType: '互联网',
          workExperience: '2年',
          educationalRequirements: '大专',
          jobDescription: '111',
          company: '111',
          salary: '10k'
        }
      ]
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    submitJob() {
      // 简单的添加数据逻辑
      this.tableData.push({ ...this.newJob });
      this.showPopup = false;
      this.resetForm();
    },
    resetForm() {
      // 重置表单
      this.newJob = {
        id: '',
        jobName: '',
        jobType: '',
        workExperience: '',
        educationalRequirements: '',
        jobDescription: ''
      };
    }
  }
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
  text-align: center;
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

.popup {
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
}
</style>

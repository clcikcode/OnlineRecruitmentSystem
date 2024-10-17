<template>
    <div class="form-content">
        <div class="form">
            <div class="form-item">
                <label for="name">求职类型</label>
                <button class="btn">全职</button>
            </div>
            <div class="form-item">
                <label for="email">期望职位</label>
                <el-select v-model="JobValue" placeholder="选择期望职位" size="large" style="width: 302px">
                    <el-option v-for="item in JobOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>

            <div class="form-item">
                <label for="email">期望行业</label>
                <el-select v-model="industryValue" placeholder="选择期望行业" size="large" style="width: 302px">
                    <el-option v-for="item in IndustryOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>

            <div class="form-item">
                <label for="age">薪资要求</label>
                <div class="salary-select">
                    <el-select v-model="statesalary" placeholder="选择薪资范围" size="large" style="width: 128px">
                        <el-option v-for="item in StateSalaryOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                    <span>至</span>
                    <el-select v-model="endSalary" placeholder="选择薪资范围" size="large" style="width: 128px">
                        <el-option v-for="item in endSalaryOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>

            </div>

            <div class="form-item">
                <label for="phone">期望的工作城市</label>
                <el-input v-model="city" style="width: 302px; height: 40px ;" placeholder="请输入城市" />
            </div>
        </div>

        <div class="dialog-footer">
            <el-button class="c-button" @click="confirm">
                确认
            </el-button>
        </div>
    </div>
</template>
<script>
import { addExpectJobs } from '../utils/apis';
export default {
    props: {
        ExceptJobs: {
            type: Object,
        }
    },
    data() {
        return {
            JobValue: "",
            industryValue: "",
            statesalary: "",
            endSalary: "",
            city: "",
            JobOptions: [
            ],
            IndustryOptions: [
            ],
            StateSalaryOptions: [
                {
                    value: '3k',
                    label: '3k',
                },
                {
                    value: '5k',
                    label: '5k',
                },
                {
                    value: '10k',
                    label: '10k',
                },
                {
                    value: '15k',
                    label: '15k',
                },
                {
                    value: '20k',
                    label: '20k',
                },
                {
                    value: '25k',
                    label: '25k',
                },
                {
                    value: '30k',
                    label: '30k',
                },
                {
                    value: '35k',
                    label: '35k',
                },
                {
                    value: '40k',
                    label: '40k',
                },
                {
                    value: '45k',
                    label: '45k',
                },
                {
                    value: '50k',
                    label: '50k',
                },
                {
                    value: '55k',
                    label: '55k',
                },
                {
                    value: '60k',
                    label: '60k',
                },
                {
                    value: '65k',
                    label: '65k',
                },
                {
                    value: '70k',
                    label: '70k',
                },
                {
                    value: '75k',
                    label: '75k',
                },
                {
                    value: '80k',
                    label: '80k',
                },
                {
                    value: '85k',
                    label: '85k',
                },
                {
                    value: '90k',
                    label: '90k',
                },
                {
                    value: '95k',
                    label: '95k',
                },
                {
                    value: '100k',
                    label: '100k',
                },
            ],
            endSalaryOptions: [
                {
                    value: '3k',
                    label: '3k',
                },
                {
                    value: '5k',
                    label: '5k',
                },
                {
                    value: '10k',
                    label: '10k',
                },
                {
                    value: '15k',
                    label: '15k',
                },
                {
                    value: '20k',
                    label: '20k',
                },
                {
                    value: '25k',
                    label: '25k',
                },
                {
                    value: '30k',
                    label: '30k',
                },
                {
                    value: '35k',
                    label: '35k',
                },
                {
                    value: '40k',
                    label: '40k',
                },
                {
                    value: '45k',
                    label: '45k',
                },
                {
                    value: '50k',
                    label: '50k',
                },
                {
                    value: '55k',
                    label: '55k',
                },
                {
                    value: '60k',
                    label: '60k',
                },
                {
                    value: '65k',
                    label: '65k',
                },
                {
                    value: '70k',
                    label: '70k',
                },
                {
                    value: '75k',
                    label: '75k',
                },
                {
                    value: '80k',
                    label: '80k',
                },
                {
                    value: '85k',
                    label: '85k',
                },
                {
                    value: '90k',
                    label: '90k',
                },
                {
                    value: '95k',
                    label: '95k',
                },
                {
                    value: '100k',
                    label: '100k',
                },
            ],
        };
    },
    created() {
        if (!this.ExceptJobs) {
            return;
        }
        this.ExceptJobs.classifications[1].classificationName
        this.JobValue = this.ExceptJobs.exceptionJobs;
        this.industryValue = this.ExceptJobs.exceptionIndustry;
        this.statesalary = this.ExceptJobs.exceptionSalary.split('-')[0];
        this.endSalary = this.ExceptJobs.exceptionSalary.split('-')[1];
        this.city = this.ExceptJobs.exceptionCity;
        for (let i = 0; i < this.ExceptJobs.jobNames.length; i++) {
            this.JobOptions.push({
                value: this.ExceptJobs.jobNames[i].jobName,
                label: this.ExceptJobs.jobNames[i].jobName,
            });
        }

        for (let i = 0; i < this.ExceptJobs.classifications.length; i++) {
            this.IndustryOptions.push({
                value: this.ExceptJobs.classifications[i].classificationName,
                label: this.ExceptJobs.classifications[i].classificationName,
            });
        }
    },
    methods: {
        async confirm() {
            this.$emit('confirm', {
                show:false
            });
            const res = await addExpectJobs({
                exceptionJobs: this.JobValue,
                exceptionIndustry: this.industryValue,
                exceptionSalary: this.statesalary + '-' + this.endSalary,
                exceptionCity: this.city,
            });
            if (res.status === 200) {
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

.btn {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #00a6a7;
    background-color: #00BEbd1a;
    border: #00a6a7 1px solid;
    border-radius: 5px;
    width: 142px;
    height: 43px;
}

.salary-select {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.salary-select span {
    display: flex;
    align-items: center;
    font-size: 14px;
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
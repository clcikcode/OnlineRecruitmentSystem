<template>
    <div class="job-card">
        <!-- 公司信息部分 -->
        <div class="company-info">
            <img alt="公司logo" class="company-logo" />
            <div class="company-details">
                <span>利郎</span>
                <span>已上市 · 1000-9999人 · 服装/纺织</span>
            </div>
        </div>

        <!-- 职位列表部分 -->
        <div class="job-list">
            <div class="job-item" v-for="job in jobs" :key="job.id">
                <div class="job-content">
                    <span class="job-title">{{ job.title }}</span>
                    <span class="job-salary">{{ job.salary }}</span>
                </div>
                <span class="job-location">{{ job.location }} · {{ job.experience }} · {{ job.education }}</span>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "company-card",
    data() {
        return {
            jobs: [
                {
                    id: 1,
                    title: "抖音运营负责人",
                    location: "泉州 晋江市 青阳",
                    experience: "1-3年",
                    education: "大专",
                    salary: "8-12K",
                },
                {
                    id: 2,
                    title: "利郎招聘样衣工",
                    location: "泉州",
                    experience: "3-5年",
                    education: "高中",
                    salary: "7-10K",
                },
                {
                    id: 3,
                    title: "鞋厂成型普工",
                    location: "泉州",
                    experience: "经验不限",
                    education: "学历不限",
                    salary: "4900-7900元/月",
                },
            ],
        };
    },
};
</script>

<style scoped>
.job-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    max-width: 350px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    height: 400px;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-bottom: 20px;
}

.company-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.company-logo {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    border-radius: 8px;
    background-color: black;
}

.company-details {
    display: flex;
    flex-direction: column;
}

.company-details span:first-child {
    font-size: 18px;
    font-weight: bold;
}

.company-details span:last-child {
    margin: 5px 0 0;
    color: #888;
}

.job-list .job-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
    flex-direction: column;
}

.job-item:last-child {
    border-bottom: none;
}

.job-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.job-title {
    font-size: 16px;
    cursor: pointer;
    transition-property: color;
    transition-duration: 0.6s;
}

.job-title:hover {
    color: #00a6a7;
}

.job-location {
    color: #888;
}

.job-salary {
    color: #ff4c4c;
    font-weight: bold;
}
</style>

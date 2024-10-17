<template>
    <div class="search-card">
        <div class="search-card-title">
            <div class="header">
                <span class="job-title">Java [毕节·七星关区·碧海大道]</span>
                <div class="job-info">
                    <span class="salary">4-7K</span>
                    <span class="experience">1-3年</span>
                    <span class="education">大专</span>
                    <span class="contact-person">陈声伟·人事</span>
                    <span class="status">在线</span>
                </div>
            </div>
            <div class="company">
                <img class="company-logo" alt="公司Logo" />
                <div class="company-info">
                    <span class="company-name">乾诚科技</span>
                    <div class="company-tabs">
                        <span class="industry">计算机软件</span>
                        <span class="financing">未融资</span>
                        <span class="scale">20-99人</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="company-introduce">
            <div class="skills">
                <span>CSS | MySQL | SQL Server | 后端开发 | 计算机软件 | 大数据</span>
            </div>
            <div class="benefits">
                <span>股票期权，通讯补贴，住房补贴</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {},
};
</script>
<style scoped>
.search-card {
    padding: 10px;
    /* border: 1px solid #e0e0e0; */
    border-radius: 10px;
    background-color: white;
    width: 800px;
    height: 140px;
    margin-top: 30px;
}

.search-card:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
}

.job-title {
    font-size: 18px;
    /* margin-bottom: 10px; */
}

.job-title:hover {
    color: #03b1b0;
    cursor: pointer;
}

.job-info {
    display: flex;
    align-items: center;
    /* margin-bottom: 10px; */
}

.job-info span {
    margin-right: 10px;
}

.salary {
    color: #e91e63;
    font-size: 22px;
}

.status {
    color: #4caf50;
}

.skills {
    margin: 10px 0;
    font-size: 14px;
    color: #999;
}

.company {
    display: flex;
    /* margin-bottom: 10px; */
    flex-direction: row;
}

.company-logo {
    width: 50px;
    height: 50px;
    margin-right: 30px;
    background-color: black;
    border-radius: 10px;
}

.company-info {
    display: flex;
    flex-direction: column;
}

.company-info span {
    margin-right: 10px;
}

.company-name {
    font-size: 18px;
    margin-bottom: 15px;
}

.company-name:hover {
    color: #03b1b0;
    cursor: pointer;
}

.benefits {
    font-size: 14px;
    color: #999;
    margin-top: 10px;
}

.search-card-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-area {
    font-size: 16px;
}

.company-introduce {
    background: linear-gradient(to right, #f5fcfc, #f2f4f7);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.experience {
    font-size: 14px;
    color: #838383;
}

.education {
    font-size: 14px;
    color: #838383;
}

.company-tabs span {
    font-size: 14px;
    color: #838383;
}
</style>
  
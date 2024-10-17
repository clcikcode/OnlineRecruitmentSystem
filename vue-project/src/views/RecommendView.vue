<template>
    <div class="container" @scroll="handleScroll">
        <!-- 顶部导航栏 -->
        <!-- <navbar id="1"></navbar> -->

        <div class="selection">
            <div class="jobtype-select">
                <el-select v-model="value" :placeholder="item1.filterName" v-for="(item1, index) in jobSelect" :key="index">
                    <el-option v-for="item in item1.conditionName" :key="item.value" :label="item.text" :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>

        <div class="recommend">
            <div class="recommend-card">
                <RecommendCard v-for="(item, index) in RecommendJobsData" :key="index" :jobTabs="item"
                    :class="['recommend-card-item', { active: selectedTab === index }]" @click="select(index)">
                </RecommendCard>
            </div>


            <div class="recommend-info" v-if="recommmendInfoShow">
                <div class="recommend-info-title">
                    <div class="recommend-info-title-text">
                        <div class="recommend-info-title-text-titleSalary">
                            <span class="infotitle">{{ recommendJobsInfo.jobName }}</span>
                            <span class="salary">{{ recommendJobsInfo.salary }}</span>
                        </div>
                        <div class="recommend-info-title-text-introduce">
                            <div>
                                <el-icon :size="16">
                                    <LocationInformation />
                                </el-icon>
                                <span>{{ recommendJobsInfo.company.city }}</span>
                            </div>
                            <div>
                                <el-icon :size="16">
                                    <OfficeBuilding />
                                </el-icon>
                                <span>{{ recommendJobsInfo.workExperience }}</span>
                            </div>

                            <div>
                                <el-icon :size="16">
                                    <School />
                                </el-icon>
                                <span>{{ recommendJobsInfo.educationalRequirements }}</span>
                            </div>

                        </div>
                    </div>
                    <div class="recommend-info-title-button">
                        <button>感兴趣</button>
                        <button @click="TochatPAge">立即沟通</button>
                    </div>
                </div>

                <div class="job-describe">
                    <div class="job-describe-title">
                        <span>职位描述</span>
                    </div>
                    <div class="job-describe-tab">
                        <div class="job-describe-tab-area" v-for="(item, index) in jobTabs" :key="index">
                            <span>{{ item }}</span>
                        </div>
                    </div>

                    <div class="job-describe-content">
                        <span>{{ recommendJobsInfo.jobDescription }}</span>
                    </div>
                    <div class="job-describe-user">
                        <img :src="recommendJobsInfo.user.imgUrl" />
                        <div class="job-describe-user-name">
                            <span>{{ recommendJobsInfo.user.uname }}</span>
                            <span class="job-describe-user-company">{{ recommendJobsInfo.company.name }} · {{
                                recommendJobsInfo.user.bossTitle }}</span>
                        </div>

                    </div>
                    <div class="job-describe-location">
                        <div class="job-describe-title">
                            <span>工作地址:</span>
                        </div>
                        <div class="job-describe-location-text">
                            <span>{{ recommendJobsInfo.company.address }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import recommmendCard from '../components/recommendCard.vue';
import navbarVue from '../components/navbar.vue';
import RecommendCard from '../components/recommendCard.vue';
import { getConditions } from '../utils/apis';
import { getRecommendJobs } from '../utils/apis';
import { addChatRecord } from '../utils/apis';

export default {
    data() {
        return {
            jobtype: Number(),
            jobSelect: [],
            jobTabs: [],
            selectedTab: 0,
            RecommendJobsData: [],
            recommendJobsInfo: {},
            value: '',
            recommmendInfoShow: false
        };
    },
    created() {
        this.getConditionsData();
        this.getRecommendJobsData();
    },
    mounted() {
        // 监听窗口的滚动事件
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        // 移除滚动事件监听
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        select(index) {
            this.selectedTab = index;
            this.recommendJobsInfo = this.RecommendJobsData[index];
            this.jobTabs = this.recommendJobsInfo.jobTabs.split(',');
            console.log(this.recommendJobsInfo);
        },
        getConditionsData() {
            getConditions().then(res => {
                // console.log(res);
                this.jobSelect = res.data.data;
            });
        },
        // 滚动事件的处理函数
        handleScroll() {
            // 检查页面是否滚动到底部
            const bottomOfWindow = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
            if (bottomOfWindow) {
                // console.log("到底了");
            }
        },
        getRecommendJobsData() {
            getRecommendJobs(10).then(res => {
                // console.log(res);
                this.recommmendInfoShow = true;
                this.RecommendJobsData = res.data.data;
                this.recommendJobsInfo = this.RecommendJobsData[0];
                this.jobTabs = this.recommendJobsInfo.jobTabs.split(',');
            });
        },
        TochatPAge() {
            //获取今天的日期
            // let date = new Date();
            // let year = date.getFullYear();
            // let month = date.getMonth() + 1;
            // let day = date.getDate();
            // let today = year + '-' + month + '-' + day;
            addChatRecord(this.recommendJobsInfo.id, this.recommendJobsInfo.user.uid);
            setTimeout(() => {
                this.$router.push({
                    path: '/chat',
                    // query: {
                    //     receiverId: this.recommendJobsInfo.user.uid,
                    //     receiverName: this.recommendJobsInfo.user.uname,
                    //     receiverImg: this.recommendJobsInfo.user.imgUrl,
                    //     jobId: this.recommendJobsInfo.id,
                    //     jobName: this.recommendJobsInfo.jobName,
                    //     salary: this.recommendJobsInfo.salary,
                    //     city: this.recommendJobsInfo.company.city,
                    //     companyName: this.recommendJobsInfo.company.name,
                    //     BossTitle: this.recommendJobsInfo.user.bossTitle,
                    //     today: today
                    // }
                });
            }, 500);

        }
    },
    components: { RecommendCard }
};
</script>
<style>
.container {
    width: 100%;
    height: 1700px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #DFF1F4, #EEF7F9);
    overflow-y: scroll;
    z-index: 0;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background-color: #202329;
    color: white;
    top: 0;
    z-index: 10;
    position: sticky;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    margin-left: 360px;
}

.nav-links text {
    margin-right: 20px;
    cursor: pointer;
}

.nav-links text:active {
    color: #03B1B0;
    font-weight: bold;
}

.auth-links {
    display: flex;
    align-items: center;
    margin-right: 40;
}

.auth-links text {
    margin-right: 20px;
    cursor: pointer;
}

.login-btn {
    background-color: white;
    color: #00c2ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.selection {
    width: 100%;
    height: 50px;
    background-color: white;
    position: fixed;
    top: 70px;
    z-index: 10;
    padding-left: 360px;
    border: red 1px solid;
}

.jobtype-select {
    width: 75%;
    margin-top: 7px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;

    gap: 30px;
}

.recommend {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.recommend-card {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 250px;
    top: 120px;
    height: 87vh;
    width: 360px;
}

.recommend-info {
    width: 800px;
    height: 700px;
    position: fixed;
    left: 600px;
    top: 120px;
    margin-top: 20px;
    margin-left: 20px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: none;
}

.recommend-info-title {
    display: flex;
    flex-direction: row;
    height: 100px;
}

.recommend-info-title-text {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
}

.recommend-info-title-text-titleSalary {
    display: flex;
    flex-direction: row;
    width: 500px;
    justify-content: space-between;
}

.infotitle {
    font-size: 20px;
    font-weight: bold;

}

.salary {
    font-size: 20px;
    color: red;
    margin-top: 3px;
}

.recommend-info-title-text-introduce {
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}

.recommend-info-title-text-introduce span {
    font-size: 15px;
}

.recommend-info-title-button {
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 100px;
    justify-content: center;
    padding-top: 30px;
    gap: 20px;
}

.recommend-info-title-button button {
    width: 100px;
    height: 35px;
    font-size: 14px;
    background-color: transparent;
    color: #00bfa5;
    border: 1px solid #00bfa5;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;
}

.recommend-info-title-button button:hover {
    background-color: #00bfa5;
    color: white;

}

.job-describe {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}

.job-describe-title span {
    font-size: 18px;
    font-weight: bold;
}

.job-describe-tab {
    display: flex;
    flex-direction: row;
    width: 700px;
    margin-top: 20px;
}

.job-describe-tab-area {
    background-color: #F8F8F8;
    padding: 2px 5px 5px 5px;
    border-radius: 5px;
    margin-right: 10px;
}

.job-describe-tab-area span {
    color: #666666;
    font-size: 13px;
}

.job-describe-content {
    margin-left: 20px;
    margin-top: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    width: 90%;

}

.job-describe-content span {
    font-size: 14px;
    white-space: pre-wrap;

}

.job-describe-user {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    width: 90%;
    margin-left: 20px;
}

.job-describe-user img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: black;
    margin-top: 10px;

}


.job-describe-location {
    margin-top: 20px;

}

.job-describe-location-text {
    margin-top: 10px;
}

.job-describe-location-text text {
    color: #747474;
    font-size: 13px;
}

.recommend-card-item.active {
    border: #03B1B0 1px solid;
}

.job-describe-user-name {
    display: flex;
    flex-direction: column;
    height: 50px;
    margin-top: 10px;
    margin-left: 10px;
}

.job-describe-user-company {
    font-size: 13px;
    color: #747474;
}
</style> 
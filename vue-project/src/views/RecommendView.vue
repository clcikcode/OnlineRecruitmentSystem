<template>
    <div class="container">
        <!-- 顶部导航栏 -->
        <!-- <navbar id="1"></navbar> -->

        <div class="selection">
            <div class="jobtype-select">
                <uni-data-select v-model="item.jobtype" :localdata="item.jobTypes" :label="item.label"
                    v-for="(item, index) in jobSelect" :key="index" :clear="false">
                </uni-data-select>
            </div>
        </div>

        <div class="recommend">
            <scroll-view class="recommend-card" :scroll-y="true">
                <RecommendCard v-for="(item, index) in jobSelect" :key="index"
                    :class="['recommend-card-item', { active: selectedTab === index }]" @click="select(index)">
                </RecommendCard>
            </scroll-view>

            <div class="recommend-info">
                <div class="recommend-info-title">
                    <div class="recommend-info-title-text">
                        <div class="recommend-info-title-text-titleSalary">
                            <span class="infotitle">新店 急聘采耳按摩师无责15k 包食宿可小白</span>
                            <span class="salary">15-30k</span>
                        </div>
                        <div class="recommend-info-title-text-introduce">
                            <span>泉州</span>
                            <span>经验不限</span>
                            <span>学历不限</span>
                        </div>
                    </div>
                    <div class="recommend-info-title-button">
                        <button>感兴趣</button>
                        <button>立即沟通</button>
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
                        <span>日结</span>
                    </div>
                    <div class="job-describe-user">
                        <img alt="user-avatar" />
                        <span>王永光</span>
                    </div>
                    <div class="job-describe-location">
                        <div class="job-describe-title">
                            <span>工作地址:</span>
                        </div>
                        <div class="job-describe-location-text">
                            <span>泉州鲤城区泉州鑫成就供应链管理有限公司南环路1016号2层整层</span>
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

export default {
    data() {
        return {
            jobtype: Number(),
            jobSelect: [
                {
                    jobtype: 0,
                    jobTypes: [
                        { value: 0, text: "不限" },
                        { value: 1, text: "全职" },
                        { value: 2, text: "兼职" },
                    ],
                    label: '求职类型',
                },
                {
                    jobtype: 0,
                    jobTypes: [
                        { value: 0, text: "不限" },
                        { value: 1, text: "3k以下" },
                        { value: 2, text: "3-5k" },
                        { value: 3, text: "5-10k" },
                    ],
                    label: '薪资待遇',
                },
                // 其他选择配置...
            ],
            jobTabs: ['一对一私教', '团课', '普拉提', '接受兼职'],
            selectedTab: 0,
        };
    },
    methods: {
        select(index) {
            this.selectedTab = index;
        },
    },
    components: { RecommendCard }
};
</script>
<style>
.container {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #DFF1F4, #F2F4F7);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background-color: #202329;
    color: white;
    top: 0;
    z-index: 1000;
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

    padding-left: 360px;
    border: red 1px solid;
}

.jobtype-select {
    width: 75%;
    margin-top: 7px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
}

.recommend {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.recommend-card {
    display: flex;
    flex-direction: column;
    height: 87vh;
    width: 360px;
}

.recommend-info {
    width: 800px;
    height: 700px;

    margin-top: 20px;
    margin-left: 20px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
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
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}

.recommend-info-title-text-introduce text {
    font-size: 13px;
    color: #747474;
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
    border: 2px solid #00bfa5;
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

.job-describe-title text {
    font-size: 14px;
    font-weight: bold;
}

.job-describe-tab {
    display: flex;
    flex-direction: row;
    width: 500px;
    margin-top: 20px;
}

.job-describe-tab-area {
    background-color: #EDEDED;
    padding: 2px 5px 5px 5px;
    border-radius: 5px;
    margin-right: 10px;
}

.job-describe-tab-area text {
    color: #747474;
    font-size: 13px;
}

.job-describe-content {
    margin-left: 20px;
    margin-top: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    width: 90%;

}

.job-describe-content text {
    font-size: 14px;
}

.job-describe-user {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    width: 90%;
    margin-left: 20px;
}

.job-describe-user image {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: black;
    margin-top: 10px;

}

.job-describe-user text {
    margin-top: 20px;
    margin-left: 10px;
}

.job-describe-location {
    margin-top: 20px;
    margin-left: 20px;
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
</style> 
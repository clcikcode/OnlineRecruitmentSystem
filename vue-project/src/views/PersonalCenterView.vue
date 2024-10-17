<template>
    <div class="personal-center">
        <div class="userinfo-banner">
            <div class="contianer">
                <div class="headImg">
                    <img :src="userInfo.imgUrl" alt="">
                </div>
                <div class="userInfo">
                    <div class="username">
                        <span>{{ userInfo.username }}</span>
                    </div>
                    <div class="userinfo-content">
                        <span>{{ userInfo.age }}岁 | {{ education.graduationTime }}年应届生 | {{ education.degree }}</span>
                    </div>
                    <div class="select-inner">
                        <select>
                            <option>{{ userInfo.status }}</option>
                            <option v-for="(item, index) in options" :key="index">{{ item.label }}</option>
                        </select>
                    </div>
                </div>

                <div class="other-info">
                    <div class="expect">
                        <span>期望职位：{{ expectjob.exceptionJobs }}</span>
                    </div>
                    <div class="edu">
                        <span>{{ education.school }}·{{ education.profession }}</span>
                        <span>{{ education.enterTime }}-{{ education.graduationTime }}</span>
                    </div>
                </div>

                <div class="edit-contianer">
                    <div class="edit-btn" @click="toResumePage">
                        <span>在线简历</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="job-tab">
            <div class="user-jobs-tab">
                <div :class="['user-jobs-tab-item', { active: selected === index }]" v-for="(item, index) in jobTab"
                    :key="index" @click="selectTabs(index)">
                    <span>{{ item }}</span>
                </div>

            </div>
        </div>

        <div class="tab-card">
            <personalCard v-for="(item,index) in personalCardData" :key="index" :personalCardData="item"></personalCard>
        </div>
    </div>
</template>
<script>
import personalCard from '@/components/personalCard.vue';
import { getUserInfo, getExpectJobs, getEducationExperience,getChatList } from '../utils/apis'
export default {
    components: {
        personalCard
    },
    data() {
        return {
            userInfo: {
            },
            expectjob: {
            },
            education: {
            },
            jobTab: [
                '沟通过',
                '感兴趣'
            ],
            selected: 0, // 默认选中第一个
            options: [
                { value: '在校-考虑机会', label: '在校-考虑机会' },
                { value: '在校-暂不考虑', label: '在校-暂不考虑' },
                { value: '应届-考虑机会', label: '应届-考虑机会' },
                { value: '应届-暂不考虑', label: '应届-暂不考虑' },
                { value: '1年以内-考虑机会', label: '1年以内-考虑机会' },
                { value: '1年以内-暂不考虑', label: '1年以内-暂不考虑' }
            ],
            personalCardData: []
        };
    },
    created() {
        console.log(this.userInfo);
        this.getCurrentUser();
    },
    methods: {
        selectTabs(index) {
            this.selected = index;
        },
        toResumePage() {
            this.$router.push('/resume');
        },
        getCurrentUser() {
            getUserInfo().then(res => {
                this.userInfo = res.data.data;
            }).catch(err => {
                console.log(err);
            });
            getExpectJobs().then(res => {
                this.expectjob = res.data.data;
            }).catch(err => {
                console.log(err);
            });
            getEducationExperience().then(res => {
                this.education = res.data.data;
                this.education.enterTime = Number(this.education.graduationTime.split('-')[0] - 4);
                this.education.graduationTime = Number(this.education.graduationTime.split('-')[0]);
            }).catch(err => {
                console.log(err);
            });

            getChatList().then(res => {
                this.personalCardData = res.data.data;
                console.log(this.personalCardData);
            }).catch(err => {
                console.log(err);
            });
        }
    }
};
</script>
<style scoped>
.personal-center {
    width: 1700px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    background: linear-gradient(to bottom, #DFF1F4, #F2F4F7);
    overflow-y: auto;
    overflow-x: hidden;
}

.userinfo-banner {
    width: 884px;
    height: 141px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    margin: 0 0 12px;
    padding: 20px 0 20px 24px;
    border-radius: 10px;
    position: relative;
    margin-top: 30px;
    left: 300px;
}

.contianer {
    width: 860px;
    height: 101px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.job-tab {
    width: 884px;
    height: 44px;
    background-color: #fff;
    border-radius: 10px;
    padding: 0 24px;
    position: relative;
    left: 300px;
}

.headImg {
    width: 60px;
    height: 101px;
    border-radius: 50%;
}

.headImg img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.userInfo {
    width: 163px;
    height: 101px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;

}

.username {
    font-size: 20px;
    color: #222222;
    font-family: Arial, Helvetica, sans-serif;
}

.userinfo-content {
    font-size: 14px;
    width: 169px;
    color: #666666;
    font-family: Arial, Helvetica, sans-serif;
    margin: 8px 0;
    margin-bottom: 8px;
}

.select-inner select {
    width: 146px;
    height: 35px;
    border: 1px solid #D4D5D6;
    border-radius: 5px;
}

.select-inner select:focus {
    outline: none;
    /* background-color: #E5F8F8; */
}

.select-inner select option {
    font-size: 14px;
    color: #666666;
    font-family: Arial, Helvetica, sans-serif;
}

.other-info {
    width: 416px;
    height: 101px;
    display: flex;
    flex-direction: column;
    margin-left: 102px;
    gap: 17px;
}

.expect span {
    font-size: 14px;
    color: #333333;
    font-family: Arial, Helvetica, sans-serif;
}

.edu span {
    font-size: 14px;
    color: #333333;
    font-family: Arial, Helvetica, sans-serif;
}

.edu {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.edit-contianer {
    width: 98px;
    height: 101px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}

.edit-btn {
    width: 98px;
    height: 35px;
    background-color: #f8f8f8;
    color: #414a60;
    font-size: 14px;
    border: #D4D5D6 1px solid;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.edit-btn:hover {
    background-color: #03B1B0;
    border: #03B1B0 1px solid;
}

.user-jobs-tab {
    width: 836px;
    height: 44px;
    padding: 0 24px;
    display: flex;
    flex-direction: row;
}

.user-jobs-tab-item {
    width: 57px;
    height: 44px;
    font-size: 16px;
    color: #333333;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 32px -2px 0;
}

.user-jobs-tab-item.active {
    border-bottom: 2px solid #03B1B0;
}

.tab-card {
    position: relative;
    left: 300px;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
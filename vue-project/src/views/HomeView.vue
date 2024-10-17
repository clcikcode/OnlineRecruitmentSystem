<template>
    <div class="container">
        <!-- 顶部导航栏 -->
        <!-- <navbar id="0" :loginbuttonShow="loginbuttonShow" :uname="uname"></navbar> -->
        <!-- 搜索区域 -->
        <SearchInput></SearchInput>
        <!-- 类别标签 -->
        <div class="category-tags">
            <span>热门职位：</span>
            <span class="tag" v-for="(item, index) in TophotJobs" :key="index">{{ item.jobName }}</span>
        </div>

        <!-- 宣传图像 -->
        <div class="promo">
            <div class="jobselect">
                <div class="hover-element" v-for="(item, index) in PageList" :key="index">
                    <JobSelect :title="item.classificationName" :jobType="item.jobNames"
                        @mouseenter="handleMouseEnter(item.id)" @mouseleave="handleMouseLeave">
                    </JobSelect>
                </div>
                <div class="pagination">
                    <el-pagination size="small" background layout="prev, pager, next" :total="25" class="mt-4"
                        :page-size="7" @prev-click="prev" @next-click="next" @current-change="handleCurrentChange" />
                </div>

            </div>

            <div class="popup" v-if="popupShow" @mouseenter="PopupControl" @mouseleave="PopupCancel">
                <div class="kong"></div>
                <div class="popup-content">
                    <div class="title">
                        <span>{{ classificationName }}</span>
                    </div>
                    <div class="jobs" v-for="(item, index) in classificationJobList" :key="index">
                        <div class="jobs-title">
                            <span>{{ item.jobsType }}</span>
                        </div>
                        <div class="job-content">
                            <span v-for="(item1,index1) in item.jobNames" :key="index1">{{ item1.jobName }}</span>
                        </div>   
                    </div>

                </div>
            </div>
            <div class="promo-banners">
                <img :src="item.imgUrl" v-for="(item, index) in bannerList" :key="index" />
            </div>
        </div>

        <!-- 热招职位 -->
        <div class="hot-jobs">
            <div class="job-title">
                <span>热招职位</span>
            </div>
            <Tab @getData="getHotJobsData"></Tab>
            <div class="job-card">
                <Card v-if="show" v-for="(item, index) in HotJobsList" :key="index" :jobname="item.jobName"
                    :classficationName="item.classficationName" :salary="item.salary" :educationalRequirements="item.educationalRequirements"
                    :location="item.companyCity" :companyName="item.companyName" :jobWanted="item.jobWanted"
                    :workExperience="item.workExperience" :imageSrc="item.companyLogo" :financing="item.financing"> </Card>
            </div>
            <button class="button-more">查看更多</button>
        </div>

        <div class="hot-company-content">
            <div class="job-title">
                <span>热门公司</span>
            </div>
            <div class="hot-company">
                <CompanyCard></CompanyCard>
                <CompanyCard></CompanyCard>
                <CompanyCard></CompanyCard>
                <CompanyCard></CompanyCard>
                <CompanyCard></CompanyCard>
                <CompanyCard></CompanyCard>
                <!-- 重复的公司卡片 -->
            </div>
            <button class="button-more">查看更多</button>
        </div>

    </div>
</template>
<script>
import Tab from '../components/tab.vue';
import { getClassification } from '../utils/apis';
import { getHotJobs, getHotJobsRank } from '../utils/apis';
import JobSelect from '../components/jobSelect.vue';
import SearchInput from '../components/searchInput.vue';
import Card from '../components/card.vue';
import CompanyCard from '@/components/companyCard.vue';
import { getCarousel } from '../utils/apis';
import { getJobByClassification } from '../utils/apis';
export default {
    components: {
        Tab,
        JobSelect,
        SearchInput,
        Card,
        CompanyCard
    },
    data() {
        return {
            PageList: [],
            HotJobsList: [],
            show: true,
            loginbuttonShow: true,
            uname: "",
            TophotJobs: [],
            popupShow: false,
            bannerList: [],
            imgsrc: "",
            jobselectShow: false,
            isMouseOverJobSelect: false,
            isMouseOverPopup: false,
            page: 1,
            classificationJobList: [],
            classificationName:""
        };
    },
    created() {
        this.loginbuttonShow = localStorage.getItem('loginbuttonShow');
        this.uname = localStorage.getItem('uname');
        getClassification(7, 1).then(res => {
            // console.log(res);
            this.PageList = res.data.data;
        });
        getHotJobs(1).then(res => {
            console.log(res);
            this.HotJobsList = res.data.data;
        });
        getHotJobsRank(7).then(res => {
            this.TophotJobs = res.data.data;
            console.log(this.TophotJobs);
        });
        getCarousel().then(res => {
            this.bannerList = res.data.data;
            this.imgsrc = this.bannerList[0].imgUrl;
            console.log(res);
        });
    },
    methods: {
        handleMouseLeave() {
            this.isMouseOverJobSelect = false;
            this.updatePopupShow();

        },
        handleMouseEnter(id) {
            this.isMouseOverJobSelect = true;
            this.updatePopupShow();
            getJobByClassification(id).then(res => {
                // console.log(res);
                this.classificationJobList = res.data.data;
                this.classificationName = res.data.data[0].classificationName;
                console.log(this.classificationJobList);
            });
        },
        getJobselect(e) {
            const page = {
                pageSize: 7,
                pageNum: e.current
            };
            getClassification(page).then(res => {
                this.PageList = res.data;
            });
        },
        getHotJobsList(data) {
            this.HotJobsList = data;
            this.show = false;
            this.show = true;
        },
        tochat() {
            this.$router.push('/pages/chat/chat');
        },
        PopupControl() {
            this.isMouseOverPopup = true;
            this.updatePopupShow();
        },
        PopupCancel() {
            this.isMouseOverPopup = false;
            this.updatePopupShow();
        },
        getHotJobsData(Jobsdata) {
            // console.log(Jobsdata);
            this.HotJobsList = Jobsdata;
            this.show = false;
            this.show = true;
        },
        updatePopupShow() {
            this.popupShow = this.isMouseOverJobSelect || this.isMouseOverPopup;
        },
        prev() {
            this.page--;
            if (this.page < 1) {
                this.page = 1;
            }
            getClassification(7, this.page).then(res => {
                this.PageList = res.data.data;
            });
        },
        next() {
            this.page++;
            getClassification(7, this.page).then(res => {
                this.PageList = res.data.data;
            });
        },
        handleCurrentChange(val) {
            getClassification(7, val).then(res => {
                this.PageList = res.data.data;
            });
        }
    }
};
</script>
<style scoped>
.container {
    width: 1700px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #DFF1F4, #F2F4F7);
}

.search-area {
    display: flex;
    justify-content: center;
    padding: 20px 0;

}

.search-area-border {
    display: flex;
    justify-content: center;
    border: #00BEBD 2px solid;
    border-radius: 10px;
}

.search-category {
    padding: 10px;
    border: none;
    font-size: 16px;
}

.search-input {
    padding: 10px;
    width: 700px;
    height: 50px;
    background-color: #fff;
}

.search-btn,
.location-btn {
    padding: 10px 20px;
    background-color: #00BEBD;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 120px;
}

.category-tags {
    padding: 10px;
    text-align: center;
}

.tag {
    margin-right: 15px;
    padding: 5px 10px;
    background-color: #fff;
    color: #00A6A7;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition-property: background-color;
    transition-duration: 0.5s;
}

.tag:hover {
    background-color: #00A6A7;
    color: #fff;
}

.promo {
    display: flex;
    flex-direction: row;
    margin-left: 300px;
}

.jobselect {
    width: 380px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
}


.promo-banners {
    display: flex;
    justify-content: space-around;
    margin-left: 20px;
    width: 700px;
    flex-wrap: wrap;
}

.promo-banners img {
    width: 350px;
    height: 200px;
    border-radius: 10px;
    object-fit: contain;
}

.hot-jobs {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
}

.job-title {
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
}

.job-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1600px;
    flex-wrap: wrap;
}

.button-more {
    background-color: #D9EEF1;
    margin-left: 740px;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    margin-top: 30px;
    font-size: 16px;
    color: #00A6A7;
    padding-top: 5px;
    transition-property: background-color;
    transition-duration: 0.7s;
}

.button-more:hover {
    background-color: #00A6A7;
    color: white;
}

.hot-company-content {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
}

.hot-company {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1600px;
    flex-wrap: wrap;
    margin-top: 30px;
}

.popup {
    width: 720px;
    height: 400px;
    position: fixed;
    left: 680px;
    display: flex;
    flex-direction: row;
}

.pagination {
    position: relative;
    left: 190px;
    top: 20px;
}

.kong {
    height: 400px;
    width: 20px;
}

.popup-content {
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
}

.mt-4 {
    position: absolute;
    top: 10px;

}
.jobs{
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-wrap: nowrap;
    gap: 20px;
}
.title{
    margin-top: 10px;
    margin-left: 10px;
}

.jobs-title{
    font-size: 13px;
    flex-wrap: nowrap;
    width: 16%;
}

.job-content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 20px;
    font-size: 13px;
    gap: 20px;
    width: 84%;
    cursor: pointer;
}

.job-content span:hover{
    color: #00A6A7;
}


</style>  

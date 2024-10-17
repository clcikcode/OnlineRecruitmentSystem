<template>
    <div class="content1">
        <div class="card-title">
            <span class="title">{{ jobTabs.jobName }}</span>
            <span class="salary">{{ jobTabs.salary }}</span>
        </div>
        <div class="tabs-area">
            <div class="tabs"  v-for="(item, index) in tabs" :key="index">
                <span>{{ item }}</span>
            </div>
        </div>

        <div class="company-info">
            <div class="company-user">
                <img :src="jobTabs.company.logoUrl" />
                <span>{{ jobTabs.company.name }}</span>
            </div>
            <div class="company-location">
                <span>{{ companyAddress }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "recommend-card",
    props: {
        jobTabs: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            tabList: [],
        };
    },
    computed: {
        companyAddress() {
            if (this.jobTabs.company.county !== null) {
                return this.jobTabs.company.city + '·' + this.jobTabs.company.county;
            }
            else {
                return this.jobTabs.company.city;
            }
        },
        tabs() {
            this.tabList.push(this.jobTabs.workExperience);
            this.tabList.push(this.jobTabs.educationalRequirements);
            this.tabList.push(this.jobTabs.jobTabs.split(',')[0]);
            this.tabList.push(this.jobTabs.jobTabs.split(',')[1]);
            return this.tabList;
        },
    },
};
</script>
<style scoped>
.content1 {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 140px;
    border-radius: 10px;
    background-color: white;
    margin-top: 20px;
    cursor: pointer;
}

.content1:active {
    border: #03b1b0 1px solid;
}

.content1:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
}

.title {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
}

.salary {
    font-size: 18px;
    color: #ff4d4f;
    margin-right: 10px;
}
.tabs-area{
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: 30px;
    overflow: hidden;
    white-space: nowrap;
}

.tabs {

    background-color: #F8F8F8;
    padding: 2px 2px 2px 2px;
    border-radius: 5px;
}


.tabs span {
    color: #666666;
    font-size: 13px;
}

.company-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 50px;
    background: linear-gradient(to right, #f5fcfc, #fcfbfa);
}

.company-user {
    display: flex;
    flex-direction: row;
}

.company-user img {
    width: 25px;
    height: 25px;
    background-color: black;
    border-radius: 20px;
    margin-left: 10px;
}

.company-user span {
    font-size: 14px;
    color: #747474;
    margin-left: 5px;
}

.company-location span {
    font-size: 13px;
    color: #747474;
    margin-right: 10px;
}
</style>
  
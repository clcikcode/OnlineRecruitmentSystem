<template>
    <div class="content">
        <div v-for="(tab, index) in tabs" :key="index" :class="['tab-item', { active: selectedTab === tab.tabId }]"
            @click="selectTab(tab.tabId)">
            {{ tab.tabName }}
        </div>
    </div>
</template>
<script>
import { getHotJobs } from './../utils/apis';

export default {
    name: "tabs",
    data() {
        return {
            tabs: [
                {
                  tabName:  '互联网',
                  tabId: 1 
                },
                {
                  tabName:  '产品',
                  tabId: 3
                },
                {
                  tabName:  '客服/运营',
                  tabId: 4
                },
                {
                  tabName:  '人力/行政/法务',
                  tabId: 6
                },
                {
                  tabName: '教育培训',
                  tabId: 12
                },
                {
                  tabName:  '设计',
                  tabId: 13 
                },
                {
                  tabName: '生产/制造',
                  tabId: 8 
                },
                {
                  tabName: '酒店/旅游',
                  tabId: 11 
                },
            ],
            selectedTab: 1, // 默认选中第一个
            HotJobsList: []
        };
    },
    methods: {
        selectTab(tabId) {
            this.selectedTab = tabId;
            getHotJobs(tabId).then(res => {
                this.HotJobsList = res.data.data;
                console.log(this.HotJobsList);
                this.$emit('getData', this.HotJobsList); // 使用 Vue 事件传递数据
            });
        }
    }
};
</script>
<style scoped>
.content {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    justify-content: center;
}

.tab-item {
    font-size: 16px;
    color: #333;
    padding: 10px 15px;
    cursor: pointer;
}

.tab-item.active {
    color: #00bfa5;
    font-weight: bold;
    border-bottom: 2px solid #00bfa5;
}
</style>
  
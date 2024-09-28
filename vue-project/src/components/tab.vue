<template>
    <div class="content">
        <div v-for="(tab, index) in tabs" :key="index" :class="['tab-item', { active: selectedTab === tab }]"
            @click="selectTab(tab)">
            {{ tab }}
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
                '互联网',
                '产品',
                '客服/运营',
                '销售',
                '人力/行政/法务',
                '教育培训',
                '设计',
                '生产/制造',
                '酒店/旅游'
            ],
            selectedTab: '互联网', // 默认选中第一个
            HotJobsList: []
        };
    },
    methods: {
        selectTab(tab) {
            this.selectedTab = tab;
            getHotJobs(tab).then(res => {
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
  
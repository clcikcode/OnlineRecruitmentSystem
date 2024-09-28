<template>
    <div class="sidebar">
        <div class="sidebar-bcolor">
            <div class="sidebar-title">
                <span>线上直聘-招聘者</span>
            </div>
            <div class="sidebar-collapse">
                <div :class="['collapse-item', { active: activeIndex === index }]" v-for="(item, index) in items"
                    :key="index" @click="tabclick(index, item)">
                    <span>{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="sidebar-content">
            <div class="sidebar-content-top">
                <sidebar-top :title="indexName"></sidebar-top>
            </div>
            <div class="sidebar-publish" v-if="activeIndex === 0">
                <publish-jobs></publish-jobs>
            </div>
            <div class="sidebar-company-add" v-if="activeIndex === 1">
                <company-add></company-add>
            </div>
            <div class="sidebar-company-management" v-if="activeIndex === 2">
                <company-management></company-management>
            </div>
        </div>
    </div>
</template>
<script>
import sidebarTopVue from '../sidebar-top/sidebar-top.vue';
import publishJobsVue from '../publish-jobs/publish-jobs.vue';
import companyAddVue from '../company-add/company-add.vue';
import companyManagementVue from '../company-management/company-management.vue';

export default {
    name: "sidebar",
    data() {
        return {
            items: ['管理职位', '公司申请', '公司管理', '查看应聘者'],
            activeIndex: 0, // 当前激活的 collapse-item 的索引
            indexName: '管理职位'
        };
    },
    methods: {
        tabclick(index, item) {
            this.activeIndex = index; // 设置当前点击的项为激活状态
            this.indexName = item;
        }
    }
};
</script>
<style scoped>
.sidebar {
    display: flex;
    flex-direction: row;
}

.sidebar-bcolor {
    background-color: #1e282c;
    height: 100vh;
    width: 330px;
    display: flex;
    flex-direction: column;
}

.sidebar-title {
    font-size: 20px;
    color: aliceblue;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 30px;
}

.collapse-item {
    color: #b0b4b5;
    height: 30px;
    width: 300px;
    padding-left: 30px;
    padding-top: 5px;
    margin-top: 10px;
    font-size: 14px;
}

.collapse-item:hover {
    color: white;
}

.collapse-item.active {
    background-color: #1890ff;
    color: white;
}
</style>

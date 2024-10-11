<template>
    <div class="content1">
        <div class="card-title">
            <span class="title">新店 急聘采耳按摩师无责15k 包食宿可小白</span>
            <span class="salary">15-30k</span>
        </div>
        <div class="tabs">
            <span v-for="(item, index) in tabList" :key="index">{{ item }}</span>
        </div>
        <div class="company-info">
            <div class="company-user">
                <img alt="company-user" />
                <span>而信道</span>
            </div>
            <div class="company-location">
                <span>泉州石狮市步行街</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "recommend-card",
    data() {
        return {
            tabList: ['经验不限', '学历不限', '无需足浴', '无销售性'],
        };
    },
};
</script>
<style scoped>
.content1 {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 130px;
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
    margin-top: 20px;
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
    font-size: 20px;
    color: #ff4d4f;
    margin-right: 10px;
}

.tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.tabs span {
    background-color: #ededed;
    color: #747474;
    font-size: 13px;
    width: 60px;
    padding-left: 5px;
}

.company-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
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
  
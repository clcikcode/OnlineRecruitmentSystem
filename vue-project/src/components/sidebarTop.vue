<template>
    <div class="sidebar-top">
        <div class="sidebar-top-title">
            <span>{{ title }}</span>
        </div>
        <div class="sidebar-top-user">
            <img alt="用户头像" />
            <span>林甲峰</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "sidebar-top",
    props: {
        title: {
            type: String,
            default: "管理职位"
        }
    },
    data() {
        return {};
    }
};
</script>
<style scoped>
.sidebar-top {
    height: 60px;
    border-bottom: 2px #e9ecef solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1370px;
    align-items: center;
}

.sidebar-top-title {
    font-size: 20px;
    margin-left: 20px;
}

.sidebar-top-user {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
}

.sidebar-top-user img {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    background-color: black;
    margin-right: 10px;
}

.sidebar-top-user span {
    font-size: 16px;
    font-weight: bold;
}
</style>
  
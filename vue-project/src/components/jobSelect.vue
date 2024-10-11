<template>
    <div>
        <div class="category">
            <span class="category-title">{{ title }}</span>
            <div class="sub-categories">
                <span class="sub-category" v-for="(item, index) in jobType" :key="index">{{ item.jobName }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "JobSelect",
    props: {
        title: {
            type: String,
            required: true
        },
        jobType: {
            type: Array,
            required: true
        }
    },
    data() {
        return {};
    }
};
</script>
<style>
.category {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 15px;
    height: 30px;
    border-radius: 5px;
    transition: width 1s, height 1s;
}

.category:hover {
    height: 50px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    background-color: white;
}

.category-title {
    font-size: 16px;
    margin-right: 20px;
}

.sub-categories {
    display: flex;
    align-items: center;
}

.sub-category {
    margin-right: 20px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
}

.sub-category:hover {
    color: #333;
}
</style>
  
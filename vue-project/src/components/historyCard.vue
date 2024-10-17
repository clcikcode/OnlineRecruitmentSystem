<template>
    <div class="job-history">
        <h3>看过的职位</h3>
        <ul class="ul">
            <li v-for="job in jobs" :key="job.title" class="job-item">
                <div class="job-title1">{{ job.title }}</div>
                <div class="job-details">
                    <span class="salary1">{{ job.salary }}</span>
                    <span class="location">{{ job.location }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "history-card",
    data() {
        return {
            jobs: [
                {
                    title: "java开发（14薪）",
                    salary: "10-15K·14薪",
                    location: "泉州·丰泽区"
                },
                {
                    title: "普拉提大器械教练",
                    salary: "95-100元/时",
                    location: "泉州·丰泽区"
                },
                // {
                //     title: "药店营业员",
                //     salary: "3-4K",
                //     location: "泉州·南安市"
                // },
                // {
                //     title: "出差专员",
                //     salary: "4-9K",
                //     location: "泉州·丰泽区"
                // }
            ]
        };
    }
};
</script>
  
<style scoped>
.job-history {
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    height: 395px;
    margin-top: 20px;
    margin-left: 10px;
}

.job-history h3 {
    margin-bottom: 10px;
    margin-top: 20px;
    margin-left: 10px;
}

.job-item {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.job-item:hover {
    background-color: #03b1b0;
    color: white;
}

.job-details {
    display: flex;
    justify-content: space-between;
}

.salary1 {
    color: red;
}

.location {
    font-size: 14px;
    color: gray;
}

.ul {
    list-style: none;
    padding-left: 0;
    /* margin-right: 30px; */
    cursor: pointer;
}
</style>

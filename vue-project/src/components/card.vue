<template>
    <div class="card">
        <div class="header">
            <div class="card-job-title">{{ jobname }}</div>
            <div class="card-salary">{{ salary }}</div>
        </div>
        <div class="location">
            <span>{{ location }}</span>
            <span>{{ workExperience }}</span>
            <span>{{ educationalRequirements }}</span>
            <span>{{ jobWanted }}</span>
        </div>
        <div class="card-company-info">
            <div class="company-img-name">
                <img :src="imageSrc" />
                <div class="card-company-name">{{ companyName }}</div>
            </div>
            <div class="industry">{{ jobType }} | {{ financing }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Card",
    props: {
        jobname: {
            type: String,
        },
        salary: {
            type: String,
        },
        location: {
            type: String,
        },
        workExperience: {
            type: String,
        },
        educationalRequirements: {
            type: String,
        },
        imageSrc: {
            type: String,
        },
        jobType: {
            type: String,
        },
        companyName: {
            type: String,
        },
        jobWanted: {
            type: String,
        },
        financing: {
            type: String,
        },
    },
};
</script>
<style>
.card {
    border: 1px solid #e0e0e0;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    width: 370px;
    height: 120px;
    margin-right: 20px;
    margin-top: 20px;
    cursor: pointer;
}

.card:hover {
    box-shadow: 10px 10px 5px #e9ecf0;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 7px;
}

.card-job-title {
    font-size: 16px;
    color: #333;
    transition-property: color;
    transition-duration: 0.6s;
}

.card-job-title:hover {
    color: #00a6a7;
}

.card-salary {
    font-size: 16px;
    color: #ff4d4f;
}

.location {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    font-size: 14px;
    color: #999;
}

.card-company-info {
    background: linear-gradient(to right, #f5fcfc, #fcfbfa);
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
    width: 368px;
    height: 33px;
    margin-left: -10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}

.card-company-name {
    font-weight: bold;
}

.industry {
    color: #999;
    margin-right: 20px;
}

.company-img-name {
    display: flex;
    flex-direction: row;
}

.company-img-name img {
    width: 25px;
    height: 25px;
    background-color: black;
    border-radius: 5px;
    margin-right: 10px;
    margin-left: 20px;
}
</style>
  
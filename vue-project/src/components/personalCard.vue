<template>
    <div class="personalCard">
        <div class="info-headers">
            <div class="img-box">
                <img :src="personalCardData.receiverAvatar" alt="user" width="24px" height="24px">
                <div class="name">
                    <span>{{ personalCardData.receiverName }}</span>
                    <span>{{ personalCardData.bossTitle }}</span>
                </div>

            </div>
        </div>
        <div class="info-primary">
            <div class="job-info-width">
                <div class="job-info-width-title">
                    <div class="job-name-text">
                        <span>{{ personalCardData.jobName }}</span>
                    </div>
                    <div class="locations">
                        <span>[{{ personalCardData.city }}]</span>
                    </div>
                </div>
                <div class="gray">
                    <div class="gray-salary">
                        <span>{{ personalCardData.salary }}</span>
                    </div>
                    <div class="gray-tab">
                        <span>应届生</span>
                        <span>本科</span>
                    </div>
                </div>

            </div>
            <div class="company-info-width">
                <img src="https://img.bosszhipin.com/boss/avatar/avatar_15.png" alt="company" width="56px" height="56px">
                <div class="company-text">
                    <span>{{ personalCardData.companyName }}</span>
                    <div class="company-tabs">
                        <span>互联网</span>
                        <span>100-499人</span>
                        <span>厦门</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        personalCardData: {
            type: Object,
            default: () => { }
        }
    },
    name: 'personalCard',
    data() {
        return {
        }
    }

}
</script>
<style scoped>
.personalCard {
    background-color: #fff;
    border-radius: 10px;
    width: 884px;
    height: 136px;
    display: flex;
    flex-direction: column;
}

.personalCard:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.info-headers {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 884px;
    height: 48px;
    background: linear-gradient(to right, #f5fcfc, #fcfbfa);
    border-radius: 10px 10px 0 0;
}

.img-box {
    width: 884px;
    height: 48px;
    border-radius: 50%;
    padding: 12px 24px;
    display: flex;
    flex-direction: row;
}

.img-box img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 0 24px 0 0;
}

.img-box span {
    font-size: 13px;
    font-weight: 500;
    color: #333;
}

.info-primary {
    width: 884px;
    height: 88px;
    display: flex;
    flex-direction: row;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
}

.job-info-width {
    width: 500px;
    height: 56px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.company-info-width {
    width: 336px;
    height: 56px;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.job-info-width-title {
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 22px;
    gap: 10px;
}

.job-name-text {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
}

.locations {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
}

.gray {
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 22px;
    align-items: center;
    gap: 10px;
}

.gray-salary {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fe574a;
}

.gray-tab {
    font-size: 13px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.company-info-width img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
}

.company-text {
    display: flex;
    flex-direction: column;
    margin: 0 52px 0 0;
    width: 162px;
    height: 56px;
}

.company-text span {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.name {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.company-tabs {
    display: flex;
    flex-direction: row;
}
</style>
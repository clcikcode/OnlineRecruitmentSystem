<template>
    <div :class="['chatCard', { selected: isSelected }]" @click="$emit('click')">
        <div class="chatCard-img">
            <img :src="userInfo.receiverAvatar" />
        </div>
        <div class="chatCard-content">
            <div class="chatCard-name">
                <span>{{ userInfo.receiverName }}</span>
                <span class="chatCard-company">{{ userInfo.companyName }}|{{ userInfo.bossTitle }}</span>
                <span class="chatCard-time">{{ today }}</span>
            </div>
            <div class="chatCard-message">
                <span class="message">{{ userInfo.content }}</span>
                <span class="noReadCount" v-show="noReadShow">{{ userInfo.noReadCount }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        isSelected: {
            type: Boolean,
            default: false
        },
        userInfo: {
            type: Object,
        }
    }
    ,
    data() {
        return {
            today: '',
            noReadShow: false
        };
    },
    created() {
        console.log(this.userInfo);
        this.today = this.userInfo.updateTime.split('T')[0];
        if (this.userInfo.noReadCount > 0) {
            this.noReadShow = true;
        }
    },
    watch: {
        'userInfo.noReadCount'(newVal) {
            this.updateNoReadShow();
        }
    },
    methods: {
        updateNoReadShow() {
            this.noReadShow = this.userInfo.noReadCount > 0;
        }
    },
};
</script>

<style scoped>
.chatCard {
    width: 340px;
    height: 78px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
}

.selected {
    background-color: #EAEAEA;
}

.chatCard:hover {
    background-color: #EAEAEA;
}


.chatCard-img img {
    width: 45px;
    height: 45px;
    background-color: black;
    border-radius: 70px;
    margin-left: 20px;
    margin-right: 10px;
}

.chatCard-content {
    width: 313px;
    height: 47px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.chatCard-name {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.chatCard-company {
    font-size: 14px;
    color: #999;
    width: 85px;
    white-space: nowrap;
    /* 禁止换行 */
    overflow: hidden;
    /* 隐藏超出容器的内容 */
    text-overflow: ellipsis;
    /* 使用省略号表示超出的文本 */
}

.chatCard-time {
    position: relative;
    left: 40px;
    font-size: 14px;
    color: #999;
}

.chatCard-message {
    font-size: 14px;
    color: #999;
    height: 23px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.noReadCount {
    width: 16px;
    height: 16px;
    background-color: #FF4D4F;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    margin-right: 20px;
    margin-top: 5px;
}

.message {
    width: 130px;
    white-space: nowrap;
    /* 禁止换行 */
    overflow: hidden;
    /* 隐藏超出容器的内容 */
    text-overflow: ellipsis;
}</style>
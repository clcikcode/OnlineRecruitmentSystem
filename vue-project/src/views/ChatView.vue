<template>
    <div class="chat-content">
        <div class="chat-message-list" @click="closeEmoji">
            <div class="boss-search-top"></div>
            <chatCard v-for="(card, index) in cards" :key="index" :isSelected="selectedCard === index"
                @click="handleCardClick(index)" :userInfo="card" v-if="ChatCardShow" />
        </div>
        <div class="chat-message-content">
            <div class="userInfo">
                <div class="baseInfo">
                    <span>{{ userInfo.receiverName }}</span>
                    <span>{{ userInfo.companyName }} | {{ userInfo.bossTitle }}</span>
                </div>
            </div>
            <div class="chat-position-content">
                <span class="positon-name">{{ userInfo.jobName }}</span>
                <span class="salary">{{ userInfo.salary }}</span>
                <span class="city">{{ userInfo.city }}</span>
            </div>
            <div class="chat-message" @click="closeEmoji" ref="scrollContainer">
                <div v-for="(item, index) in messageList" :key="index">
                    <!-- 判断消息是发送者还是接收者 -->
                    <senderCard v-if="item.senderId === userInfo.receiverId" :receiverData="item" />
                    <recevierCard v-else :senderData="item" />
                </div>
            </div>
            <div class="chat-editor">
                <div class="chat-controls">
                    <img src="../icon/emoji.png" alt="emoji" @click="openEmojiCard" />
                    <img src="../icon/image.png" alt="picture" />
                </div>
                <textarea id="message" v-model="messageContent" @keydown="handleKeyDown" @click="closeEmoji"></textarea>
                <div class="chat-op" @click="closeEmoji">
                    <span>按Enter健发送,按Ctrl+Enter换行</span>
                </div>
            </div>
        </div>
        <emojiCard class="emotion" @selectEmojis="handleEmoji" v-show="emojishow" ref="emojiCard" />
    </div>
</template>
<script>
import chatCard from '@/components/chatCard.vue';
import senderCard from '@/components/senderCard.vue';
import recevierCard from '@/components/recevierCard.vue';
import emojiCard from '@/components/emojiCard.vue';
import { getChatList, getChatRecord } from '../utils/apis';
import { mapActions } from 'vuex';
export default {
    components: {
        chatCard,
        senderCard,
        recevierCard,
        emojiCard,
    },
    data() {
        return {
            cards: [], // 假设有 6 张卡片
            selectedCard: 0, // 当前选中的卡片索引
            messageContent: '',
            emojishow: false,
            messageList: [], // 统一的消息列表
            jobINfo: {},
            userInfo: {}, //当前选中的用户信息
            senderData: {},
            receiverData: {},
            LocalUserInfo: {},
            show: true,
            ChatCardShow: true,
        };
    },
    computed: {
        wsInstance() {
            return this.$store.state.ws.wsInstance;
        },
    },
    mounted() {
        // 监听聊天容器高度的变化
        this.observeHeightChange();
        // this.jobINfo.jobId = this.$route.query.jobId;
        // this.jobINfo.jobName = this.$route.query.jobName;
        // this.jobINfo.salary = this.$route.query.salary;
        // this.jobINfo.city = this.$route.query.city;
        // this.userInfo.userName = this.$route.query.receiverName;
        // this.userInfo.companyName = this.$route.query.companyName;
        // this.userInfo.id = this.$route.query.receiverId;
        // this.userInfo.url = this.$route.query.receiverImg;
        // this.userInfo.today = this.$route.query.today;
        // this.userInfo.BossTitle = this.$route.query.BossTitle;
        // this.userInfo.content = null;
        // console.log(this.jobINfo);
        // console.log(this.userInfo);
        // if (this.userInfo.id !== undefined) {
        //     this.cards.push(this.userInfo);
        // }
        this.LocalUserInfo.userName = localStorage.getItem('uname');
        this.LocalUserInfo.url = localStorage.getItem('userImg');
        this.LocalUserInfo.id = localStorage.getItem('senderId');
        console.log(this.LocalUserInfo);
        getChatList().then(res => {
            this.cards = res.data.data;
            this.userInfo = this.cards[0];
            let messages = []; // 临时存储所有消息
            getChatRecord(this.userInfo.receiverId).then(res => {
                res.data.data.forEach(item => {
                    // 统一处理消息对象
                    let messageData = {
                        senderId: item.senderId,
                        senderName: item.senderName,
                        senderAvatar: item.senderAvatar,
                        content: item.content,
                        companyName: this.userInfo.companyName,
                        bossTitle: this.userInfo.bossTitle,
                        createTime: item.createTime // 假设有时间字段
                    };
                    messages.push(messageData);
                });
                // 按时间排序
                this.messageList = messages.sort((a, b) => new Date(a.createTime) - new Date(b.createTime));
                console.log(this.messageList);
            });
        });
        this.watchMessage();
    },
    beforeDestroy() {
        // 组件销毁时移除监听
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        ...mapActions(['sendMessage']),
        handleCardClick(index) {
            this.userInfo = this.cards[index];
            this.cards[index].noReadCount = 0;
            if (this.selectedCard != index) {
                this.receiverDataList = [];
                this.senderDataList = [];
                let messages = []; // 临时存储所有消息
                getChatRecord(this.userInfo.receiverId).then(res => {
                    if (res.data.data.length === 0) {
                        this.receiverDataList = [];
                        this.senderDataList = [];
                    }
                    res.data.data.forEach(item => {
                        // 统一处理消息对象
                        let messageData = {
                            senderId: item.senderId,
                            senderName: item.senderName,
                            senderAvatar: item.senderAvatar,
                            content: item.content,
                            companyName: this.userInfo.companyName,
                            bossTitle: this.userInfo.bossTitle,
                            createTime: item.createTime // 假设有时间字段
                        };
                        messages.push(messageData);

                    });
                    // 按时间排序
                    this.messageList = messages.sort((a, b) => new Date(a.createTime) - new Date(b.createTime));
                    console.log(this.messageList);
                    this.show = false;
                    this.show = true;
                })
            }
            this.selectedCard = index; // 设置选中的卡片索引

        },
        sendChatMessage() {
            const message = this.messageContent.trim();
            if (message !== "") {
                let senderData = {
                    senderId: this.LocalUserInfo.id,
                    senderName: this.LocalUserInfo.userName,
                    senderAvatar: this.LocalUserInfo.url,
                    content: message
                }
                console.log(senderData);
                this.messageList.push(senderData);
                this.messageContent = '';  // 发送后清空输入框

                // 发送消息
                const messageData = {
                    senderId: localStorage.getItem('senderId'),
                    receiverId: this.userInfo.receiverId,
                    content: message
                };
                this.sendMessage(JSON.stringify(messageData));
                this.userInfo.content = message;
            } else {
                // alert('Message cannot be empty!');
            }
        },
        handleKeyDown(event) {
            // 如果按下了Enter键
            if (event.key === 'Enter') {
                // 如果按下了Ctrl + Enter，插入换行符
                if (event.ctrlKey) {
                    // 允许默认行为（换行）
                    this.messageContent += '\n';
                } else {
                    // 阻止默认行为（换行），改为发送消息
                    event.preventDefault();
                    this.sendChatMessage();
                }
            }
        },
        handleEmoji(emoji) {
            this.messageContent += emoji;
            // console.log('Emoji selected:', emoji);
        },
        openEmojiCard() {
            this.emojishow = !this.emojishow;
        },
        closeEmoji() {
            this.emojishow = false;
        },
        // 监听 div 高度变化
        observeHeightChange() {
            const scrollContainer = this.$refs.scrollContainer;

            // 使用 MutationObserver 监听高度变化
            this.observer = new MutationObserver(() => {
                this.scrollToBottom();
            });

            // 配置观察的目标和变化类型
            const config = {
                childList: true, // 监听子节点的变化
                subtree: true,   // 监听所有后代节点
                attributes: true // 监听属性变化
            };

            // 开始观察
            this.observer.observe(scrollContainer, config);
        },
        // 滚动到最底部的方法
        scrollToBottom() {
            const scrollContainer = this.$refs.scrollContainer;
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        },
        watchMessage() {
            this.wsInstance.onmessage = (event) => {
                const message = JSON.parse(event.data);
                console.log('Received message:', message);
                if (Number(message.senderId) == this.userInfo.receiverId) {
                    this.messageList.push({
                        senderId: Number(message.senderId),
                        senderName: this.userInfo.receiverName,
                        senderAvatar: this.userInfo.receiverAvatar,
                        companyName: this.userInfo.companyName,
                        bossTitle: this.userInfo.bossTitle,
                        content: message.content
                    });
                }
                for (let i = 0; i < this.cards.length; i++) {
                    if (this.cards[i].receiverId === Number(message.senderId)) {
                        this.cards[i].content = message.content;
                        this.cards[i].noReadCount += 1;
                    }
                }
                this.ChatCardShow = false;
                this.ChatCardShow = true;
            };
        }
    },
};
</script>
<style scoped>
.chat-content {
    width: 1700px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background: linear-gradient(to bottom, #DFF1F4, #F2F4F7);
    gap: 4px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.chat-message-list {
    width: 360px;
    height: 820px;
    border-radius: 10px;
    background: #fff;

}

.chat-message-content {
    width: 820px;
    height: 820px;
    border-radius: 10px;
    background: #fff;
}

.boss-search-top {
    width: 360px;
    height: 48px;
    background: linear-gradient(to right, #F5FCFC, #FBFBFA);
    border-radius: 10px 10px 0 0;
}

.userInfo {
    width: 820px;
    height: 48px;


}

.baseInfo {
    display: flex;
    flex-direction: row;
    gap: 10px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #666666;
    margin-left: 30px;
    padding-top: 10px;
}

.chat-position-content {
    width: 800px;
    height: 56px;
    background: linear-gradient(to right, #F5FCFC, #FBFBFA);
    border-radius: 10px;
    padding: 16px;
    margin: 0 10px;
}

.positon-name {
    font-size: 16px;
    color: #222222;
    font-family: Arial, Helvetica, sans-serif;
}

.salary {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 0 0 16px;
}

.city {
    font-size: 16px;
    color: #222222;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 0 0 16px;
}

.chat-message {
    width: 820px;
    height: 554px;
    border-bottom: #DDDDDD 1px solid;
    overflow-y: auto;
    scrollbar-width: thin;
}

.chat-editor {
    width: 820px;
    height: 158px;
    background: #fff;
    border-radius: 0 0 10px 10px;
    /* margin: 0 0 -152px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    padding: 0 30px;
}

.chat-editor textarea {
    width: 760px;
    height: 75px;
    border-radius: 24px;
    border: none;
    padding: 0 20px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

.chat-editor textarea:focus {
    outline: none;
}

.chat-op {
    display: flex;
    justify-content: flex-end;
    width: 760px;
    height: 38px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: #DDDDDD;
    padding: 5px 0;
}

.chat-controls {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 10px;
    margin-left: 20px;
}

.chat-controls img {
    width: 24px;
    height: 24px;
}

.chat-controls img:hover {
    cursor: pointer;
    background-color: #0BC1C0;
}

.emotion {
    position: absolute;
    bottom: 130px;
    right: 0;
    left: 620px;
    z-index: 1000;
}
</style>
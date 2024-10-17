<template>
  <div class="senderCard">
    <div class="senderCard__header">
      <div class="senderCard__header__right">
        <img :src="receiverData.senderAvatar" alt="">
      </div>
      <div class="senderCard__header__left">
        <div>
          <p>{{ receiverData.senderName }} - {{ receiverData.companyName }} - {{ receiverData.bossTitle }}</p>
        </div>
        <div class="message" :style="{ width: messageWidth }">
          <span>{{ messageText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    receiverData: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      messageText: '', // 示例文本
      messageWidth: 'auto', // 默认宽度
    };
  },
  mounted() {
    this.updateMessageWidth();
  },
  created() {
    this.messageText = this.receiverData.content;
  },
  methods: {
    updateMessageWidth() {
      const font = "14px Arial"; // 字体样式，确保与 CSS 中的字体样式一致
      const calculatedWidth = calculateTextWidth(this.messageText, font) + 24; // 计算文本宽度，24px为内边距
      const maxWidth = 300; // 最大宽度设置为 300px
      this.messageWidth = calculatedWidth > maxWidth ? `${maxWidth}px` : `${calculatedWidth}px`;
    }
  }
};

// 计算文本宽度的函数
function calculateTextWidth(text, font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const width = context.measureText(text).width;
  return width;
}
</script>
  
<style scoped>
.senderCard {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  margin: 8px;
}

.senderCard__header {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.senderCard__header__right img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.senderCard__header__left {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.senderCard__header__left p {
  font-size: 12px;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

.senderCard__header__left .message {
  font-size: 14px;
  color: #666;
  background-color: #00BEBD33;
  border-radius: 10px;
  padding: 8px 12px;
  display: inline-block;
  word-break: break-word;
  /* 长词换行 */
  white-space: normal;
  /* 允许换行 */
  max-width: 300px;
  /* 设置最大宽度为 300px */
}
</style>
  
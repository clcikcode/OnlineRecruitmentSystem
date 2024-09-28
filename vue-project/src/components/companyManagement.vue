<template>
    <div class="company-management">
      <div class="company-management-top">
        <div class="company-management-logo">
          <img alt="公司logo" class="company-logo" />
          <div>
            <span>卫宁健康</span>
          </div>
        </div>
  
        <div class="company-management-jobs">
          <span>684</span>
          <span>在招职位</span>
        </div>
      </div>
  
      <div class="company-management-content">
        <div class="uni-common-mt">
          <div class="segmented-control">
            <span v-for="(item, index) in items" :key="index" :class="['tab-item', { active: current === index }]"
              @click="onClickItem(index)">
              {{ item }}
            </span>
          </div>
        </div>
        <div class="content">
          <div v-if="current === 0" class="company-introduction">
            <span class="content-title">公司简介</span>
            <p>卫宁健康科技集团股份有限公司(Winning Health Technology Group
              Co.,Ltd.)成立于1994年，是国内第一家专注于医疗健康信息化的上市公司，致力于提供医疗健康卫生信息化解决方案，不断提升人们的就医体验和健康水平。卫宁健康通过持续的技术创新，自主研发适应不同应用场景的产品与解决方案，业务覆盖智慧医院、区域卫生、基层卫生、公共卫生、医疗保险、
              健康服务等领域，是中国医疗健康信息行业具有竞争力的整体产品、解决方案与服务供应商。</p>
            <span class="content-title">公司相册</span>
            <div class="image">
              <img class="company-image" />
              <img class="company-image" />
              <img class="company-image" />
              <img class="company-image" />
            </div>
            <span class="content-title">工商信息</span>
            <div class="company-inf">
              <div class="info-row">
                <div class="info-item">
                  <div class="label">企业名称：</div>
                  <div class="value">卫宁健康科技集团股份有限公司</div>
                </div>
                <div class="info-item">
                  <div class="label">企业类型：</div>
                  <div class="value">股份有限公司（上市、自然人投资或控股）</div>
                </div>
                <div class="info-item">
                  <div class="label">法定代表人：</div>
                  <div class="value">周炜</div>
                </div>
              </div>
              <div class="info-row">
                <div class="info-item">
                  <div class="label">成立时间：</div>
                  <div class="value">2004-04-07</div>
                </div>
                <div class="info-item">
                  <div class="label">经营状态：</div>
                  <div class="value">存续</div>
                </div>
                <div class="info-item">
                  <div class="label">注册资本：</div>
                  <div class="value">214242.7249万人民币</div>
                </div>
              </div>
              <div class="more-info">
                <a href="#">查看更多信息 <span class="arrow">▼</span></a>
              </div>
            </div>
            <span class="content-title">公司地址</span>
          </div>
  
          <div v-if="current === 1">
            <recommend-card></recommend-card>
            <recommend-card></recommend-card>
            <recommend-card></recommend-card>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import recommendCardVue from '../recommend-card/recommend-card.vue';

export default {
  name: 'company-management',
  components: {
    recommendCardVue
  },
  data() {
    return {
      items: ['公司简介', '在招职位'],
      current: 0
    };
  },
  methods: {
    onClickItem(index) {
      this.current = index;
    }
  }
};
</script>
<style scoped>
.company-management {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #DFF1F4, #F2F4F7);
}

.company-management-top {
  height: 170px;
  width: 1370px;
  background-color: #37556B;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.company-management-logo {
  display: flex;
  flex-direction: row;
}

.company-management-logo img {
  height: 100px;
  width: 100px;
  border-radius: 20px;
  background-color: #fff;
  margin-left: 30px;
  margin-top: 20px;
}

.company-management-logo span {
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  margin-top: 50px;
  margin-left: 20px;
}

.company-management-jobs {
  margin-top: 50px;
  margin-right: 40px;
}

.company-management-jobs span {
  color: #fff;
  font-weight: bold;
  font-size: 25px;
}

.uni-common-mt {
  margin-top: 30px;
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
  height: 40px;
  margin-left: 100px;
}

.segmented-control {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.tab-item {
  cursor: pointer;
  padding: 5px 10px;
  font-size: 16px;
}

.tab-item.active {
  color: #03A6A7;
  font-weight: bold;
}

.content {
  width: 1100px;
  height: 600px;
  background-color: #F5F7F9;
  margin-top: 30px;
  border-radius: 30px;
  margin-left: 30px;
  padding-top: 20px;
}

.content-title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.company-introduction {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 20px;
}

.image {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 600px;
  height: 100px;
  margin-top: 20px;
}

.company-image {
  width: 100px;
  height: 100px;
  background-color: black;
  border: 1px red solid;
}

.company-inf {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  color: #333;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.info-item {
  flex: 1;
  padding: 0 10px;
  border-right: 1px solid #e0e0e0;
  text-align: center;
}

.info-item:last-child {
  border-right: none;
}

.label {
  font-weight: bold;
  color: #666;
}

.value {
  color: #000;
  margin-top: 8px;
}

.more-info {
  text-align: center;
  padding: 10px 0;
}

.more-info a {
  color: #00a99d;
  text-decoration: none;
  font-weight: bold;
}

.more-info a:hover {
  text-decoration: underline;
}

.arrow {
  font-size: 12px;
}
</style>
  
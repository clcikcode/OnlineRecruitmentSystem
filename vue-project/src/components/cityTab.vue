<template>
    <div class="city-tabs">
      <div class="city">
        <span v-for="(item, index) in cityTabs" :key="index"
          :class="['city-tabs-text', { active: selectedTab === index }]" 
          @click="selectTab(index)">
          {{ item }}
        </span>
      </div>
  
      <div class="cityarea">
        <div class="county">
          <span v-for="(item, index) in cityArea" :key="index" 
            @click="selectCityArea(index)" 
            :class="['city-area-text', { active: selectedCityarea === index }]">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  name: "city-tabs",
  data() {
    return {
      cityTabs: [
        "全国",
        "北京",
        "上海",
        "广州",
        "深圳",
        "杭州",
        "天津",
        "西安",
        "苏州",
        "武汉",
        "厦门",
        "长沙",
        "成都",
        "郑州",
        "重庆",
      ],
      cityArea: [
        "不限",
        "翔安区",
        "同安区",
        "集美区",
        "海沧区",
        "湖里区",
        "思明区",
      ],
      selectedTab: 0,
      selectedCityarea: 0,
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    },
    selectCityArea(index) {
      this.selectedCityarea = index;
    }
  }
};
</script>

<style scoped>
.city-tabs {
  display: flex;
  flex-direction: column;
}

.city {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 880px;
  margin-bottom: 10px;
}

.city-tabs-text {
  font-size: 14px;
  color: #333;
  padding: 10px 15px;
  cursor: pointer;
}

.city-tabs-text.active {
  color: #00bfa5;
  font-weight: bold;
  border-bottom: 2px solid #00bfa5;
}

.cityarea {
  width: 1000px;
  background-color: #F8F8F8;
}

.county {
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.county span {
  font-size: 14px;
  color: #333;
  padding: 10px 15px;
  cursor: pointer;
}

.city-area-text.active {
  color: #00bfa5;
  font-weight: bold;
}
</style>

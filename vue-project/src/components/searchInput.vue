<template>
  <div>
    <div class="search-area">
      <div class="search-area-border">
        <select class="search-category">
          <option>职位类型</option>
          <option>互联网/AI</option>
          <option>销售</option>
          <!-- 更多选项 -->
        </select>
        <input type="text" placeholder="搜索职位、公司" class="search-input" />
        <button class="search-btn">搜索</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {};
  }
};
</script>
<style scoped>
.search-area {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.search-area-border {
  display: flex;
  justify-content: center;
  border: #00bebd 2px solid;
  border-radius: 10px;
}

.search-category {
  padding: 10px;
  border: none;
  font-size: 16px;
}

.search-input {
  padding: 10px;
  width: 700px;
  height: 50px;
  background-color: #fff;
  border: none;
}

.search-btn {
  padding: 10px 20px;
  background-color: #00bebd;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
}
</style>
  
<template>
        <div class="container">
            <!-- <navbar id="2"></navbar> -->
            <div class="frist-area">
                <SearchInput></SearchInput>
                <div class="city-tabs-area">
                    <span>城市与区域:</span>
                    <CityTab></CityTab>
                </div>
                <div class="jobs-type">
                    <uni-data-select v-model="item.id" :localdata="item.conditionName" :label="item.filterName"
                        v-for="(item, index) in jobSelect" :key="index" :clear="false"></uni-data-select>
                </div>
            </div>
            <div class="searchcard">
                <div class="card-area">
                    <SearchCard></SearchCard>
                </div>
               <HistoryCard></HistoryCard>
            </div>
        </div>
</template>
<script>
import navbarVue from '../components/navbar.vue';
import SearchInput from '../components/searchInput.vue';
import SearchCard from '../components/searchCard.vue';
import HistoryCard from '../components/historyCard.vue';
import CityTab from '../components/cityTab.vue';
// import { getConditions } from ';

export default {
    components: {
    navbarVue,
    SearchInput,
    SearchCard,
    HistoryCard,
    CityTab
},
    data() {
        return {
            jobSelect: [],
            value: 0
        };
    },
    mounted() {
        this.getCondition();
    },
    methods: {
        getCondition() {
            // getConditions().then(res => {
            //     this.jobSelect = res.data;
            // });
        }
    }
};
</script>
<style>
.container {
    width: 1700px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #dff1f4, white);
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}

.frist-area {
    width: 1100px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    margin-left: 350px;
    margin-top: 20px;
}

.city-tabs-area {
    margin-left: 30px;
}

.jobs-type {
    width: 95%;
    margin-top: 15px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    margin-left: 30px;
}

.card-area {
    margin-left: 350px;
    display: flex;
    flex-direction: column;
}

.searchcard {
    display: flex;
    flex-direction: row;
}
</style>
  
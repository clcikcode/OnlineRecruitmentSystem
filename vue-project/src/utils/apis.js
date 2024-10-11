// src/utils/api.js
import service from './request.js';

// 封装 GET 请求
export function get(url, params) {
    return service({
        url: url,
        method: 'get',
        params: params,
    });
}

// 封装 POST 请求
export function post(url, data) {
    return service({
        url: url,
        method: 'post',
        data: data,
    });
}

// 获取筛选条件
export function getConditions() {
    return service({
        url: '/filterCondition/getFilter',
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
    });
}

//获取分类列表
export function getClassification(pageSize, pageNum) {
    return service({
        url: '/jobs/getClassification',
        method: 'get',
        params: {
            pageSize: pageSize,
            pageNum: pageNum,
        },
    });
}

//获取热招职位
export function getHotJobs(ClassificationId) {
    return service({
        url: '/jobs/gethotJobs',
        method: 'GET',
        params: {
            ClassificationId: ClassificationId,
        },
    });
}

//获取热招职位排行
export function getHotJobsRank(topN) {
    return get('/jobs/getTopHotJobs', {
        topN: topN,
    });
}

//登录
export function login(data) {
    return service({
        url: '/user/login',
        method: 'post',
        data: {
            uname: data.uname,
            password: data.password,
        },
    });
}

//获取轮播图
export function getCarousel() {
    return service({
        url: '/banner/getBanner',
        method: 'GET',
    });
}

//获取分类职位
export function getJobByClassification(classificationId) {
    return service({
        url: '/jobs/getJobsTypebyClassificationId?classificationId=' + classificationId,
        method: 'GET',
    });
}

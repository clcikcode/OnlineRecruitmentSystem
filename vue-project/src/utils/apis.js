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
            phoneNumber: data.uname,
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

//获取推荐职位
export function getRecommendJobs(TopN) {
    return service({
        url: '/jobs/getRecommendJobs',
        method: 'GET',
        params: {
            TopN: TopN,
        },
    });
}

//获取用户信息
export function getUserInfo() {
    return service({
        url: '/user/getPersonalInfo',
        method: 'GET',
    });
}

//获取个人优势
export function getPersonalAdvantage() {
    return service({
        url: '/user/getPersonalStrengths',
        method: 'GET',
    });
}

//获取期望职位
export function getExpectJobs() {
    return service({
        url: '/user/getjobWanted',
        method: 'GET',
    });
}

//获取工作经历
export function getWorkExperience() {
    return service({
        url: '/user/getWorkExperience',
        method: 'GET',
    });
}

//获取项目经验
export function getProjectExperience() {
    return service({
        url: '/user/getProjectExperience',
        method: 'GET',
    });
}

//获取教育经历
export function getEducationExperience() {
    return service({
        url: '/user/getEducation',
        method: 'GET',
    });
}

//添加期望职位
export function addExpectJobs(data) {
    return service({
        url: '/user/addExceptionJob',
        method: 'POST',
        data: data,
    });
}

//添加工作经历
export function addWorkExperience(data) {
    return service({
        url: '/user/addWorkExperience',
        method: 'POST',
        data: data,
    });
}

//添加项目经验
export function addProjectExperience(data) {
    return service({
        url: '/user/addProjectExperience',
        method: 'POST',
        data: data,
    });
}

//添加教育经历
export function addEducationExperience(data) {
    return service({
        url: '/user/addeducation',
        method: 'POST',
        data: data,
    });
}

//编辑个人优势
export function editPersonalAdvantage(data) {
    return service({
        url: '/user/editPersonalStrengths',
        method: 'POST',
        data: data,
    });
}

//编辑个人信息
export function editUserInfo(data) {
    return service({
        url: '/user/editPersonalInfo',
        method: 'POST',
        data: data,
    });
}

//删除期望职位
export function deleteExpectJobs() {
    return service({
        url: '/user/deleteJobWanted',
        method: 'POST',
    });
}

//删除工作经历
export function deleteWorkExperience(data) {
    return service({
        url: '/user/deleteWorkExperience',
        method: 'DELETE',
        params:{
            id:data
        }
    });
}

//删除项目经验
export function deleteProjectExperience(data) {
    return service({
        url: '/user/deleteProjectExperience',
        method: 'DELETE',
        params:{
            id:data
        }
    });
}

//删除教育经历
export function deleteEducationExperience() {
    return service({
        url: '/user/deleteEducation',
        method: 'DELETE',
    });
}

//添加聊天记录
export function addChatRecord(jobId,receiverId) {
    return service({
        url: '/chatList/add',
        method: 'POST',
        params:{
            jobId:jobId,
            receiverId:receiverId
        }
    });
}

//获取聊天列表
export function getChatList() {
    return service({
        url: '/chatList/getChatList',
        method: 'GET',
    });
}

//获取聊天记录
export function getChatRecord(receiverId) {
    return service({
        url: '/chatList/getChatMessageList',
        method: 'GET',
        params:{
            receiverId:receiverId
        }
    });
}

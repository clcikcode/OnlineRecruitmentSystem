// src/utils/request.js
import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
    baseURL: 'http://localhost:8080/', // 基础 URL
    timeout: 20000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'token': localStorage.getItem('token') || '', // token
    },
});

// // 请求拦截器
// service.interceptors.request.use(
//     (config) => {
//         // 在发送请求之前做一些处理，比如添加 token
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers['token'] = `${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         // 处理请求错误
//         return Promise.reject(error);
//     }
// );

// // 响应拦截器
// service.interceptors.response.use(
//     (response) => {
//         // 对响应数据做一些处理
//         const res = response.data;
//         if (res.code !== 200) {
//             // 可以根据你的业务逻辑进行处理，比如弹出提示框
//             return Promise.reject(new Error(res.message || 'Error'));
//         } else {
//             return res;
//         }
//     },
//     (error) => {
//         // 处理响应错误
//         console.error('Response error:', error);
//         return Promise.reject(error);
//     }
// );

export default service;

<template>
	<!-- 顶部导航栏 -->
	<div class="navbar">
		<span class="logo">线上直聘系统</span>
		<div class="nav-links">
			<span v-for="(item, index) in tabsList" :key="index" @click="toTabPage(item.path, index)"
				:class="['nav-links-text', { active: selectedTab === index }]">
				{{ item.label }}
			</span>
		</div>
		<div class="auth-links" v-if="isLogin">
			<button class="login-btn" @click="toLogin">登录/注册</button>
		</div>
		<div class="afterLogin" v-else>
			<div class="userMsg">
				<span>消息</span>
				<span>简历</span>
			</div>
			<div class="userImg" @mouseenter="userinfoShow" @mouseleave="userinfoClose">
				<span>{{ afterLogin.uname }}</span>
				<img :src="afterLogin.userImg" />
			</div>
			<Transition name="slide">
				<div class="userinfo" v-show="show" :style="userinfoStyle" @mouseenter="userinfoShow"
					@mouseleave="userinfoClose">
					<div class="userinfo-button">
						<span>个人中心</span>
					</div>
					<div class="userinfo-button">
						<span>消息通知</span>
					</div>
					<div class="userinfo-button">
						<span>个人账号管理</span>
					</div>
					<div class="userinfo-button">
						<span @click="logOut">退出登录</span>
					</div>
				</div>
			</Transition>
		</div>
	</div>
	<RouterView />
</template>
  
<script>
import { RouterView } from 'vue-router';
import { mapActions } from 'vuex';
export default {
	name: "navbar",
	props: {
		afterLogin: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			tabsList: [
				{ label: '首页', path: '/' },
				{ label: '推荐', path: '/recommend' },
				{ label: '搜索', path: '/search' },
				{ label: '公司', path: '/company' },
				{ label: '校园', path: '/campus' }  // 如果还有校园页
			],
			selectedTab: 0,
			show: false,
			userinfoStyle: {
				height: '0px'
			},
		};
	},
	components: {
		RouterView
	},
	created() {
		console.log("create")
		console.log(this.afterLogin)
	},
	computed: {
		// 通过计算属性判断用户是否登录
		isLogin() {
			console.log("isLoginStart")
			console.log(this.afterLogin.loginbuttonShow)
			return this.afterLogin.loginbuttonShow;
		}
	},
	methods: {
		...mapActions(['wsModule', 'closeWebSocket']),
		toTabPage(path, index) {
			this.$router.push({ path });  // 根据路由路径跳转
			this.selectedTab = index;
		},
		toLogin() {
			this.$router.push({ path: '/login' });
		},
		userinfoShow() {
			this.show = true;
			this.$nextTick(() => {
				this.userinfoStyle.height = '200px';
			});
			console.log(this.show);
		},
		userinfoClose() {
			this.show = false;
			this.userinfoStyle.height = '0px';
		},
		logOut() {
			// 退出登录，将缓存中的登录状态清除;
			localStorage.setItem('loginbuttonShow', true);
			localStorage.removeItem('uname');
			localStorage.removeItem('userImg');
			localStorage.removeItem('token');
			localStorage.removeItem('senderId');
			this.closeWebSocket();
			this.$router.push({ path: '/login' });

		}
	}
}
</script>
<style>
.navbar {
	display: flex;
	flex-direction: row;
	width: 1700px;
	height: 70px;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	background-color: #202329;
	color: white;
	top: 0;
	z-index: 1000;
	position: sticky;

}

.logo {
	font-size: 24px;
	font-weight: bold;
	margin-left: 360px;
}

.nav-links-text {
	margin-right: 20px;
	cursor: pointer;
}

.auth-links {
	display: flex;
	align-items: center;

}

.nav-links-text.active {
	color: #03B1B0;
}

.login-btn {
	background-color: white;
	color: #00c2ff;
	border: none;
	height: 40px;
	border-radius: 5px;
	cursor: pointer;
	margin-right: 170px;
	transition-property: background-color;
	transition-duration: 1s;
}

.login-btn:hover {
	background-color: #03B1B0;
	color: white;
}

.afterLogin {
	display: flex;
	flex-direction: row;
	margin-right: 60px;
}

.userMsg {
	color: white;
	display: flex;
	justify-content: space-between;
	width: 70px;
	margin-right: 20px;
	font-size: 14px;
	align-items: center;
}

.userMsg :hover {
	color: #03B1B0;
}

.userMsg span {
	cursor: pointer;
}

.userImg {
	color: white;
	width: 80px;
	height: 35px;
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	align-items: center;
	cursor: pointer;
	border-radius: 5px;
	transition: background-color;
	transition-duration: 0.7s;
}

.userImg img {
	width: 27px;
	height: 27px;
	border-radius: 15px;
}

.userImg:hover {
	background-color: #4D4F54;
}

.slide-enter-active,
.slide-leave-active {
	transition: height 1s, padding 1s;
}

.slide-enter,
.slide-leave-to

/* .slide-leave-active in <2.1.8 */
	{
	height: 0;
	padding: 0;
}

.userinfo {
	position: absolute;
	right: 55px;
	top: 60px;
	width: 200px;
	height: 0;
	overflow: hidden;
	/* 确保子元素在父元素高度变化时一起变化 */
	background-color: white;
	border-radius: 5px;
	transition: height 1s, padding 1s;
	/* 确保过渡效果应用到padding */
}

.userinfo span {
	display: block;
	cursor: pointer;
	color: #222222;
	font-size: 14px;
}

.userinfo span:hover {
	color: #03B1B0;
}

.userinfo-button {
	padding-left: 20px;
	padding-top: 15px;
	width: 200px;
	height: 50px;
}

.userinfo-button:hover {
	background-color: #F8F8F8;

}</style>

let heartbeatTimer = null; // 心跳定时器

export default {
  // namespaced: true,
  state: {
    isConnected: false, // WebSocket 连接状态
    message: '' // 收到的消息
  },
  mutations: {
    // 更新 WebSocket 连接状态
    SET_CONNECTED(state, isConnected) {
      state.isConnected = isConnected;
    },

    // 更新是否应该重连
    SET_SHOULD_RECONNECT(state, shouldReconnect) {
      localStorage.setItem('wsShouldReconnect', shouldReconnect); // 将是否需要重连的状态持久化
    },

    // 更新收到的消息
    SET_MESSAGE(state, message) {
      state.message = message;
    }
  },
  actions: {
    // 初始化WebSocket连接 (在登录后调用)
    initWebSocket({ commit, dispatch }) {
      dispatch('initSetShouldReconnect'); // 判断 wsShouldReconnect 是否初始化
      const shouldReconnect = localStorage.getItem('wsShouldReconnect') === 'true';

      if (shouldReconnect) {
        const senderId = localStorage.getItem('senderId');
        const ws = new WebSocket(`ws://localhost:8080/ws?senderId=${senderId}`);

        // 监听 WebSocket 打开事件
        ws.onopen = () => {
          console.log('WebSocket连接已打开！');
          commit('SET_CONNECTED', true);
          dispatch('startHeartbeat', ws); // 开始心跳检测
        };

        // 监听 WebSocket 消息
        ws.onmessage = (event) => {
          console.log('收到消息：', event.data);
          commit('SET_MESSAGE', event.data); // 更新消息状态
        };

        // 监听 WebSocket 关闭事件
        ws.onclose = () => {
          console.log('WebSocket 已关闭');
          commit('SET_CONNECTED', false);
          dispatch('reconnect'); // 尝试重连
        };

        // 监听 WebSocket 错误事件
        ws.onerror = (error) => {
          console.error('WebSocket 错误：', error);
          commit('SET_CONNECTED', false);
          dispatch('reconnect'); // 出现错误后重连
        };
      }
    },

    // 心跳检测
    startHeartbeat({ state }, ws) {
      heartbeatTimer = setInterval(() => {
        if (state.isConnected) {
          const senderId = localStorage.getItem('senderId');
          const heartbeatMessage = {
            senderId: senderId,
            receiverId: 0, // 心跳消息发送到服务端
            content: 'heartbeat'
          };
          const message = JSON.stringify(heartbeatMessage);
          ws.send(message);
          console.log('心跳消息发送成功');
        }
      }, 15000); // 每15秒发送一次心跳消息
    },

    // 重连机制
    reconnect({ dispatch, state }) {
      if (!state.isConnected) {
        setTimeout(() => {
          dispatch('initWebSocket'); // 重新连接WebSocket
        }, 3000); // 延迟3秒后重连
      }
    },

    // 关闭 WebSocket (在退出登录时调用)
    closeWebSocket({ state, commit }) {
      if (state.isConnected) {
        clearInterval(heartbeatTimer); // 停止心跳任务
        commit('SET_CONNECTED', false);
        localStorage.removeItem('wsShouldReconnect'); // 删除缓存中的wsShouldReconnect，防止重连
      }
    },

    // 初始化SET_SHOULD_RECONNECT
    initSetShouldReconnect({ commit }) {
      commit('SET_SHOULD_RECONNECT', true);
      console.log(localStorage.getItem('wsShouldReconnect'));
    }
  }
};

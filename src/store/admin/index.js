const state = {
    phoneId:localStorage.phoneId,
    token:localStorage.token
}
const mutations = {
    CHANGE_LOGIN_INFO(state, info) {
        state.phoneId = localStorage.phoneId = info.phoneId;
        state.token = localStorage.token = info.token;
    },
    // 退出登录
    OUT_LOGIN(state) {
        localStorage.clear();
        state.phoneId = state.token = null;
    },
}
export default {
    state,
    mutations,
}
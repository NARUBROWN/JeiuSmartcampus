import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate';

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            count: 1,
            user_data: {
                login_state: false,
                id: 0,
                name: "",
                stu_number: 0,
                department: "",
                stu_rank: ""
            }
        }
    },
    getters: {},
    mutations: {
        login(state, user_info) {
            state.user_data["login_state"] = true
            state.user_data["id"] = user_info["id"]
            state.user_data["name"] = user_info["name"]
            state.user_data["stu_number"] = user_info["stu_number"]
            state.user_data["department"] = user_info["department"]
            state.user_data["stu_rank"] = user_info["stu_rank"]
        },
        logout(state) {
            state.user_data["login_state"] = false
            state.user_data["id"] = 0
            state.user_data["name"] = ""
            state.user_data["stu_number"] = 0
            state.user_data["department"] = ""
            state.user_data["stu_rank"] = ""
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    plugins: [createPersistedState()]
})
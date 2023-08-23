import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

export default{
    namespaced: true,
    state(){
        return{
            isLoading: true,
            isEmpty: false,
            messageObject: null,
            messageRequestsList: [],
        }
    },
    mutations,
    actions,
    getters
}
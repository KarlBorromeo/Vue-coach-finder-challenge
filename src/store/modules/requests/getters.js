export default{
    isLoading(state){
        return state.isLoading
    },
    getList(state){
        return state.messageRequestsList
    },
    isEmpty(state){
        return state.isEmpty
    }
}
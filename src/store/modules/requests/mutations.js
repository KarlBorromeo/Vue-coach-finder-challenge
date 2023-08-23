export default{
    sampleFunc(){
        console.log("this is test mutations")
    },
    isLoading(state,bool){
        state.isLoading = bool
    },
    saveMessageObject(state,obj){
        state.messageObject = obj;
    },
    objectToList(state){
       const obj = state.messageObject
       Object.keys(obj).forEach(key=>{
        state.messageRequestsList.push(obj[key])
       })
    },
    resetList(state){
        state.messageRequestsList = []
    },
    isListEmpty(state,bool){
        state.isEmpty = bool
    }
}
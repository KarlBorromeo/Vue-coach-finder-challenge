export default{
    //just oding this func cause of pre-set data
    //solved bug when the contact component is reloaded directly
    coachListLocal(state){
        state.coaches = state.coachesHolderLocalData
    },
    setCoach(state){
        state.isCoach = false;
    },
    isLoading(state,bool){
        state.isLoading = bool
    },
    isError(state,bool){
        state.error = bool
    },
    showList(state,payload){
        state.coaches = []
        const stringData = JSON.stringify(state.coachesHolderLocalData)
        state.coaches = JSON.parse(stringData)
        if(payload.length>0){
            payload.forEach(element => {
            state.coaches.push(element)
        });
        }
        
        
    }
}
export default{
    coachList(state){
        return state.coaches
    },
    isCoach(state){
        return state.isCoach
    },
    filter(state){
        return state.filter
    },
    filterList(_,getters){
        const tempList = [];
       for(let coach of getters.coachList){
         let counter = 0;
        for(let filter of getters.filter){
           const index = coach.areas.findIndex(item => item == filter)
           if(index>=0){
            counter++;
           }
        }
        if(counter>0){
            tempList.push(coach)
        }
       }
       return tempList
    },
    isLoading(state){
        return state.isLoading
    },
    isError(state){
        return state.error
    }
}
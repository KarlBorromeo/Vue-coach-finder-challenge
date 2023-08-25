export default{
    addCoach(_,payload){
        fetch('https://vue-coach-finder-78c8c-default-rtdb.firebaseio.com/coaches.json',{
            method: 'POST',
            headers: {
                    'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                id: payload.id,
                firstName: payload.firstName,
                lastName: payload.lastName,
                areas: payload.areas,
                description: payload.description,
                hourlyRate: payload.hourlyRate
            }),
        }).catch(error => console.log(error));
    },

    async getCoachList(context){
        context.commit('isLoading',true)        
        const list = [];
        const response = await fetch('https://vue-coach-finder-78c8c-default-rtdb.firebaseio.com/coaches.json');      
        if(response.ok){
            const data = await response.json();            
            for(const id in data){
                list.push(data[id])
            }
            context.commit('showList',list)
            context.commit('isError',false)
        }else{   
            context.commit('isError',true)
        }
        
        context.commit('isLoading',false)
    }
}
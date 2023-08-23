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

    getCoachList(context){
        context.commit('isLoading',true)        
        const list = [];
        fetch('https://vue-coach-finder-78c8c-default-rtdb.firebaseio.com/coaches.json')
        .then(response => response.json())
        .then( data => {
            
            if(data != null){
                const keys = Object.keys(data);
                keys.forEach(key => {   
                    list.push(data[key])
                    context.commit('showList',data[key])
                })
            }     
                     
            context.commit('showList',list)
            context.commit('isLoading',false)
        })
        .catch(error => console.log(error))
    }
}
export default{
    requestMessage(_, payload){
        const messageDetails = {
            idCoach: payload.idCoach,
            emailSender: payload.emailSender,
            message: payload.message
        }

        //send data on the backend
        fetch('https://vue-coach-finder-78c8c-default-rtdb.firebaseio.com/messageRequest.json',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(messageDetails)
        }).then(console.log("response Successful")).catch((error)=> console.log(error))
    },

    getListMessage(context){
        context.commit('isLoading',true)
        context.commit('resetList')
        console.log('getListMessage Run')   
        fetch('https://vue-coach-finder-78c8c-default-rtdb.firebaseio.com/messageRequest.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            context.commit('isLoading',false)
                if(data === null || Object.keys(data).length === 0){
                    context.commit('isListEmpty',true)
                }else{
                    context.commit('isListEmpty',false)
                    context.commit('saveMessageObject',data)
                    context.commit('objectToList')  
                }
            })
        .catch(error => console.log(error))
    }
}
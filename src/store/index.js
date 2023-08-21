import {createStore} from 'vuex'
import coachesModule from './modules/coaches/index.js'


const store = createStore({
    modules:{
        coaches: coachesModule
    },
    state(){
        return{
            isDialogVisible: false,
        }
    },
    mutations:{
        //
    },
    actions:{
        // addCoach(_,payload){
        //     fetch('https://vue-coach-finder-78c8c-default-rtdb.firebaseio.com/coaches.json',{
        //         method: 'POST',
        //         headers: {
        //             'Content-Type' : 'application/json'
        //         },
        //         body: JSON.stringify({
        //             id: Date.now().toString(),
        //             firstName: payload.firstName,
        //             lastName: payload.lastName,
        //             area: payload.area,
        //             description: payload.description,
        //             hourlyRate: payload.hourlyRate
        //         }),
        //     }).catch(error => console.log(error));
        // }
    }
})


export default store;
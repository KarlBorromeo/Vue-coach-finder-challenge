export default{
    addCoach(state,payload){
        state.coaches.push(payload);
    },
    setCoach(state){
        state.isCoach = false;
    }
}
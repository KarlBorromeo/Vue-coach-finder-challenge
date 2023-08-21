export default{
    addCoach(context,payload){
        const obj = {
            id: payload.id,
            firstName: payload.firstName,
            lastName: payload.lastName,
            areas: payload.areas,
            description: payload.description,
            hourlyRate: payload.hourlyRate
        }
        context.commit('addCoach',obj);
    }
}
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
    namespaced:true,
    state(){
        return{
            isLoading: true,
            isCoach: true,
            filter: ['frontend','career'],
            coachesHolderLocalData: [
                  {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                      "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                  },
                  {
                    id: 'c3',
                    firstName: 'Karl',
                    lastName: 'Borromeo',
                    areas: ['frontend', 'backend'],
                    description:
                      'I am Karl Borromeo graduate of Bachelor of Computer Science. I am a full stack developer using modern tools and i want to share my knowledge and expertise to those who are willing to learn. Drop me a message!',
                    hourlyRate: 35
                  }],
            coaches:[]
        }
    },
    mutations,
    actions,
    getters,
}
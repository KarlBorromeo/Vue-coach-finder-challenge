<template>
<div>
  <filter-section></filter-section>
  <loading-screen v-if="isLoading"></loading-screen>
  <error-prompt v-if="isError && !isLoading"></error-prompt>
  <base-card class="container" v-if="!isLoading && !isError">
    <section>
        <base-button class="empty" @click="getCoachList">Refresh</base-button>
        <base-button v-if="isCoach" class="fill" @click="registerForm">Register as Coach</base-button>
    </section>
    <coach-list v-for="coach in coachList" :key="coach.id"
      :id="coach.id"
      :firstName='coach.firstName'
      :lastName='coach.lastName'
      :areas='coach.areas'
      :hourlyRate="coach.hourlyRate"
      ></coach-list>
  </base-card>
 </div>
</template>
<script>
import LoadingScreen from '@/components/UI/LoadingScreen.vue'
import FilterSection from '../filterSection.vue'
import CoachList from './coachList.vue'
import ErrorPrompt from '@/components/UI/ErrorPrompt.vue'
export default {
    components:{FilterSection, CoachList,LoadingScreen, ErrorPrompt },
    computed:{
        coachList(){
            // return this.$store.getters['coaches/coachList']
            return this.$store.getters['coaches/filterList']
        },
        isCoach(){
            return this.$store.getters['coaches/isCoach']
        },
        isLoading(){
            return this.$store.getters['coaches/isLoading']
        },
        isError(){
            return this.$store.getters['coaches/isError']
        }
    },
    methods:{
        registerForm(){
            this.$router.push('/createCoach');
        },
        getCoachList(){
            console.log('refresh methods')
            this.$store.dispatch('coaches/getCoachList');
        }
    },
    created(){
        this.getCoachList()
    }
}
</script>

<style scoped>
section{
    display: flex;
    justify-content: space-between;
    padding-bottom: .3rem;
}
</style>
<template>
  <filter-section></filter-section>
  <base-card class="container">
    <div>
        <base-button class="empty">Refresh</base-button>
        <base-button v-if="isCoach" class="fill" @click="registerForm">Register as Coach</base-button>
    </div>
    <coach-list v-for="coach in coachList" :key="coach.id"
      :id="coach.id"
      :firstName='coach.firstName'
      :lastName='coach.lastName'
      :areas='coach.areas'
      :hourlyRate="coach.hourlyRate"
      ></coach-list>
  </base-card>
</template>

<script>
import FilterSection from '../filterSection.vue'
import CoachList from './coachList.vue'
export default {
    components:{FilterSection, CoachList},
    computed:{
        coachList(){
            return this.$store.getters['coaches/filterList']
        },
        isCoach(){
            return this.$store.getters['coaches/isCoach']
        }
    },
    methods:{
        registerForm(){
            this.$router.push('/createCoach');
        }
    }
}
</script>

<style scoped>
div{
    display: flex;
    justify-content: space-between;
    padding-bottom: .3rem;
}
</style>
<template>
  <base-card class="container">
    <form @submit.prevent="addCoach">
        <h3>Register as a coach now!</h3>
        <label for="firstname">Firstname<span>*</span></label>
        <input id="firstname" type="text" v-model="firstName">
        
        <label for="lastname">Lastname<span>*</span></label>
        <input id="lastname" type="text" v-model="lastName">
        
        <label for="description">Description <span>(optional)</span></label>
        <textarea id="description" v-model="description"></textarea>

        <label for="rate">Hourly Rate<span>*</span></label>
        <input id="rate" type="number" v-model="hourlyRate">

        <label>Areas of Expertise<span>*</span></label>
        <section>
        <div>
            <label><input type="checkbox" v-model="area" value="frontend">Frontend Development</label>
        </div>
        <div>
            <label><input type="checkbox" v-model="area" value="backend">Backend Development</label>
        </div>
        <div>
            <label><input type="checkbox" v-model="area" value="career">Career</label>
        </div>
        </section>
        <div><base-button class="fill">Register</base-button></div>
    </form>
  </base-card>
  <dialog-form v-if="this.$store.state.isDialogVisible"></dialog-form>
</template>

<script>
import dialogForm from '../../dialogForm.vue'
export default {
  components: { dialogForm },
    data(){
        return{
            hourlyRate: null,
            firstName: null,
            lastName: null,
            description: null,
            area:[],
            dialog: false,        }
    },
    methods:{
        addCoach(){
            if( this.firstName === null ||
                this.lastName === null ||
                this.area === [] || 
                this.hourlyRate === null){
                    this.$store.state.isDialogVisible = true
                }else{
                this.$store.commit({
                    type: 'coaches/addCoach',
                    id: Date.now().toString(),
                    firstName: this.firstName,
                    lastName: this.lastName,
                    areas: this.area,
                    description: this.description,
                    hourlyRate: this.hourlyRate
                })
                this.$store.commit('coaches/setCoach')
                this.$router.replace('/coaches')
                }

        }
    },
}
</script>

<style scoped>

div > label{
    display: flex;
    align-items: center;
    font-size: x-small;
    font-weight: 400;
}
form{
    display: flex;
    flex-direction: column;
    gap: .3rem;
}
label{
    font-weight: bold;
    font-size: small;
}
textarea{
    min-height: 4rem;
}
span{
    color: rgba(255, 0, 0, 0.47);
    padding-left: 1px;
}
</style>
<template>
  <base-card class="container">
    <form @submit.prevent="addCoach">
        <h3>Register as a coach now!</h3>
        <label for="firstname">Firstname</label>
        <input id="firstname" type="text" v-model="firstName">
        
        <label for="lastname">Lastname</label>
        <input id="lastname" type="text" v-model="lastName">
        
        <label for="description">Description</label>
        <textarea id="description" v-model="description"></textarea>

        <label for="rate">Hourly Rate</label>
        <input id="rate" type="number" v-model="hourlyRate">

        <label>Areas of Expertise</label>
        <section>
        <div>
            <label><input type="checkbox" :name="area" value="frontend">Frontend Development</label>
        </div>
        <div>
            <label><input type="checkbox" :name="area" value="backend">Backend Development</label>
        </div>
        <div>
            <label><input type="checkbox" :name="area" value="career">Career</label>
        </div>
        </section>
        <div><base-button class="fill">Register</base-button></div>
    </form>
  </base-card>
</template>

<script>
export default {
    data(){
        return{
            hourlyRate: null,
            firstName: null,
            lastName: null,
            description: null,
            area:[],
        }
    },
    methods:{
        addCoach(){
            const obj = {
                id: Date.now().toString(),
                firstName: this.firstName,
                lastName: this.lastName,
                area: this.area,
                description: this.description,
                hourlyRate: this.hourlyRate
            }
            console.log(obj)
        }
    }
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
</style>
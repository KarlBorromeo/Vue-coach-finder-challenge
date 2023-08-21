<template>
  <base-card class="container">
    <h4>Find Your Coach</h4>
    
    <section>
        <span>
            <input type="checkbox" v-model="this.$store.state.coaches.filter" value="frontend" id="frontend">
            <label for="frontend">Frontend</label>
        </span>

        <span>
        <input type="checkbox" v-model="this.$store.state.coaches.filter" value="backend" id="backend">
        <label for="backend">Backend</label>
        </span>

        <span>
        <input type="checkbox" v-model="this.$store.state.coaches.filter" value="career" id="career">
        <label for="career">Career</label>
        </span>
    </section>
  </base-card>
</template>

<script>
export default {
    computed:{
        getFilter(){
            return this.$store.getter.getFilter
        }
    },
}
</script>

<style scoped>
label{
    font-weight: 100;
    font-size: x-small;
}
section{
    gap: .3rem;
    display: flex;
}
span{
    display: flex ;
    align-items: center;
}
h4{
    margin: .5rem 0 .3rem 0;
}
</style>
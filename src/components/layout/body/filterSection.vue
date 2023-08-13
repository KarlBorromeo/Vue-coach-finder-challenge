<template>
  <base-card class="container">
    <h4>Find Your Coach</h4>
    
    <section>
        <span>
            <input type="checkbox" v-model="aw" value="frontend" id="frontend">
            <label for="frontend">Frontend</label>
        </span>

        <span>
        <input type="checkbox" v-model="aw" value="backend" id="backend">
        <label for="backend">Backend</label>
        </span>

        <span>
        <input type="checkbox" v-model="aw" value="career" id="career">
        <label for="career">Career</label>
        </span>
    </section>
  </base-card>
</template>

<script>
export default {
    data(){
        return{
            aw: ['frontend'],
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
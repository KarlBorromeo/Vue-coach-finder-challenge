<template>
  <article class="container">
    <div class="innerContainer">
        <h3>Find a Coach</h3> 
        <section>
            <!-- <button>All Coches</button>
            <button>Requests</button> -->
            <router-link to="/coaches">All Coches</router-link>
            <!-- <router-link to="/aw">Requests</router-link> -->
        </section>
    </div>   
</article>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    background-color: blue;
    display: flex;
    justify-content: center;
}
.innerContainer{
    width: 85%;
    display: flex;
    justify-content: space-between;
}
h3{
    color: white;
}
section{
    display: flex;
    align-items: center;
    gap: 1rem;
}
a{
    text-decoration: none;
    background-color: transparent;
   
    padding: .5rem 1rem;
    color: rgba(255, 255, 255, 0.385);
}
.router-link-active{
     border: 1px solid rgba(255, 255, 255, 0.212);
}
</style>
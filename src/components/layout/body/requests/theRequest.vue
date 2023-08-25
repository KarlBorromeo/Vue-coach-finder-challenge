<template>
  <div>
  <loading-screen v-if="isLoading"></loading-screen>
  <h1 v-if="!isLoading && isEmpty">No Request Received</h1>
  <base-card v-if="!isLoading && !isEmpty">
    <header>
        <h2>Request Received</h2>
        <ul>
          <li v-for="item in getListRequests" :key="item">
            <section>
              <h4>{{ item.emailSender }}</h4>
              <p>{{ item.message }}</p>
            </section>
          </li>
        </ul>
        <!-- <button @click="showList">CLick me</button> -->
    </header>
    
  </base-card>
</div>
</template>

<script>
import LoadingScreen from '@/components/UI/LoadingScreen.vue'
export default {
  components: { LoadingScreen },
    methods:{
      getList(){
        this.$store.dispatch('requests/getListMessage')
      },
      //dummy
      // showList(){
      //   this.$store.commit('requests/showSMSList')
      // }
    },
    computed:{
      isLoading(){
        return this.$store.getters['requests/isLoading']
      },
      getListRequests(){
        return this.$store.getters['requests/getList']
      },
      isEmpty(){
        return this.$store.getters['requests/isEmpty']
      }
    },  
    created(){
      this.getList()
    }
}
</script>

<style scoped>
h2{
    text-align: center;
}
/* div{
    border: .5px solid black;
    width: 80%;
    margin: .5rem auto;
} */
ul{
   list-style: none;
   padding: 0;
}
section{
  border: 1px solid rgba(0, 0, 0, 0.371);
  margin: .5rem auto;
  width: 80%;
  border-radius: 3px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
h4,p{
  margin: 0;
}
h4{
  color: rgb(31, 31, 167);
}
h1{
  text-align: center;
}
</style>
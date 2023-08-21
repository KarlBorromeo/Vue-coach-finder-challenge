<template>
  <div>                                                                                                                                                             
  </div>
  <dialog open>
    <h4>Error Message</h4> 
    <p>Please complete all the details required. Input the desired inputs. Thank you!</p>
    <footer>
      <button @click="closeDialog">close</button>
    </footer>
  </dialog>
</template>

<script>
export default {
  methods:{
    closeDialog(){
      this.$store.state.isDialogVisible = false;
    }
  }
}
</script>

<style scoped>
dialog{
  position: absolute;
  top: 30vh;
  margin: auto;
  width: 50%;
}
h4{
   background-color: rgba(0, 0, 255, 0.358);
   margin: 0;
   padding: 5px 7px;
   color: red;
   text-align: center;
   letter-spacing: 5px; 
   font-weight: 900; 
}
dialog{
  padding: 0;
  border: .1px solid red;
  border-radius: 3px;
}
p{
  padding: 0 .5rem;
}
button{
  margin: 0 7px 3px;
  background-color: transparent;
}
div{
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 1px;
  background-color: rgba(84, 84, 78, 0.7);
}
</style>
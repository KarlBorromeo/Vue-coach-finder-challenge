<template>
    <base-card class="subContainer">
      <header>{{ firstName }} {{ lastName }}</header>
      <section>{{ hourlyRateText }}</section>
      <span v-for="area,index in areas" :key="area" :class="indexClass(index)">
          {{ area }}
      </span>
      <footer>
        <base-button class="empty" @click="contact">Contact</base-button>
        <base-button class="fill" @click="viewDetails">View Details</base-button>
      </footer>
    </base-card>
</template>

<script>
export default {
  props: ['id','firstName','lastName','areas','hourlyRate'],
  data(){
    return{
      colorIndex: ['span1','span2','span3'],
    }
  },
  computed:{
    hourlyRateText(){
      return '$'+ this.hourlyRate + '/hour'
    }
  },
  methods:{
    viewDetails(){
      this.$router.push('/coaches/'+this.id)
    },
    indexClass(index){
      console.log(index)
      return this.colorIndex[index];
    },
    contact(){
      this.$router.push('/coaches/'+this.id+'/contact')
    }
  }

}
</script>

<style scoped>
span{
  border-radius: 15px;
  padding: .3rem .5rem;
  text-transform: uppercase;
  margin-right: .3rem;
  font-size: small;
  color: white;
}
.span1{
  background-color: blue;
}
.span2{
  background-color: blueviolet;
}
.span3{
  background-color: rgb(217, 41, 173);
}
footer{
  display: flex;
  padding: .5rem 0;
  justify-content: end;
}
header,section,span,div{
  padding-bottom: .3rem;
}
header{
  font-weight: 900;
}
section{
  font-weight: 500;
  font-size: small;
}
</style>
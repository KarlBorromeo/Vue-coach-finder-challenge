<template>
  <base-card>
    <div>
      <h4>{{ fullname }}</h4>
      <p>{{ rate }}</p>
    </div>   
</base-card>

  <base-card>
  <div>
    <h4>Interested? Reach out now!</h4>
    <base-button class="fill" @click="contact">Contact</base-button>  
    <router-view></router-view>
  </div>
</base-card>

  <base-card>
  <div>
    <section>
        <span v-for="area,index in areas" :key="area.id" :class="indexClass(index)">
          {{ area }}
        </span>      
    </section>
    
    <p>
    {{ description }}
    </p>    
  </div>

</base-card>
</template>

<script>
export default {
  props:['id'],
  data(){
    return{
      data: this.$store.state.coaches.coaches,
      localData: null,
      colorIndex: ['span1','span2','span3']
    }
  },
  methods:{
    findObj(){
      const obj = this.data.find(item => item.id === this.id)
      this.localData = obj
      console.log(this.localData)
    },
    indexClass(index){
      console.log(index)
      return this.colorIndex[index];
    },
    contact(){
      this.$router.push('/coaches/'+this.id+'/contact')
    }
  },  
  computed:{
    fullname(){
      return this.localData.firstName +' '+ this.localData.lastName
    },
    rate(){
      return '$'+this.localData.hourlyRate+'/hour'
    },
    areas(){
      return this.localData.areas
    },
    description(){
      return this.localData.description
    }
  },
  created(){
    this.findObj()
  },

}
</script>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap:.7rem;
  padding: .5rem 0;
}
h4,p{
  margin: 0;
}
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
</style>
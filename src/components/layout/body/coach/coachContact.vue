<template>
  <base-card class="contactContainer">
    <div>
        
        <label for="email">Your E-Mail</label>
        <p v-if="errorEmail">please input some..</p>
        <input id="email" type="email" v-model="email">
        <label for="message">Message</label>
        <p v-if="errorMsg">please input some..</p>
        <textarea id="message" v-model="message"></textarea>
    </div>
    <section>
        <base-button class="fill" @click="sendRequestMessage">Send Message</base-button>
    </section>
    <section>
        
    </section>
  </base-card>
</template>

<script>
export default {
        data(){
            return{
                errorEmail: false,
                errorMsg: false,
                email: '',
                message: '',
            }
        },
        methods:{
            sendRequestMessage(){
                if(this.email.trim() != '' && this.message.trim() != ''){
                    const id = this.$route.params.id
                    const email= this.email
                    const message = this.message

                    this.$store.dispatch({
                        type: 'requests/requestMessage',
                        idCoach: id,
                        emailSender: email,
                        message: message
                    })
                    this.$router.replace('/requests')
                }else{
                    if(this.email == '' && this.message == ''){
                        this.errorEmail = true;
                        this.email = '';
                        this.errorMsg = true;
                        this.message = ''
                    }else if(this.email == ''){
                        this.errorEmail = true;
                        this.email = ''
                    }else{
                        this.errorMsg = true
                        this.message = ''
                    }
                }
            },
        },
        watch:{
            email(sample){
                if(sample.length>0){
                    this.errorEmail = false;
                }
            },
            message(sample){
                if(sample.length>0){
                    this.errorMsg = false;
                }
            }
        },
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    gap: .4rem;
    padding-bottom: .5rem;
}
section{
    display: flex;
    justify-content: center;
}
textarea{
    min-height: 4rem;
}
label{
    font-weight: 600;
}
p{
    margin: 0;
    color: red;
    font-weight: 200;
    font-size: x-small;

}
</style>
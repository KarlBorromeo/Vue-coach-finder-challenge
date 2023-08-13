<template>
  <base-card class="contactContainer">
    <div>
        
        <label for="email">Your E-Mail</label>
        <input id="email" type="email">
        <label for="message">Message</label>
        <textarea id="message"></textarea>
    </div>
    <section>
        <base-button class="fill">Send Message</base-button>
    </section>
    <section>
        
    </section>
  </base-card>
</template>

<script>
export default {

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
</style>
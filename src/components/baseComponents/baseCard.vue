<template>
  <article>
    <slot>

    </slot>
  </article>
</template>

<style scoped>
article{
    width: 75%;
    margin: 1rem auto;
    padding: .5rem;
    border: none;
    box-shadow: 0px 0px 3px .5px #DDBEBE;
    border-radius: 3px;
}
.subContainer{
    border: .5px solid purple;
    border-radius: 3px;
    width: 95%;
    margin:.5rem auto;
    padding: .5rem;
}
.contactContainer{
    width: 90%;
    margin: 1rem auto;
    padding: .5rem;
    border: none;
    box-shadow: 0px 0px 3px .5px #DDBEBE;
    border-radius: 3px;
}
</style>
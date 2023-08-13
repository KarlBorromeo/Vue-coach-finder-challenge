<template>
  <button>
    <slot>

    </slot>
</button>
</template>

<style scoped>
button{
    border-radius: 15px;
    padding: .5rem .8rem;
    font-size: x-small;
    margin-right: .3rem;
}
button:hover{
    cursor: pointer;
}
.fill{
    background-color: purple;
    color: white;
    border: none;
}
.empty{
    background-color:white;
    border: .5px solid purple;
    color: purple;
}
</style>
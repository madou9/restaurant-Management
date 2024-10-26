<template>
  <RouterView />
</template>

<script> 
    export default {
        name: 'App'
    }
</script>

<style>
.signup-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.logo {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

h1 {
    margin: 20px 0;
}

.register input , .login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
  border-radius: 5px;
}

.register button , .login button {
    width: 320px;
    height: 40px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid skyblue;
    border-radius: 5px;
    background-color: skyblue;
    color: white;
    font-size: 15px;
    cursor: pointer;
}
</style>


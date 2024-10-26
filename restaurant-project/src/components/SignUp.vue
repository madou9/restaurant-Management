<template>
    <img alt="hero" class="logo" src="../assets/hero.png"/>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name"/>
        <input type="text" placeholder="Enter Email"/>
        <input type="password" placeholder="Enter Password"/>
        <button>Sign Up</button>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
}
</script>

<style>
h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px 0;
}

.logo {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.register input{
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid skyblue;
    border-radius: 5px;
}

.register button{
    width: 100%;
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
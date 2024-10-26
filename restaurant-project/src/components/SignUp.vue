<template>
    <img alt="hero" class="logo" src="../assets/hero.png"/>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Sign Up</button>
    </div>
</template>
<script>
 import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            }); 
            console.log(result);
            if (result.status === 201) {
                alert('User created successfully');
                localStorage.setItem('user-info', JSON.stringify(result.data));
            }
        }
}
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
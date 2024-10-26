<template>
    
    <div class="signup-container">
        <img alt="hero" class="logo" src="../assets/hero.png"/>
        <h1>Login</h1>
        <div class="login">
            <!-- <input type="text" v-model="name" placeholder="Enter Name" /> -->
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="login">Login</button>
            <p>
                <router-link to="/sign-up">Don't have an account ? sign up</router-link> 
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
            };
        },
        methods:{
           async login(){
                let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
                console.warn(result)
                if (result.status === 200 && result.data.length > 0) {
                        localStorage.setItem('user-info', JSON.stringify(result.data[0])); // Save user info in local storage
                        this.$router.push({ name: 'Home' }); // Redirect to Home page
                        this.email = '';
                        this.password = '';
                    }
            }
        },
        mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'Home' });
        }
    }
    }
</script>

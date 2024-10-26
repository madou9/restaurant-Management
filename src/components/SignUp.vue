<template>
    <div class="signup-container">
        <img alt="hero" class="logo" src="../assets/hero.png"/>
        <h1>Sign Up</h1>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="signUp">Sign Up</button>
        </div>
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
            if (!this.name || !this.email || !this.password) {
                alert("Please fill in all fields");
                return;
            }

            try {
                let result = await axios.post('http://localhost:3000/users', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                if (result.status === 201) {
                    localStorage.setItem('user-info', JSON.stringify(result.data)); // Save user info in local storage
                    this.$router.push({ name: 'Home' }); // Redirect to Home page
                    this.name = '';
                    this.email = '';
                    this.password = '';
                }
            } catch (error) {
                console.error("Error signing up:", error);
                alert("There was an issue signing up. Please try again.");
            }
        }
    },
    // Redirect to Home page if user is already logged in
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'Home' });
        }
    }
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

.register input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid skyblue;
    border-radius: 5px;
}

.register button {
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

<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="Add">Add restaurant </router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        methods: {
            logout() {
                localStorage.clear();
                this.$router.push({ name: 'Login' });
            }
        }
    }
</script>

<style>
    .nav {
        background-color: #333;
        overflow: hidden;
        width: 100%;              /* Full width */
    }

    .nav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        font-size: 17px;
        padding: 14px 16px;
        text-decoration: none;
    }

    .nav a:hover {
        background-color: #ddd;
        color: black;
    }
</style>
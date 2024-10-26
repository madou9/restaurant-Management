<template>
    <Header />
    <h1>
        Hello {{ name }}, Welcome to our Restaurant website
    </h1>
</template>

<script>
import Header from './Header.vue';
export default {
    name: 'Home',
    data() {
        return {
            name: "",
        };
    },
    components: {
        Header
    },
    mounted() {
        // Redirect to SignUp if no user info is found in localStorage
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {  // Check if user-info does NOT exist
            this.$router.push({ name: 'SignUp' });
        }
    },
}
</script>

<template>
    <Header />
    <h1>
        Hello User, Welcome to update Restaurant website
    </h1>
</template>

<script>
import Header from './Header.vue';
export default {
    name: 'Update',
    components: {
        Header
    },
    mounted() {
        // Redirect to SignUp if no user info is found in localStorage
        let user = localStorage.getItem('user-info');
        if (!user) {  // Check if user-info does NOT exist
            this.$router.push({ name: 'SignUp' });
        }
    },
}
</script>

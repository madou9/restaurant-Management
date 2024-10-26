<template>
    <h1>
        Hello user, Welcome to our restaurant website
    </h1>
</template>

<script>
export default {
    name: 'Home',
    mounted() {
        // Redirect to SignUp if no user info is found in localStorage
        let user = localStorage.getItem('user-info');
        if (!user) {  // Check if user-info does NOT exist
            this.$router.push({ name: 'SignUp' });
        }
    },
}
</script>

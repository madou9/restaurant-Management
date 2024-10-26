<template>
    <Header />
    <h1>
        Hello User, Welcome to Add Restaurant website
    </h1>
    <form class="add">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" />
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" />
        <input type="text" v-model="restaurant.address" placeholder="Enter Address" />
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue';
export default {
    name: 'Add',
    components: {
        Header
    },
    data ()
    {
        return {
            restaurant:{
                name: '',
                contact: '',
                address: ''
            },
        }
    },
    methods:{
        addRestaurant(){
            console.warn(this.restaurant);
        }
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

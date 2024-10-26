<template>
    <Header />
    <h1>
        Hello User, Welcome to update Restaurant website
    </h1>
    <form class="add">
        <input type="text" v-model="restaurant.name" placeholder="Enter Name" />
        <input type="text" v-model="restaurant.contact" placeholder="Enter Contact" />
        <input type="text" v-model="restaurant.address" placeholder="Enter Address" />
        <button type="button" v-on:click="updateRestaurant">Update new Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: 'Update',
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
       async updateRestaurant(){
        let result = await axios.put('http://localhost:3000/restaurants/' + this.$route.params.id, {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            });
            if (result.status === 200) {
                this.restaurant.name = '';
                this.restaurant.contact = '';
                this.restaurant.address = '';
                this.$router.push({ name: 'Home' });
            }
        }
    },
    async mounted() {
        // Redirect to SignUp if no user info is found in localStorage
        let user = localStorage.getItem('user-info');
        if (!user) {  // Check if user-info does NOT exist
            this.$router.push({ name: 'SignUp' });
        }
        let result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id);
        this.restaurant = result.data;
        // console.warn("result", result.data);
    },
}
</script>

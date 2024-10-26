<template>
    <Header />
    <h1>
        Hello {{ name }}, Welcome to our Restaurant website
    </h1>
    
    <!-- Conditional rendering for empty data -->
    <div v-if="restaurants.length > 0">
        <table class="restaurant-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in restaurants" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.contact }}</td>
                    <td>{{ item.address }}</td>
                    <td>
                        <router-link :to="'/update/' + item.id">Update</router-link>
                        <button v-on:click="deleteRestaurant(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <p v-else class="no-data-message">No restaurants available to display.</p>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

export default {
    name: 'Home',
    data() {
        return {
            name: "",
            restaurants: [],
        };
    },
    components: {
        Header
    },
    methods:{
        async deleteRestaurant(id){
            let result = await axios.delete('http://localhost:3000/restaurants/' + id);
            console.warn(result);
            if (result.status === 200) {

                this.loadData();
            }
        },
        async loadData(){
            // Redirect to SignUp if no user info is found in localStorage
        let user = localStorage.getItem('user-info');
        if (user) {
            this.name = JSON.parse(user).name;
        } else {
            this.$router.push({ name: 'SignUp' });
            return;
        }

        // Fetch restaurant data
        try {
            let result = await axios.get('http://localhost:3000/restaurants');
            console.warn(result);
            this.restaurants = result.data;
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
        }
    },
    async mounted() {
        this.loadData();
    },
}
</script>

<style>
h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #2c3e50;
}

.restaurant-table {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-collapse: collapse;
    text-align: left;
    font-size: 16px;
}

.restaurant-table th, .restaurant-table td {
    padding: 12px 15px;
    border: 1px solid #ddd;
}

.restaurant-table th {
    background-color: #f2f2f2;
    font-weight: bold;
    color: #333;
}

.restaurant-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

.no-data-message {
    text-align: center;
    font-size: 18px;
    color: #777;
    margin-top: 20px;
}
</style>

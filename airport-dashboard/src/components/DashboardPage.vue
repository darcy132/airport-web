<template>
  <div>
    <h2>Dashboard</h2>
    <p>Welcome to your dashboard!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      userData: null
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const token = localStorage.getItem('jwt_token');
        const response = await axios.get('https://yourapi.com/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.userData = response.data;
      } catch (error) {
        console.error('Error fetching user data', error);
        this.logout();
      }
    },
    logout() {
      localStorage.removeItem('jwt_token');
      this.$router.push('/');
    }
  }
};
</script>

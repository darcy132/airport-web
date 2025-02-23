<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://yourapi.com/auth/login', {
          username: this.username,
          password: this.password,
        });

        // Store the JWT token in localStorage
        localStorage.setItem('jwt_token', response.data.token);

        // Redirect to the dashboard
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login failed', error);
        alert('Invalid credentials');
      }
    }
  }
};
</script>

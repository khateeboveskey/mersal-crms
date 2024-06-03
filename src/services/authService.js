import axios from './axiosConfig';

class AuthService {
  async login(credentials) {
    try {
      const res = await axios.post('/login', JSON.stringify(credentials));
      if (!res.data.error) {
        const AUTH_TOKEN = res.data.token;
        localStorage.setItem('AUTH_TOKEN', AUTH_TOKEN);
        location.reload();
      } else {
        return res.data;
      }
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await axios.post('/logout', null);
      localStorage.removeItem('AUTH_TOKEN');
      location.reload();
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  }
}

export default new AuthService();

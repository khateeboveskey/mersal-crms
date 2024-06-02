import axios from 'redaxios';

const REQUEST_OPTIONS = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
  },
};

class AuthService {
  async login(credentials) {
    try {
      const res = await axios.post('/login', JSON.stringify(credentials), REQUEST_OPTIONS);
      return res.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await axios.post('/logout', null, REQUEST_OPTIONS);
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  }
}

export default new AuthService();

import axios from 'axios';

const apiClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  postEmail(emailData = {}) {
    return apiClient.post('/api/post-email', emailData);
  },

  postForm(formData = {}) {
    return apiClient.post('/api/post-form', formData);
  },
};

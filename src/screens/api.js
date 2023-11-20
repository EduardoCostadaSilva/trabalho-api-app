import axios from 'axios';

const apiUrl = 'https://real-time-amazon-data.p.rapidapi.com/search';
const apiKey = '2dab2fb1afmshc878bf9d1752b74p162dcejsn5cf9038bd8cd';

const api = {
  search: async (query) => {
    try {
      const response = await axios.get(apiUrl, {
        params: { query },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default api;

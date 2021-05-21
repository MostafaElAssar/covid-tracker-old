import axios from 'axios';

const DiseaseApi = axios.create({
  baseURL: 'https://disease.sh/v3',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default DiseaseApi;
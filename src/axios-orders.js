import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-the-burger-c00d5.firebaseio.com'
})

export default instance;
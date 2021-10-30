import Axios from 'axios'
// const axios = Axios.create({
//     baseURL:'http://localhost:3050'
// })

const axios = Axios.create({
    baseURL: process.env.REACT_APP_BACKEND
});

export default axios
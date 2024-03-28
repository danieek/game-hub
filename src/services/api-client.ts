import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '65a599862c5d47aaba018e2f000a1d61'
    }
})
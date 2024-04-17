import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api/games',
    params:{
        key : '500283bc0cbd44a0a878c0e3a70f5028'
    }
})
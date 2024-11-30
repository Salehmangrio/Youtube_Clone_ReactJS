import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {    
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
    }
};

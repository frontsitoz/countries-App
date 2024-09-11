import axios from "axios";

const pixabayInstance = axios.create({
    baseURL: "https://pixabay.com/api/",
    params:{
        key:"45896069-ae916ddbb0007c3d299636492",
        image_type:"photo",
        safesearch: true,
    }
})

export default pixabayInstance;

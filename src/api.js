//import axios
import axios from 'axios';



const searchImages = async(searchPic) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 9nlqU4O0rf2aAQC6z-KJVVuutWLXlx-y2dPkNvRK8ho'
        },
        params: {
            query: searchPic
            
        }
    });
    
    //console.log(response.data.results);
    return response.data.results;

}

export default searchImages;
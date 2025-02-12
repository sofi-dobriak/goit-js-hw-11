import axios from 'axios';

function searchImages(imageTitle) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '48725247-1ad674d1a078eddb17b21f3f8';

  return axios
    .get(BASE_URL, {
      params: {
        q: imageTitle,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('API Request Error:', error);
      throw error;
    });
}

export default searchImages;

import axios from 'axios';

//Clave Api
// LQQjyG5tNOv9zTGEVVNeuBArxZzcSgzEVNpPWOJQ4BdEEIzDLHkwHWM2

export const getImages = async (searchTerm = 'spizella-pusilla') => 
  await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
        Authorization: "LQQjyG5tNOv9zTGEVVNeuBArxZzcSgzEVNpPWOJQ4BdEEIzDLHkwHWM2",
    }
  });
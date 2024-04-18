import axios from 'axios'
const baseUrl = `https://api.openweathermap.org/data/2.5`
const api_key = import.meta.env.VITE_OPEN_WEATHER

const getWeather = (city) => {
  const request = axios.get(`${baseUrl}/weather?q=${city}&appid=${api_key}`)
  console.log(api_key)
  return request.then(response => response.data)
}

export default { 
  getWeather: getWeather
}
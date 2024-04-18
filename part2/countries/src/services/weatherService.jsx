import axios from 'axios'
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
const api_key = import.meta.env.OPEN_WEATHER

const getWeather = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { 
  getWeather: getWeather
}
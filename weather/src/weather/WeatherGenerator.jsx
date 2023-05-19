import axios from "axios";
import { useContext, useEffect } from "react";
import Context from "./Context";

const WeatherGenerator = () => {

	const getWeather = useContext(Context);
	const setWeather = getWeather.setWeather;
	const country = getWeather.country;
	const API = `https://api.weatherapi.com/v1/current.json?key=ce971f1350ae424f8e953048231905&q=${country}&aqi=no`

	const API_KEY = "ce971f1350ae424f8e953048231905"
	useEffect(() => {
			const fetchWeather = async () => {
				try {
					const response = await axios({
						method: "GET",
						url: API,
						headers: {
							Authorization: `bearer ${API_KEY}`
						}
					})
					setWeather(response.data)
				} catch (e) {
					console.log(e.message)
				}
			}
			fetchWeather()
	}, [API, setWeather, country])
}


export default WeatherGenerator
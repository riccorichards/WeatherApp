import { useState } from "react"
import WeatherGenerator from './WeatherGenerator';
import Search from './Search';
import ButtonSearch from './ButtonSearch';
import Context from "./Context";
import { FooterDiv } from "./styleComponents/FooterDiv";
import { HearderDiv } from './styleComponents/HeaderDiv';
import { WeatherItems } from './styleComponents/WeatherItems';
import { Temperature } from './styleComponents/Temperature';

const Weather = () => {

	const [weather, setWeather] = useState(null)
	const [inputValue, setInputValue] = useState("")
	const [country, setCountry] = useState("tbilisi")
	const values = { weather, setWeather, inputValue, setInputValue, country, setCountry }

	return (
		<Context.Provider value={values}>
			<WeatherGenerator />
			<HearderDiv>
				<Search />
				<ButtonSearch />
			</HearderDiv>
			{weather && <WeatherItems>
				<p>{weather.location.name}</p>
				<pre>{weather.location.country}</pre>
				<Temperature>{weather.current.temp_c}°</Temperature>
				<h3><i>{weather.current.condition.text}</i></h3>
				<img src={weather.current.condition.icon} alt={weather.current.condition.text} />
			</WeatherItems>}
			<FooterDiv>
				{weather &&
					<div><pre><i>last updated</i>: {weather.current.last_updated}</pre></div>
				}
			</FooterDiv>
		</Context.Provider>
	)
}

export default Weather

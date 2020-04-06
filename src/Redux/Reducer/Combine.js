import { combineReducers } from 'redux';
import TodayWeather from './TodayWeather';

const rootReducer = combineReducers({
    TodayWeatherStatus: TodayWeather
})
export default rootReducer;
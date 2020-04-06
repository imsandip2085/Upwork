import { TodayWeatherRequest, TodayWeatherSuccess, TodayWeatherError } from "./index";
import apiRequest from '../../service/apicall';
var data;
export function TodayWeatherAction(city, country, appId) {
    return async function (dispatch, getState) {
        try {
            let error;
            dispatch(TodayWeatherRequest({ isLoading: true }));
            data = await apiRequest(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`,
                "get",
                {},
                {}
            );
            if (data) {
                dispatch(TodayWeatherSuccess({ response: data }));
            }
        } catch (error) {
            dispatch(TodayWeatherError({ error: error.response.data }));
        }
    }
}
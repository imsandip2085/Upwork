import {createAction } from 'redux-actions';
import * as constant from '../Constant';

export const TodayWeatherRequest = createAction(constant.TodayWeather_Request);
export const TodayWeatherSuccess = createAction(constant.TodayWeather_Success);
export const TodayWeatherError = createAction(constant.TodayWeather_Error);
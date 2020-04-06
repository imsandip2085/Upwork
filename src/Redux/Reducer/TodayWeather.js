import * as constant from '../Constant';

let initialState = {
    isLoading: false
}
const TodayWeather = (state = initialState, action) => {
    switch (action.type) {
        case constant.TodayWeather_Request:
            return {

                isLoading: true
            };
        case constant.TodayWeather_Success:
            return {

                isLoading: false,
                response: action.payload.response
            };
        case constant.TodayWeather_Error:
            return {

                isLoading: false,
                error: action.payload.error
            };
        default:
            return {
                ...state
            };
    }
}
export default TodayWeather;
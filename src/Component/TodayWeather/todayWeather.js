import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Clouds from './Clouds';
import Temperature from './Temperature';
import Humidity from './Humidity';
import CountryAndCity from './CountryAndCity';
import { connect } from "react-redux";
import { TodayWeatherAction } from '../../Redux/Action/ToayWeather';
import { log } from 'util';

class TodayWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: " ",
            country: " ",
            appId: 'c2f6ea0674c48c22a91d57ec48d65d5a',
            tempMin: 0,
            tempMax: 0,
            Humidity: 0,
            description: ''
        }
    }
    handleChangeCity = (e) => {
        this.setState({ city: e.target.value })
    }
    handleChangeCountry = (e) => {
        this.setState({ country: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.city != "" && this.state.country != "") {
            this.props.TodayWeatherRequest(this.state.city, this.state.country, this.state.appId);
        }
        this.setState({ tempMin: '' })
        this.setState({ tempMax: '' })
        this.setState({ Humidity: '' })
        this.setState({ description: '' })
    }

    componentDidUpdate(preProps, error) {
        const { todayWeatherStatus } = this.props;
        if (todayWeatherStatus.response !== preProps.todayWeatherStatus.response && todayWeatherStatus.response) {
            var tempMinCelsius = Math.floor(todayWeatherStatus.response.main.temp_min - 273.15);
            var tempMaxCelsius = Math.floor(todayWeatherStatus.response.main.temp_max - 273.15);
            var Humidity = todayWeatherStatus.response.main.humidity;
            var description = todayWeatherStatus.response.weather[0].description;
            this.setState({ tempMin: tempMinCelsius })
            this.setState({ tempMax: tempMaxCelsius })
            this.setState({ Humidity: Humidity })
            this.setState({ description: description })
            this.setState({ city: "" });
            this.setState({ country: "" });

        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={3} md={3}>
                        <ul>
                            <Link to="/dataanalysis">
                                <a href="#"><li>Data Analysis</li></a>
                            </Link>
                            <Link to="/todayWeather">
                                <a href="#"><li>Today's Weather</li></a>
                            </Link>
                        </ul>
                    </Col>
                    <Col lg={9} md={9}>
                        <div>
                            <p className="headDataAnalysis">Today's Weather</p><hr />
                            <div>
                                {this.props.todayWeatherStatus.error
                                    ? (
                                        <h2 style={{ color: "red" }}>{this.props.todayWeatherStatus.error.message}</h2>
                                    ) : null}
                            </div>
                            <CountryAndCity
                                city={this.state.city}
                                country={this.state.country}
                                handleChangeCity={this.handleChangeCity}
                                handleChangeCountry={this.handleChangeCountry}
                                handleSubmit={this.handleSubmit}
                            />
                            <Clouds
                                description={this.state.description}
                            />
                            <Temperature
                                tempMin={this.state.tempMin} tempMax={this.state.tempMax}
                            />
                            <Humidity
                                Humidity={this.state.Humidity}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        todayWeatherStatus: state.TodayWeatherStatus
    };
};
const mapDispatchToProps = dispatch => ({
    TodayWeatherRequest: (city, country, appId) => dispatch(TodayWeatherAction(city, country, appId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodayWeather);

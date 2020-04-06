import React from 'react';
import Home from './Component/Home/Home';
import DataAnalysis from './Component/DataAnalysis/dataAnalysis'
import TodayWeather from './Component/TodayWeather/todayWeather'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dataanalysis" component={DataAnalysis} />
                    <Route path="/todayWeather" component={TodayWeather} />
                </Switch>
            </Router>
        )
    }
}

export default Routing;
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Chart from './Chart/Chart';
import Graph from './Graph/Graph';
import { Link } from 'react-router-dom';

class DataAnalysis extends React.Component {
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
                            <p className="headDataAnalysis">Data Analysis</p><hr />
                        </div>
                        <Chart />
                        <Graph />
                    </Col>
                </Row>
            </div>

        )
    }
}

export default DataAnalysis

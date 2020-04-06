import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={3}>
                        <ul>
                            <Link to="/dataanalysis">
                                <li><a href="#">Data Analysis </a></li>
                            </Link>
                            <Link to='/todayWeather'>
                                <li><a href="#">Today's Weather </a></li>
                            </Link>
                        </ul>
                    </Col>
                    <Col xs={9}>

                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home;

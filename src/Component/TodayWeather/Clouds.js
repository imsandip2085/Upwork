import React from 'react';
import { Row, Col } from 'react-bootstrap';
import cloud from '../../cloud.png';
import sun from '../../sun.png';
import rain from '../../rain.png';


class Clouds extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={6} md={6}>
                        {(this.props.description == 'clear sky') ? <img src={sun} className=' justify-content-center' width="150" height="150" alt="sun" />
                            : (this.props.description == 'light rain') ? <img src={rain} width="150" height="150" alt="rain" />
                                : (this.props.description == 'scattered clouds') ? <img src={cloud} width="150" height="150" alt="cloud" />
                                    : (this.props.description == 'haze') ? <img src={sun} width="150" height="150" alt="sun" />
                                        : <h2>None</h2>}
                    </Col>
                    <Col lg={6} md={6}>
                        <h2 style={{ fontSize: "80px" }}>Clouds</h2>
                        <p style={{ fontSize: "30px" }}>overcast clouds</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Clouds;
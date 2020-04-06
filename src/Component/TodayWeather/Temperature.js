import React from 'react';
import { Row, Col } from "react-bootstrap"


class Temperature extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col lg={10}>
                                <h4>Temperature : <span>{this.props.tempMin}˚Ç ~  {this.props.tempMax}˚Ç</span></h4>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
            </div>
        )
    }
}
export default Temperature;
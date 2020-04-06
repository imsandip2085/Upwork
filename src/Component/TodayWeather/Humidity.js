import React from "react"
import { Row, Col } from "react-bootstrap"

class Humidity extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col lg={6}>
                                <h4>Humidity : {this.props.Humidity}% </h4>
                            </Col>
                            <Col lg={6}></Col>
                        </Row>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
            </div>
        )
    }
}
export default Humidity;
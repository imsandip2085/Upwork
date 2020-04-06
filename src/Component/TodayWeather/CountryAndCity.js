import React from "react";
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';

class CountryAndCity extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg={1.5} md={1.5}>
                        <h5 className='ml-3'>City </h5>
                    </Col>
                    <Col lg={4} md={4}>
                        <InputGroup className="mb-4 ml-3">
                            <FormControl
                                type="text"
                                value={this.props.city}
                                onChange={this.props.handleChangeCity}
                                placeholder="City....."
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={1.5} md={1.5}>
                        <h5 className='ml-3'>Country </h5>
                    </Col>
                    <Col lg={4} md={4}>
                        <InputGroup className="ml-3 mb-3">
                            <FormControl
                                type="text"
                                value={this.props.country}
                                onChange={this.props.handleChangeCountry}
                                placeholder="Country....."
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={1} md={1}>
                        <Button onClick={this.props.handleSubmit}>Submit</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default CountryAndCity;
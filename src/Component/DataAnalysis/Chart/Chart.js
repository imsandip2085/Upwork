import React from 'react';
import data from '../../../data.json';
import { Table } from 'react-bootstrap'

class Chart extends React.Component {
    render() {
        return (
            <div>
                <Table striped bordered hover style={{ width: '100%' }} className="table" >
                    <thead style={{ background: "#ccccb3" }}>
                        <tr>
                            <th>Year</th>
                            <th>Man</th>
                            <th>Female</th>
                        </tr>
                    </thead>
                    {data.map((val) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{val.year}</td>
                                    <td>{val.male}</td>
                                    <td>{val.female}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        )
    }
}
export default Chart;
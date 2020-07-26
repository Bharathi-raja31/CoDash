import * as React from 'react';

// Mock Data
import { itemMainList, filterItem } from '../constants/MockData';

// Bootstrap
import { Form, Accordion, Card } from 'react-bootstrap';

// Animation
import FadeAnimation from 'react-reveal/Fade';

// Asset
const arrow = require('../assets/img/arrowup.svg');


export default class SelectItemWidget extends React.Component {

    render() {

        return (
            <FadeAnimation bottom duration={1000} delay={400}>
                <div className="widget select-item">
                    <ul className="checkbox-items">
                        {
                            itemMainList.map((row, key) =>
                                <li key={`${key}`}>
                                    <Form.Group controlId={`mainlist-${key}`}>
                                        <Form.Check type="checkbox" label={row.name} />
                                        <span className="count">({row.count})</span>
                                    </Form.Group>
                                </li>
                            )
                        }
                    </ul>
                    <Accordion className="filter-items" defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Filter Items
                            <img className="arrow" alt="arrowUp" src={arrow} />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <ul className="checkbox-items">
                                    {
                                        filterItem.map((row, key) =>
                                            <li key={`${key}`}>
                                                <Form.Group controlId={`filterlist-${key}`}>
                                                    <Form.Check type="checkbox" label={row.name} />
                                                    <span className="count">({row.count})</span>
                                                </Form.Group>
                                            </li>
                                        )
                                    }
                                </ul>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </FadeAnimation>
        );
    }
}

import * as React from 'react';

// Bootstrap
import { Form } from 'react-bootstrap';

// Mock Data 
import { serachSelectedItem } from '../constants/MockData';

// Animation
import FadeAnimation from 'react-reveal/Fade';

// Image
const close = require('../assets/img/close.png');


export default class SearchWidget extends React.Component {

    render() {
        return (
            <FadeAnimation bottom duration={300} delay={200}>
                <div className="widget search">
                    <div className="search-inner">
                        <Form.Control placeholder="Search here" />
                    </div>
                    <ul className="tags">
                        {
                            serachSelectedItem.map((row, key) =>
                                <li key={key} className="tag">
                                    <button>
                                        <span>{row}</span>
                                        <img alt="close" src={close} />
                                    </button>
                                </li>
                            )
                        }
                        <li className="clear">
                            <button className="btn-plain">
                                Clear All
                        </button>
                        </li>
                    </ul>
                </div>
            </FadeAnimation>
        );
    }
}

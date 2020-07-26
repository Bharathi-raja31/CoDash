import * as React from 'react';

// Mock Data 
import { listItemData, status } from '../constants/MockData';

// Progressive Chart
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

// Animation
import FadeAnimation from 'react-reveal/Fade';

// Image
const ViewsGraphic = require('../assets/img/content/graphic.svg');


export default class ListItem extends React.Component {
    render() {
        return (
            <>
                {
                    listItemData.map((row, key) =>
                        <FadeAnimation key={key} bottom duration={500} delay={600 * key}>
                            <div className="card">
                                <div className="card-media">
                                    <div className="card-media-inner">
                                        <img alt="Card Media" src={row.listingType} />
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-content-head">
                                        <h4 className="title">
                                            {row.title}
                                            <span>Subtitle: {row.subtitle}</span>
                                        </h4>
                                        <div className="views">
                                            <img alt="Views" src={ViewsGraphic} />
                                            <span>{row.views}</span>
                                        </div>
                                        <div className="action">
                                            <button className="btn-plain"><img alt="Views" src={status[row.status]} /></button>
                                        </div>
                                    </div>
                                    <div className="card-content-body">
                                        <p>Description: {row.desc} </p>
                                    </div>
                                    <div className="card-content-foot">
                                        <ul className="tags">
                                            {
                                                row.tags.slice(0, 5).map((tagItem, key) =>
                                                    <li key={key} className="tag"><button>{tagItem}</button></li>
                                                )
                                            }
                                            <li className="tag plain">+{row.tags.length - 5} more Datalist</li>
                                        </ul>
                                        <ul className="users">
                                            {
                                                row.people.slice(0, 3).map((peopleItem, key) =>
                                                    <li key={key} > <img alt="User" src={peopleItem} /></li>

                                                )
                                            }
                                            <li className="tag plain">+{row.people.length - 3}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-score">
                                    <div className="card-score-inner">
                                        <CircularProgressbar
                                            value={row.score}
                                            text={`${row.score}%`}
                                            styles={buildStyles({
                                                pathTransitionDuration: 0.5,
                                                pathColor: row.chartColor,
                                                textColor: row.textColor,
                                                trailColor: '#edf2f4',
                                                backgroundColor: '#fff',
                                            })}
                                        />
                                        <label>Chart Score</label>
                                    </div>
                                </div>
                            </div>
                        </FadeAnimation>
                    )
                }
            </>
        );
    }
}

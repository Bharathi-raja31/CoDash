import * as React from 'react';

// Bootstrap
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Components
// import Loader from '../components/Loader';

// UI Components
import SearchWidget from '../components/SearchWidget';
import SelectItemWidget from '../components/SelectItemWidget';
import ListItem from '../components/ListItem';

export default class Body extends React.Component {
  ps = new PerfectScrollbar('#container', {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
  });

  render() {
    return (
      <div className="page-wrap">
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Page Title</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <div className="page-container">
          <div className="page-inner-wrap">
            <aside className="page-aside">
              <div className="page-aside-inner">
                <SearchWidget />
                <PerfectScrollbar className="widget scrollbar"
                  onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}
                >
                  <SelectItemWidget />
                </PerfectScrollbar>
              </div>
            </aside>
            <div className="page-content">
              <div className="page-content-inner">
                <ListItem />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

import * as React from 'react';

// Bootstrap
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

// Components
import Loader from '../components/Loader';

// UI Components
import Aside from '../components/Aside';
import ListItem from '../components/ListItem';

export default class Body extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.isLoading = setTimeout(() => { this.setState({ isLoading: false }) }, 1500);
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />
    }
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
            <Aside />
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

import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Col,
  Button,
} from 'reactstrap';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';


import PropertyForm from './FormData/PropertyFrom';
import UnitForm from './FormData/UnitForm';

import classnames from 'classnames';

class CreateProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
  }

  updateProperty(values, id=1){
    console.log(values)
    this.toggleTab(id)
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      if (tab >= 1 && tab <= 3) {
        this.setState({
          activeTab: tab,
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div
                      id="addproduct-nav-pills-wizard"
                      className="twitter-bs-wizard"
                    >
                      <Nav pills justified className="twitter-bs-wizard-nav">
                        <NavItem>
                          <NavLink
                            onClick={() => {
                              this.toggleTab(1);
                            }}
                            className={classnames({
                              active: this.state.activeTab === 1,
                            })}
                          >
                            <span className="step-number">01</span>
                            <span className="step-title">Property Details</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            // onClick={() => {
                            //   this.toggleTab(2);
                            // }}
                            className={classnames({
                              active: this.state.activeTab === 2,
                            })}
                          >
                            <span className="step-number">02</span>
                            <span className="step-title">Unit Details</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        activeTab={this.state.activeTab}
                        className="twitter-bs-wizard-tab-content"
                      >
                        <TabPane tabId={1}>
                          <h4 className="card-title">Choose Type</h4>
                          <div className="mb-4">
                            <Button color="light" className="mr-2 px-4">
                              {' '}
                              Sell{' '}
                            </Button>
                            <Button color="primary" className="px-4">
                              {' '}
                              Rent{' '}
                            </Button>
                          </div>
                          <PropertyForm updateProperty={(values)=>this.updateProperty(values, 2)}/>
                        </TabPane>
                        <TabPane tabId={2} >
                          <UnitForm updateProperty={(values)=>this.updateProperty(values, 2)} />
                        </TabPane>
                      </TabContent>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateProperty;

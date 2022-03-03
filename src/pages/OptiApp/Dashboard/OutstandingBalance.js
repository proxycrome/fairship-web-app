import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Table,
} from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Images
import img1 from '../../../assets/images/home.png';

class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="float-right"> 5,000,000</h4>

            <h4 className="card-title mb-3">Outstanding Balance</h4>

            <div>
              <div className="table-responsive mt-4">
                <Table hover className=" mb-0 table-centered table-nowrap">
                  <tbody>
                    <tr>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded bg-light">
                            <img src={img1} alt="" height="20" />
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 text-muted">2beds, 2baths</p>
                        <h5 className="font-size-14 mb-0">Cusy studio</h5>
                      </td>

                      <td>
                        <div id="spak-chart2"></div>
                      </td>
                      <td>
                        <p className="text-muted mb-0 text-primary">#450,000</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded bg-light">
                            <img src={img1} alt="" height="20" />
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 text-muted">2beds, 2baths</p>
                        <h5 className="font-size-14 mb-0">Cusy studio</h5>
                      </td>

                      <td>
                        <div id="spak-chart2"></div>
                      </td>
                      <td>
                        <p className="text-muted mb-0 text-primary">#450,000</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded bg-light">
                            <img src={img1} alt="" height="20" />
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 text-muted">2beds, 2baths</p>
                        <h5 className="font-size-14 mb-0">Cusy studio</h5>
                      </td>

                      <td>
                        <div id="spak-chart2"></div>
                      </td>
                      <td>
                        <p className="text-muted mb-0 text-primary">#450,000</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="avatar-xs">
                          <div className="avatar-title rounded bg-light">
                            <img src={img1} alt="" height="20" />
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 text-muted">2beds, 2baths</p>
                        <h5 className="font-size-14 mb-0">Cusy studio</h5>
                      </td>

                      <td>
                        <div id="spak-chart2"></div>
                      </td>
                      <td>
                        <p className="text-muted mb-0 text-primary">#450,000</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="text-center mt-4">
                <Link to="#" className="btn btn-primary btn-sm">
                  View more
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Sources;

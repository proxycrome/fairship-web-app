import React, { Component } from 'react';
import {
  Card,
  CardBody,
} from 'reactstrap';

//Simple bar
import SimpleBar from 'simplebar-react';

class RecentlyActivity extends Component {
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
            <h4 className="card-title mb-4">Upcoming Rental payment</h4>

            <SimpleBar style={{ maxHeight: '300px' }}>
              <ul className="list-unstyled activity-wid">
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <i className=" ri-map-pin-2-line"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Payment Date</small>
                        28 Apr, 2020
                      </h5>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Overdue</small>
                        1,000,000
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0">
                        808 Mandilas Mall, Lagos Island
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <i className=" ri-map-pin-2-line"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Payment Date</small>
                        28 Apr, 2020
                      </h5>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Overdue</small>
                        1,000,000
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0">
                        808 Mandilas Mall, Lagos Island
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <i className=" ri-map-pin-2-line"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Payment Date</small>
                        28 Apr, 2020
                      </h5>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Overdue</small>
                        1,000,000
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0">
                        808 Mandilas Mall, Lagos Island
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <i className=" ri-map-pin-2-line"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Payment Date</small>
                        28 Apr, 2020
                      </h5>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Overdue</small>
                        1,000,000
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0">
                        808 Mandilas Mall, Lagos Island
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <i className=" ri-map-pin-2-line"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Payment Date</small>
                        28 Apr, 2020
                      </h5>
                      <h5 className="font-size-13">
                        <small className="text-muted mr-2">Overdue</small>
                        1,000,000
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0">
                        808 Mandilas Mall, Lagos Island
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </SimpleBar>
            <span className="text-success"> More Details </span>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default RecentlyActivity;

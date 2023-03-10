import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Row,
  Col,
  Media,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllNotifications } from "../../../store/actions";

//Import images
import moment from "moment";

class NotificationDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      more: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.getAllNotifications();
  }

  toggle() {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
  }
  render() {
    // const notificate = this.props.notifications ? this.props.notifications : [];
    // const moreNotificate = this.props.notifications ? this.props.notifications : [];
    const currentNofifications = this.state.more
      ? this.props.notifications
      : this.props.notifications?.slice(0, 5);

    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="d-inline-block"
        >
          <DropdownToggle
            tag="button"
            className="btn header-item noti-icon waves-effect"
            id="page-header-notifications-dropdown"
          >
            <i className="ri-notification-3-line"></i>
            <span className="noti-dot"></span>
          </DropdownToggle>
          <DropdownMenu
            right
            className="dropdown-menu-lg p-0"
            aria-labelledby="page-header-notifications-dropdown"
          >
            <div className="p-3">
              <Row className="align-items-center">
                <Col>
                  <h6 className="m-0">Notifications</h6>
                </Col>
                <div className="col-auto">
                  <Link to="#" className="small">
                    {/* View All */}
                  </Link>
                </div>
              </Row>
            </div>
            <SimpleBar style={{ maxHeight: "230px" }}>
              {currentNofifications?.map((item, index) => (
                <Link
                  to="#"
                  className="text-reset notification-item"
                  key={index}
                >
                  <Media>
                    <div className="d-flex pr-4">
                      <div className="avatar-xs mr-3">
                        <span className="avatar-title bg-success rounded-circle font-size-16">
                          <i className="ri-checkbox-circle-line"></i>
                        </span>
                      </div>
                      <Media body>
                        <h6 className="mt-0 mb-1">{item.category}</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1">{item.message}</p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{" "}
                            {moment(
                              moment(
                                this.props.notifications &&
                                  this.props.notifications[0].dateSent.slice(
                                    0,
                                    6
                                  )
                              ).utcOffset(-6, true)._d
                            ).fromNow()}
                          </p>
                        </div>
                      </Media>
                    </div>
                  </Media>
                </Link>
              ))}
              {/* <Link to="#" className="text-reset notification-item">
                <Media>
                  <div className="avatar-xs mr-3">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="ri-shopping-cart-line"></i>
                    </span>
                  </div>
                  <Media body>
                    <h6 className="mt-0 mb-1">Your order is placed</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        If several languages coalesce the grammar
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i> 3 min ago
                      </p>
                    </div>
                  </Media>
                </Media>
              </Link>
              <Link to="#" className="text-reset notification-item">
                <Media>
                  <img
                    src={avatar3}
                    className="mr-3 rounded-circle avatar-xs"
                    alt="user-pic"
                  />
                  <Media body>
                    <h6 className="mt-0 mb-1">James Lemire</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        It will seem like simplified English.
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i> 1 hours ago
                      </p>
                    </div>
                  </Media>
                </Media>
              </Link>
              <Link to="#" className="text-reset notification-item">
                <Media>
                  <div className="avatar-xs mr-3">
                    <span className="avatar-title bg-success rounded-circle font-size-16">
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                  </div>
                  <Media body>
                    <h6 className="mt-0 mb-1">Your item is shipped</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        If several languages coalesce the grammar
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i> 3 min ago
                      </p>
                    </div>
                  </Media>
                </Media>
              </Link>

              <Link to="#" className="text-reset notification-item">
                <Media>
                  <img
                    src={avatar4}
                    className="mr-3 rounded-circle avatar-xs"
                    alt="user-pic"
                  />
                  <Media body>
                    <h6 className="mt-0 mb-1">Salena Layfield</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        As a skeptical Cambridge friend of mine occidental.
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i> 1 hours ago
                      </p>
                    </div>
                  </Media>
                </Media>
              </Link> */}
            </SimpleBar>
            <div className="p-2 border-top">
              <Link
                to="#"
                className="btn btn-sm btn-link font-size-14 btn-block text-center"
                onClick={() => this.setState({ more: !this.state.more })}
              >
                <i className="mdi mdi-arrow-right-circle mr-1"></i>
                {this.state.more ? "View Less" : "View More"}
              </Link>
            </div>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { notifications, loading } = state.notification;
  return { notifications, loading };
};

export default withRouter(
  connect(mapStatetoProps, {
    getAllNotifications,
  })(NotificationDropdown)
);

import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// users
// import avatar2 from '../../../assets/images/users/avatar-2.jpg';
import avatar from '../../../assets/images/avi.jpg';

import { logoutUser } from '../../../store/actions';

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
  }

  render() {
    let username = `${this.props.user?.fullName}`;
    
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="d-inline-block user-dropdown"
        >
          <DropdownToggle
            tag="button"
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
          >
            {this.props.user?.profilePhoto ? (
              <img
                className="rounded-circle header-profile-user mr-1"
                src={this.props.user?.profilePhoto}
                alt="Header Avatar"
              />
            ) : (
              <img
                className="rounded-circle header-profile-user mr-1"
                src={avatar}
                alt="Header Avatar"
              />
            )}
            <span className="d-none d-xl-inline-block ml-1 text-transform">
              {this.props.user?.fullName && username}
            </span>
            <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag={Link} to="/profile">
              <i className="ri-user-line align-middle mr-1"></i> Profile
            </DropdownItem>
            <DropdownItem tag={Link} to="/change-password">
              <i className="ri-lock-unlock-line align-middle mr-1"></i> Change Password
            </DropdownItem>
            {/* <DropdownItem href="#">
              <i className="ri-wallet-2-line align-middle mr-1"></i> My Wallet
            </DropdownItem> */}
            <DropdownItem className="d-block" href="#">
              <span className="badge badge-success float-right mt-1">11</span>
              <i className="ri-settings-2-line align-middle mr-1"></i> Settings
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem
              className="text-danger"
              onClick={() => this.props.logoutUser(this.props.history)}
            >
              <i className="ri-shut-down-line align-middle mr-1 text-danger"></i>{' '}
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { user } = state.Account;
  return { user };
};

export default withRouter(
  connect(mapStatetoProps, { logoutUser })(ProfileMenu)
);

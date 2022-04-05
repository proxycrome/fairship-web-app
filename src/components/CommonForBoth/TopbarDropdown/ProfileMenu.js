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
import avatar2 from '../../../assets/images/users/avatar-2.jpg';

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
    let username = 'Saheed Abdul';
    // if (localStorage.getItem('authUser')) {
    //   const obj = JSON.parse(localStorage.getItem('authUser'));
    //   const uNm = obj.email.split('@')[0];
    //   username = uNm.charAt(0).toUpperCase() + uNm.slice(1);
    // }
console.log(this.props.user)
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
            <img
              className="rounded-circle header-profile-user mr-1"
              src={avatar2}
              alt="Header Avatar"
            />
            <span className="d-none d-xl-inline-block ml-1 text-transform">
              {this.props.user && this.props.user.fullName}
            </span>
            <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag={Link} to="/profile">
              <i className="ri-user-line align-middle mr-1"></i> Profile
            </DropdownItem>
            {/* <DropdownItem href="#">
              <i className="ri-wallet-2-line align-middle mr-1"></i> My Wallet
            </DropdownItem> */}
            <DropdownItem className="d-block" href="#">
              <span className="badge badge-success float-right mt-1">11</span>
              <i className="ri-settings-2-line align-middle mr-1"></i> Settings
            </DropdownItem>
            {/* <DropdownItem href="#">
              <i className="ri-lock-unlock-line align-middle mr-1"></i> Lock
              screen
            </DropdownItem> */}
            <DropdownItem divider />
            <DropdownItem
              className="text-danger"
              onClick={()=>this.props.logoutUser(this.props.history)}
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

export default withRouter(connect(mapStatetoProps, { logoutUser })(ProfileMenu));

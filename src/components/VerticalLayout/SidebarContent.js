import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true,
    };
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ri-dashboard-line"></i>
                <span className="ml-1">Dashboard</span>
              </Link>
            </li>

            {/* Properties */}
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className=" ri-home-3-line"></i>
                <span className="ml-1">Property</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/properties">Multi units Property</Link>
                </li>
                <li>
                  <Link to="/unit_properties">Single unit</Link>
                </li>
                {/* <li>
                  <Link to="/listing_properties">Listings</Link>
                </li> */}
              </ul>
            </li>

            {/* Listings */}
            <li>
              <Link to="/listing_properties" className="waves-effect">
                <i className="ri-home-3-fill"></i>
                <span className="ml-1">Listings</span>
              </Link>
            </li>

            {/* Accounting */}
            <li>
              <Link to="/accounting" className="waves-effect">
                <i className=" ri-book-read-fill"></i>
                <span className="ml-1">Accounting</span>
              </Link>
            </li>

            {/* Documents */}
            <li>
              <Link to="/documents" className="waves-effect">
                <i className="ri-folder-2-line"></i>
                <span className="ml-1">Documents</span>
              </Link>
            </li>

            {/* Tenant */}
            <li>
              <Link to="/tenants" className="waves-effect">
                <i className="ri-user-line"></i>
                <span className="ml-1">Tenants</span>
              </Link>
            </li>

            {/* Agent */}

            {(this.props.user?.role?.name !== "AGENT" ||
              this.props.user?.agentDetail?.type === "COMPANY") && (
              <li>
                <Link to="/agents" className="waves-effect">
                  <i className="ri-user-line"></i>
                  <span className="ml-1">Agent</span>
                </Link>
              </li>
            )}

            {/* Maintenance */}
            <li>
              <Link to="/maintenance" className="waves-effect">
                {/* <i className="ri-store-2-line"></i> */}
                <i className="ri-tools-fill"></i>
                <span className="ml-1">Maintenance/Service</span>
              </Link>
            </li>

            {/* appointments */}
            <li>
              <Link to="/appointments" className="waves-effect">
                <i className=" ri-calendar-2-line"></i>
                <span className="ml-1">Appointments</span>
              </Link>
            </li>

            {/* Rental Applications */}
            <li>
              <Link to="/rental_application" className="waves-effect">
                <i className="ri-key-2-fill"></i>
                <span className="ml-1">Rental Applications</span>
              </Link>
            </li>

            {/* Buy Applications */}
            <li>
              <Link to="/buy_application" className="waves-effect">
                <i className="ri-briefcase-4-line"></i>
                <span className="ml-1">Buy Applications</span>
              </Link>
            </li>

            {/* inspections */}
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="ri-search-line"></i>
                <span className="ml-1">Inspections</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/inspection">Inspections</Link>
                </li>
              </ul>
            </li>

            {/* Lease Termination */}
            <li>
              <Link to="/lease-termination" className="waves-effect">
                <i className=" ri-calendar-2-line"></i>
                <span className="ml-1">Lease Termination</span>
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { user } = state.Account;
  return { ...state.Layout, user };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader,
  })(SidebarContent)
);

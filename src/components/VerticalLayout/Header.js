import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';

import { Link } from 'react-router-dom';

// Import menuDropdown
import NotificationDropdown from '../CommonForBoth/TopbarDropdown/NotificationDropdown';
import ProfileMenu from '../CommonForBoth/TopbarDropdown/ProfileMenu';

//Import i18n
import { withNamespaces } from 'react-i18next';


// Redux Store
import { toggleRightSidebar } from '../../store/actions';

import logolight from '../../assets/images/fairship.png';
import logolight2 from '../../assets/images/fairship2.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      isSocialPf: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleRightbar = this.toggleRightbar.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback();
  }

  /**
   * Toggles the sidebar
   */
  toggleRightbar() {
    this.props.toggleRightSidebar();
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box bg-white">
                <Link to="#" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logolight} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logolight} alt="" height="20" />
                  </span>
                </Link>

                <Link to="#" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logolight} alt="" height="22" />
                  </span>
                  <div className="d-flex">
                    <span className="logo-lg">
                      <img src={logolight} alt="" height="60" />
                    </span>
                    <span className="logo-lg">
                      <img src={logolight2} alt="" height="20" />
                    </span>
                  </div>
                </Link>
              </div>

              <Button
                size="sm"
                color="none"
                type="button"
                onClick={this.toggleMenu}
                className="px-3 font-size-24 header-item waves-effect"
                id="vertical-menu-btn"
              >
                <i className="ri-menu-2-line align-middle"></i>
              </Button>

              {/* <Form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder={this.props.t('Search')}
                  />
                  <span className="ri-search-line"></span>
                </div>
              </Form> */}

              {/* <MegaMenu /> */}
            </div>

            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ml-2">
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch });
                  }}
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                >
                  <i className="ri-search-line"></i>
                </button>
                <div
                  className={
                    this.state.isSearch === true
                      ? 'dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show'
                      : 'dropdown-menu dropdown-menu-lg dropdown-menu-right p-0'
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <Form className="p-3">
                    <FormGroup className="m-0">
                      <InputGroup>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder={this.props.t('Search')}
                        />
                        <InputGroupAddon addonType="append">
                          <Button color="primary" type="submit">
                            <i className="ri-search-line"></i>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </div>
              </div>

              {/* <LanguageDropdown /> */}
              {/* 
              <Dropdown
                isOpen={this.state.isSocialPf}
                toggle={() =>
                  this.setState({ isSocialPf: !this.state.isSocialPf })
                }
                className="d-none d-lg-inline-block ml-1"
              >
                <DropdownToggle
                  tag="button"
                  className="btn header-item noti-icon waves-effect"
                >
                  <i className="ri-apps-2-line"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg" right>
                  <div className="px-lg-2">
                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={github} alt="Github" />
                          <span>{this.props.t('GitHub')}</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={bitbucket} alt="bitbucket" />
                          <span>{this.props.t('Bitbucket')}</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dribbble} alt="dribbble" />
                          <span>{this.props.t('Dribbble')}</span>
                        </Link>
                      </Col>
                    </Row>

                    <Row className="no-gutters">
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={dropbox} alt="dropbox" />
                          <span>{this.props.t('Dropbox')}</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={mail_chimp} alt="mail_chimp" />
                          <span>{this.props.t('Mail Chimp')}</span>
                        </Link>
                      </Col>
                      <Col>
                        <Link className="dropdown-icon-item" to="#">
                          <img src={slack} alt="slack" />
                          <span>{this.props.t('Slack')}</span>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </DropdownMenu>
              </Dropdown> */}

              <div className="dropdown d-none d-lg-inline-block ml-1">
                <Button
                  color="none"
                  type="button"
                  className="header-item noti-icon waves-effect"
                  onClick={this.toggleFullscreen}
                >
                  <i className="ri-fullscreen-line"></i>
                </Button>
              </div>

              <NotificationDropdown />

              <ProfileMenu />

              {/* <div className="dropdown d-inline-block">
                <Button
                  color="none"
                  onClick={this.toggleRightbar}
                  type="button"
                  className="header-item noti-icon right-bar-toggle waves-effect"
                >
                  <i className="ri-settings-2-line"></i>
                </Button>
              </div> */}
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withNamespaces()(Header)
);

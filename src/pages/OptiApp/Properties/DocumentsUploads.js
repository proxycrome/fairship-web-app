import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  CardTitle,
  CardSubtitle,
  Media
} from 'reactstrap';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';

class DocumentsUploads extends Component {
  constructor(props) {
    super(props);
    this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
    this.state = {
      selectedFiles: [],
    };
  }

  handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size),
      })
    );

    this.setState({ selectedFiles: files });
  };

  /**
   * Formats the size
   */
  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  render() {
    const dropzoneStyle = {
      width: '100px',
      height: '100px',
      border: '1px  dashed black',
      margin: '10px',
    };
    return (
      <React.Fragment>
        <div className="page-content">
          <div>
            <Row>
              <Col xs={12}>
                <Card>
                  <CardBody>
                    <CardTitle>
                      Add at least 1 photo for this category
                    </CardTitle>
                    <CardSubtitle className="mb-1">
                      {' '}
                      First picture - is the title picture. You can change the
                      order of photos just grab your photo and drag
                    </CardSubtitle>
                    <Form className="d-flex ml-2">
                      <div
                        style={dropzoneStyle}
                        className="border border-info d-flex align-items-center justify-content-center "
                      >
                        <i className=" text-muted ri-camera-switch-line"></i>
                      </div>
                      <div
                        className="border border-info d-flex align-items-center justify-content-center"
                        style={dropzoneStyle}
                      >
                        <i className="  text-muted ri-camera-switch-line"></i>
                      </div>
                      <div
                        className="border border-info d-flex align-items-center justify-content-center"
                        style={dropzoneStyle}
                      >
                        <i className="  text-muted ri-camera-switch-line"></i>
                      </div>
                      <div
                        className="border border-info d-flex align-items-center justify-content-center"
                        style={dropzoneStyle}
                      >
                        <i className="  text-muted ri-camera-switch-line"></i>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <div>
              <p className="d-flex ">
                <span className="text-success">
                  <i className="  display-6 text-muted ri-add-circle-fill m-1"></i>
                </span>
                <span className="text-success">Add Agent</span>
              </p>
              <div className="form-group col-md-6">
                <select className="custom-select">
                  <option defaultValue>Select Agent</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <Card>
                <Media className=" ml-5 mb-4">
                  <img
                    className="avatar-sm mr-3 rounded-circle"
                    src={avatar6}
                    alt="Nazox"
                  />
                  <Media body>
                    <h5 className="mt-0 font-size-14">Robert Williams</h5>
                    robert@gmail.com
                  </Media>
                </Media>
                <Media className="ml-5 mb-4">
                  <img
                    className="avatar-sm mr-3 rounded-circle"
                    src={avatar6}
                    alt="Nazox"
                  />
                  <Media body>
                    <h5 className="mt-0 font-size-14">Robert Williams</h5>
                    robert@gmail.com
                  </Media>
                </Media>
              </Card>
            </div>
            <p className="d-flex ">
              <span className="text-success">
                <i className="  display-6 text-muted ri-add-circle-fill m-1"></i>
              </span>
              <span className="text-success">Add Agent</span>
            </p>
            <div className="form-group col-md-6 mb-5">
              <select className="custom-select">
                <option defaultValue>Select Agent</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mx-auto" style={{ width: 200 }}>
              <button type="button" className="btn btn-success w-lg ">
                Upload
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DocumentsUploads;

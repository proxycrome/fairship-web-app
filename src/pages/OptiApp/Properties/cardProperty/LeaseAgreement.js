import React from 'react'
import {
  Card,
  CardBody,
  CardText,
  Label,
  Input,
  Button,
} from "reactstrap";

function LeaseAgreement() {
  return (
    <>
      {/* lease Agreements  */}
      <Card className="p-5 w-75">
        <h5>Lease Agreement</h5>
        <CardBody>
          <CardText>
            <div className="d-flex flex-column">
              <div className="form-check  mb-3 d-flex justify-content-between">
                <div>
                  <Input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    defaultChecked
                  />
                  <Label className="form-check-label" htmlFor="exampleRadios1">
                    Use PMA Generated Sell Agreement
                  </Label>
                </div>
                <div className="d-flex mr-2 align-items-center">
                  <i className=" mr-2 text-muted ri-eye-fill"></i>
                  <small className="text-success fs-1">Preview</small>
                </div>
              </div>
              <div className="form-check  mt-5">
                <Input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  // defaultChecked
                />
                <Label className="form-check-label" htmlFor="exampleRadios1">
                  Use your Sell Agreement
                </Label>
              </div>
            </div>
            <div className="mx-auto">
              {/* <Button className="w-50 m-5 text-success">Done</Button> */}
              <Button
                type="button"
                color="success"
                className="w-lg  m-5 w-50 waves-effect waves-light"
              >
                Done
              </Button>
            </div>
          </CardText>
        </CardBody>
      </Card>

      {/* Upload your sell Agreement */}
      <div>
        <Card className="p-2 w-100">
          <div className="d-flex flex-column align-items-center justify-content-evenly">
            <div className="mb-4">
              <h6>Upload your sell agreement</h6>
            </div>
            <div className="d-flex flex-column align-items-center">
              <i className="display-4 text-muted ri-upload-cloud-fill"></i>
              <small className="text-danger">
                PDF files not more than 122kb
              </small>
            </div>

            <div>
              <div className="mx-auto">
                {/* <Button className="w-50 m-5 text-success">Done</Button> */}
                <Button
                  type="button"
                  color="success"
                  className="w-lg  m-5 w-75 waves-effect waves-light"
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* Upload your sell Agreement */}
      <div>
        <Card className="p-2 w-100">
          <div className="d-flex flex-column align-items-center justify-content-evenly">
            <div className="mb-4">
              <h6>Upload your sell agreement</h6>
            </div>
            <div className="w-25">
              <Card className="p-2 ">
                <div className="d-flex mr-2 align-items-center">
                  <i className=" mr-2 ri-sim-card-2-fill"></i>
                  <small>Sell Agreement.pdf 100kb</small>
                </div>
              </Card>
            </div>

            <div>
              <div className="mx-auto">
                {/* <Button className="w-50 m-5 text-success">Done</Button> */}
                <Button
                  type="button"
                  color="success"
                  className="w-lg  m-5 w-75 waves-effect waves-light"
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
     
     
    </>
  );
}

export default LeaseAgreement
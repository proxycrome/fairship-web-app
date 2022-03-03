import React from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Label,
} from 'reactstrap';

const RejectionForm = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Form>
            <Row>
              <Col sm={6}>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="incomplete"
                  />
                  <Label className="form-check-label" htmlFor="incomplete">
                    Application was incomplete
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="event"
                  />
                  <Label className="form-check-label" htmlFor="event">
                    You were party to an event
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="detail"
                  />
                  <Label className="form-check-label" htmlFor="detail">
                    Employment details were insuficient
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="bankruptcy"
                  />
                  <Label className="form-check-label" htmlFor="bankruptcy">
                    you were party to a bankruptcy
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="income"
                  />
                  <Label className="form-check-label" htmlFor="income">
                    insufficient income to meet qualifying staandard
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="terms"
                  />
                  <Label className="form-check-label" htmlFor="terms">
                    Terms of lease not acceptable
                  </Label>
                </div>
              </Col>
              <Col sm={6}>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="incomplete"
                  />
                  <Label className="form-check-label" htmlFor="1incomplete">
                    Application was incomplete
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="1event"
                  />
                  <Label className="form-check-label" htmlFor="1event">
                    You were party to an event
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="1detail"
                  />
                  <Label className="form-check-label" htmlFor="1detail">
                    Employment details were insuficient
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="1bankruptcy"
                  />
                  <Label className="form-check-label" htmlFor="1bankruptcy">
                    you were party to a bankruptcy
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="1income"
                  />
                  <Label className="form-check-label" htmlFor="1income">
                    insufficient income to meet qualifying staandard
                  </Label>
                </div>
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="1terms"
                  />
                  <Label className="form-check-label" htmlFor="1terms">
                    Terms of lease not acceptable
                  </Label>
                </div>
              </Col>
            </Row>
            <FormGroup className="my-4">
              <Label htmlFor="1billing-address">Other</Label>
              <textarea
                className="form-control bg-light"
                id="1billing-address"
                rows="3"
                placeholder="Leave Comment Here ..."
              ></textarea>
            </FormGroup>

            <div className="form-check mb-3 text-center">
              <Input
                className="form-check-input"
                type="checkbox"
                value=""
                id="1apply"
              />
              <Label className="form-check-label" htmlFor="1apply">
                Do you want the Tenant to re-apply?
              </Label>
            </div>
            <div className="text-center">
              <button disabled className="btn btn-success w-25 px-4 "> Done </button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default RejectionForm;

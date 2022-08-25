import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Label,
  Alert
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PutDataRecommendation } from '../../../../store/actions';

const RejectionForm = ({id}) => {
  
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');
  const [sixth, setSixth] = useState('');
  const [seventh, setSeventh] = useState('');
  const [eight, setEight] = useState('');
  const [nineth, setNineth] = useState('');
  const [tenth, setTenth] = useState('');
  const [eleventh, setEleventh] = useState('');
  const [twelveth, setTwelveth] = useState('');
  const [thirteenth, setThirteenth] = useState('');
  const [fourteenth, setFourteenth] = useState('');

  const dispatch = useDispatch();
  

 const Optis = first + "," + second + ',' + third + ',' + fourth + ',' + fifth + ',' + sixth + ',' + seventh + ',' + eight
        + ',' + nineth + ',' + tenth + ',' + eleventh + ',' + twelveth + ',' + thirteenth + ',' + fourteenth;

  // console.log(Afeez)

  const review = (e) => {
    e.preventDefault()
    const data = {
      rentId: id,
      reviewAction: "REJECTED",
      reviewComments: Optis
    }
    dispatch(PutDataRecommendation(data))
    // console.log(Optis)
    setFirst('') 
    setSecond('')
    setThird('')
    setFourth('')
    setFifth('')
    setSixth('')
    setSeventh('')
    setEight('')
    setNineth('')
    setTenth('')
    setTwelveth('')
    setThirteenth('')
    setFourteenth('')
    // window.location.reload(1)
  }

  const {put, rentaldError} = useSelector((state) => state.PreviewReducer);
  // console.log(put)
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
                    value = 'Application was incomplete'
                    onChange={(e)=> setFirst(e.target.value)}
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
                    value='You were party to an event'
                    onChange={(e)=> setSecond(e.target.value)}
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
                    value='Employment details were insuficient'
                    onChange={(e)=> setThird(e.target.value)}
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
                    value='you were party to a bankruptcy'
                    onChange={(e)=> setFourth(e.target.value)}
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
                    value='insufficient income to meet qualifying staandard'
                    onChange={(e)=> setFifth(e.target.value)}
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
                    value='Terms of lease not acceptable'
                    onChange={(e)=> setSixth(e.target.value)}
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
                    value='Application was incomplete'
                    onChange={(e)=> setSeventh(e.target.value)}
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
                    value='You were party to an event'
                    onChange={(e)=> setEight(e.target.value)}
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
                    value='Employment details were insuficient'
                    onChange={(e)=> setNineth(e.target.value)}
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
                    value='you were party to a bankruptcy'
                    onChange={(e)=> setTenth(e.target.value)}
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
                    value='insufficient income to meet qualifying staandard'
                    onChange={(e)=> setEleventh(e.target.value)}
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
                    value='Terms of lease not acceptable'
                    onChange={(e)=> setTwelveth(e.target.value)}
                    id="1terms"
                  />
                  <Label className="form-check-label" htmlFor="1terms">
                    Terms of lease not acceptable
                  </Label>
                </div>
              </Col>
            </Row>
            {put && put?.message && (
              <Alert color='success' className='text-center'>
                {put?.message}
              </Alert>
            )}
            {rentaldError && rentaldError?.message && (
              <Alert color='danger' className='text-center'>
                {rentaldError?.message}
              </Alert>
            )}
            <FormGroup className="my-4">
              <Label htmlFor="1billing-address">Other</Label>
              <textarea
                className="form-control bg-light"
                id="1billing-address"
                rows="3"
                value={fourteenth}
                onChange={(e)=> setFourteenth(e.target.value)}
                placeholder="Leave Comment Here ..."
              ></textarea>
            </FormGroup>

            <div className="form-check mb-3 text-center">
              <Input
                className="form-check-input"
                type="checkbox"
                value='Do you want the Tenant to re-apply?'
                onChange={(e)=> setThirteenth(e.target.value)}
                id="1apply"
              />
              <Label className="form-check-label" htmlFor="1apply">
                Do you want the Tenant to re-apply?
              </Label>
            </div>
            <div className="text-center">
              <button type='submit' onClick={review} className="btn btn-success w-25 px-4 "> Done </button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(RejectionForm);

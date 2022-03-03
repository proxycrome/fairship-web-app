import React, { useState } from 'react';
import {
  Input,
  Button,
  CardImg,
  Card,
  Row,
  Col,
  Container,
  CardBody,
} from 'reactstrap';
import img3 from '../../../assets/images/home.png';
import ListingPayment from './ListingPayment';

const Inspection = () => {
  const [makePayment, SetPayment] = useState(false);

  if (makePayment) return <ListingPayment BackHome={()=>SetPayment(false)} />;
  return (
    <div className="page-content">
      <Container fluid>
        <h5 className="ml-2"> Properties </h5>
        <div className="d-flex justify-content-between mb-3">
          <div className="search-box">
            <div className="position-relative">
              <Input
                type="text"
                className="form-control rounded"
                placeholder="Search..."
              />
              <i className="mdi mdi-magnify search-icon"></i>
            </div>
          </div>
          <div className="text-right">
            <Button color="success" onClick={() => SetPayment(!makePayment)}>
              List Property
            </Button>
          </div>
        </div>
        <Row>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} xl={3}>
            <Card>
              <CardImg top className="img-fluid" src={img3} alt="Skote" />
              <CardBody className="mb-1">
                <span className="text-muted mb-2">2 Beds, 2 Baths.</span>
                <h6 className="mt-2">Cosy studio in the heart of Lagos</h6>
                <p>
                  {' '}
                  From <span className="text-primary"> 450,000 </span> /y{' '}
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Inspection;

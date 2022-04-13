import React, { useEffect } from 'react';
import {
  Input,
  Button,
  CardImg,
  Card,
  Row,
  Col,
  Container,
  CardBody,
  Alert,
} from 'reactstrap';
import Loading from '../../../components/Common/Loading';

// actions
import { fetchProperties } from '../../../store/actions';

import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const Listing = ({ fetchProperties, properties, propertiesError, loading }) => {
  useEffect(() => {
    const isAuth = true;
    fetchProperties(isAuth);
  }, []);

  console.log(properties);
  return (
    <div className="page-content">
      <Container fluid>
        <h5 className="ml-2"> List Properties </h5>
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
          {/* <div className="text-right">
            <Button color="success">List Property</Button>
          </div> */}
        </div>

        {propertiesError && (
          <Alert color="danger" className="text-center">
            {propertiesError}
          </Alert>
        )}

        {properties !== null ? (
          <Row>
            {properties?.entities.length > 0 &&
              properties.entities.map((data) => (
                <Col mg={6} xl={3} key={data.id}>
                  <Link to={`list/${data.id}`}>
                    <Card>
                      <CardImg
                        top
                        height="200"
                        className="w-100"
                        src={data.indexImage}
                        alt="Skote"
                      />
                      <CardBody className="mb-1">
                        <span className="text-muted">2 Beds, 2 Baths.</span>
                        <h6 className="mt-2 card-title">{data.title}</h6>
                        <p>
                          From <span className="text-primary">450,000</span> /y
                        </p>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        ) : (
          <Loading />
        )}
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { properties, loading, propertiesError } = state.Properties;
  return { properties, loading, propertiesError };
};

export default withRouter(
  connect(mapStatetoProps, { fetchProperties })(Listing)
);

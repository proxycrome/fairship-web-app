import React, { useEffect, useState } from 'react';
import {
  Input,
  Button,
  CardImg,
  Card,
  Row,
  Col,
  Container,
  CardBody,
  FormGroup,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import Loading from '../../../components/Common/Loading';
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from 'availity-reactstrap-validation';

// actions
import { fetchProperties, fetchState } from '../../../store/actions';

import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import emptyCan from "../../../assets/images/EmptyCan.png";

const Listing = ({
  fetchProperties,
  properties,
  propertiesError,
  loading,
  fetchState,
  states,
}) => {
  const [searchName, setSearchName] = useState('');
  // const [sortedProperties, setSortedProperties] = useState([]);
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({});

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const handleSubmit = (event, values) => {
    const formData = {
      ...values,
      maxPrice: +values.maxPrice,
      minPrice: +values.minPrice,
    };
    if (formData.maxPrice === 0) {
      delete formData.maxPrice;
    }

    setValues(formData);
    setShow(false);
  };

  const clearFilter = () => {
    setValues({});
    setShow(false);
  };

  // useEffect(() => {
  //   if(properties !== null) {
  //     setSortedProperties(
  //       properties?.entities?.sort((a, b) =>
  //         a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  //       )
  //     );
  //   }
  // }, [properties]);

  useEffect(() => {
    fetchState(1);
  }, []);

  useEffect(() => {
    const isAuth = {
      type: 'general',
      query: { ...values, search: searchName },
    };
    fetchProperties(isAuth);
  }, [searchName, values]);


  return (
    <div className="page-content">
      <Container fluid>
        <h5 className="ml-2"> Listed Properties </h5>
        <div className="d-flex justify-content-between mb-3">
          <div className="search-box">
            <div className="position-relative">
              <Input
                value={searchName}
                type="text"
                className="form-control rounded"
                placeholder="Search..."
                onChange={(e) => setSearchName(e.target.value)}
              />
              <i className="mdi mdi-magnify search-icon"></i>
            </div>
          </div>
          <div>
            <Button className="px-5" color="success" onClick={showModal}>
              Filter
            </Button>
          </div>
        </div>

        {propertiesError && (
          <Alert color="danger" className="text-center">
            {propertiesError}
          </Alert>
        )}

        {properties !== null ? (
          <Row>
            {properties.entities.length > 0 ?
              properties?.entities?.map((data) => (
                <Col mg={6} xl={3} key={data.id}>
                  <Link to={`list/${data.id}`}>
                    <Card>
                      <CardImg
                        top
                        height="200"
                        className="w-100"
                        src={data.indexImage}
                        alt="property"
                      />
                      <CardBody className="mb-1">
                        <span className="text-muted">
                          {data.bedrooms} {data.bedrooms && "Beds,"} {data.bathrooms} {data.bathrooms && "Baths."}
                        </span>
                        <p className="mt-2 card-title">
                          <span
                            style={{
                              display: 'block',
                              fontWeight: '800',
                              color: 'black',
                            }}
                          >
                            {data?.parentProperty?.title}
                          </span>
                          <span style={{ display: 'block', color: 'black' }}>
                            {data?.title}
                          </span>
                        </p>
                        <p>
                          From{' '}
                          <span className="text-primary">
                            ₦{data?.price?.toLocaleString()}
                          </span>{' '}
                          /y
                        </p>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              )) : (
                
                <Col xl={12} className="d-flex justify-content-center">
                  <div>
                    <img src={emptyCan} alt="empty" className="rounded mb-2" />
                    <h4> No Properties Found </h4>
                  </div>  
                </Col>
              )}
          </Row>
        ) : (
          <Loading />
        )}
        <Modal size="md" isOpen={show} toggle={hideModal}>
          <ModalHeader toggle={hideModal}>Filter</ModalHeader>
          <ModalBody>
            <AvForm onValidSubmit={handleSubmit}>
              <div
                style={{ float: 'right', color: 'red', cursor: 'pointer' }}
                onClick={clearFilter}
              >
                Clear Filter
              </div>
              <AvField type="select" name="state" label="State">
                <option value=""></option>
                {states?.map((state) => (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </AvField>
              <AvRadioGroup
                inline
                name="saleOrRent"
                label="Property Category"
                value="RENT"
              >
                <AvRadio label="All" value="" />
                <AvRadio label="RENT" value="RENT" />
                <AvRadio label="SALE" value="SALE" />
              </AvRadioGroup>
              <AvField
                type="number"
                name="minPrice"
                min={0}
                label="Min. Price"
              />
              <AvField
                type="number"
                name="maxPrice"
                min={0}
                label="Max. Price"
              />
              <FormGroup className="d-flex justify-content-center">
                <Button color="success" type="submit">
                  Apply filter
                </Button>
              </FormGroup>
            </AvForm>
          </ModalBody>
        </Modal>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { properties, loading, propertiesError } = state.Properties;
  const { states } = state.Location;
  return { properties, loading, propertiesError, states };
};

export default withRouter(
  connect(mapStatetoProps, { fetchProperties, fetchState })(Listing)
);

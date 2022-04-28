import React, { useState, useEffect } from 'react';
import { Input, Button, Table, Card, CardBody, Container } from 'reactstrap';
import profileImage from '../../../assets/images/home.png';
import CreateProperty from './CreateProperty';
import PreviewProperty from './PreviewProperty';
import PropertiesTable from './propertiesTable';
import Loading from '../../../components/Common/Loading'

// actions
import { fetchProperties } from '../../../store/actions';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const Properties = ({ fetchProperties, properties, loading }) => {
  const [showPreview, SetShowPreview] = useState(false);
  const [ShowCreateProperty, SetCreateProperty] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  if (showPreview) return <PreviewProperty BackToHome={SetShowPreview} />;
  return (
    <div className="page-content">
      <Container fluid>
        <div className="d-flex justify-content-between mb-2">
          <h5 className="ml-2">Multi Unit Properties </h5>

          <div>
            <Link to="/create_property">
              <Button color="success">Upload Properties</Button>
            </Link>
          </div>
        </div>
        {properties !== null ? (
          <PropertiesTable tableData={properties?.entities} />
        ): (
          <Loading/>
        )}

        {/* <ExtraPages /> */}
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { properties, loading } = state.Properties;
  return { properties, loading };
};

export default withRouter(
  connect(mapStatetoProps, { fetchProperties })(Properties)
);

import React, { useState, useEffect } from 'react';
import { Input, Button, Table, Card, CardBody, Container } from 'reactstrap';
import profileImage from '../../../assets/images/home.png';
import CreateProperty from './CreateProperty';
import PreviewProperty from './PreviewProperty';
import PropertiesTable from './propertiesTable';

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
        <div>
          <div className="float-right">
            <Link to="/create_property">
              <Button color="success">Upload Properties</Button>
            </Link>
          </div>
          <h5 className="ml-2"> Properties </h5>
        </div>
        {properties !== null && (
          <PropertiesTable tableData={properties?.entities} />
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

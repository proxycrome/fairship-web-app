import React, { useEffect } from 'react';
import { Button, Container } from 'reactstrap';
// import profileImage from '../../../assets/images/home.png';
// import CreateProperty from './CreateProperty';
// import PreviewProperty from './PreviewProperty';
import PropertiesTable from './unitTable';
import Loading from '../../../../components/Common/Loading';

// actions
import { fetchProperties } from '../../../../store/actions';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const UnitProperty = ({ fetchProperties, properties }) => {

  useEffect(() => {
    const isAuth = {
      type: "unit_entity"
    };
    fetchProperties(isAuth);
  }, [fetchProperties]);

  return (
    <div className="page-content">
      <Container fluid>
        <div className="d-flex justify-content-between mb-2">
          <h5 className="ml-2">Single Unit Properties </h5>

          <div>
            <Link to="/create_unit_property">
              <Button color="success">Create Unit</Button>
            </Link>
          </div>
        </div>
        {properties !== null ? (
          <PropertiesTable tableData={properties?.entities} />
        ) : (
          <Loading />
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
  connect(mapStatetoProps, { fetchProperties })(UnitProperty)
);

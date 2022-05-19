import React, { useState } from 'react';
import { Row, Col, Button, FormGroup } from 'reactstrap';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

const CreateInspection = ({updateInspection}) => {
  const [inventory, setInventory] = useState([]);
  const [inspection, setInspection] = useState([]);
  const handleSubmit = (events, values) => {
    updateInspection(values)
  };
  const addInventory = () => {
    let initial = 1;
    if (inventory.length === 0) {
      setInventory([initial]);
    } else {
      initial = inventory[inventory.length - 1] + 2;
      setInventory([...inventory, initial]);
    }
  };

  const addInspection = () => {
    let initialValue = 1;
    if (inspection.length === 0) {
      setInspection([initialValue]);
    } else {
      initialValue = inspection[inspection.length - 1] + 2;
      setInspection([...inspection, initialValue]);
    }
  };

  const removeInventory = (data) => {
    let newInventory = inventory.filter((val) => data !== val);
    setInventory(newInventory);
  };

  const removeInspection = (data) => {
    let newInspection = inspection.filter((val) => data !== val);
    setInspection(newInspection);
  };
  return (
    <React.Fragment>
      <div>
        <AvForm className="form-horizontal" onValidSubmit={handleSubmit}>
          <Row>
            <Col xs={12}>
              <FormGroup className="form-group-custom mb-4">
                <AvField
                  name="title"
                  label="Inspection Area"
                  type="text"
                  className="form-ctrl"
                  id="title"
                  placeholder="Title"
                />
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup className="form-group-custom mb-4">
                <AvField
                  name={`Inspection.${0}`}
                  label="Inspection Item"
                  type="text"
                  className="form-ctrl"
                  id="title"
                  placeholder="Inspection"
                  required
                />
              </FormGroup>
              {inspection.length > 0 &&
                inspection.map((data) => (
                  <div
                    className="d-flex mb-4 justify-content-between"
                    key={data}
                  >
                    <div className="col-11 px-0 ">
                      <AvField
                        name={`Inspection.${data}`}
                        type="text"
                        className="mb-0"
                        placeholder="Inspection"
                        required
                      />
                    </div>
                    <span
                      className="p-2 text-danger font-weight-bold"
                      style={{ cursor: 'pointer' }}
                      onClick={() => removeInspection(data)}
                    >
                      X{' '}
                    </span>
                  </div>
                ))}
              <Link to="#" onClick={addInspection}>
                {' '}
                Add More{' '}
              </Link>
            </Col>
            <Col xs={6}>
              <FormGroup className="form-group-custom mb-4">
                <AvField
                  name={`Inventory.${0}`}
                  label="Inventory"
                  type="text"
                  className="form-ctrl"
                  id="title"
                  placeholder="Inventory"
                  required
                />
              </FormGroup>
              {inventory.length > 0 &&
                inventory.map((data) => (
                  <div
                    className="d-flex mb-4 justify-content-between"
                    key={data}
                  >
                    <div className="col-11 px-0 ">
                      <AvField
                        name={`Inventory.${data}`}
                        type="text"
                        className="mb-0"
                        placeholder="Inventory"
                        required
                      />
                    </div>
                    <span
                      className="p-2 text-danger font-weight-bold"
                      style={{ cursor: 'pointer' }}
                      onClick={() => removeInventory(data)}
                    >
                      X
                    </span>
                  </div>
                ))}
              <Link to="#" onClick={addInventory}>
                {' '}
                Add More{' '}
              </Link>
            </Col>
          </Row>
          <div className="text-center">
            <Button type="submit" color="success" className="px-2">
              Create Inventory
            </Button>
          </div>
        </AvForm>
      </div>
    </React.Fragment>
  );
};

export default CreateInspection;

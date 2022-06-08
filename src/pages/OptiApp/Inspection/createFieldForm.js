import React, { useState } from 'react';
import { Row, Col, Button, FormGroup } from 'reactstrap';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

const CreateInspection = ({updateInspection}) => {
  // const [inventory, setInventory] = useState([]);
  // const [inspection, setInspection] = useState([]);
  const [title, setTitle] = useState('');

  const handleSubmit = (events, values) => {
    const formData = {
      ...values,
      title: title,
    }
    updateInspection(formData)
    setTitle('');
  };
  
  // const addInventory = () => {
  //   let initial = 1;
  //   if (inventory.length === 0) {
  //     setInventory([initial]);
  //   } else {
  //     initial = inventory[inventory.length - 1] + 2;
  //     setInventory([...inventory, initial]);
  //   }
  // };

  // const addInspection = () => {
  //   let initialValue = 1;
  //   if (inspection.length === 0) {
  //     setInspection([initialValue]);
  //   } else {
  //     initialValue = inspection[inspection.length - 1] + 2;
  //     setInspection([...inspection, initialValue]);
  //   }
  // };

  // const removeInventory = (data) => {
  //   let newInventory = inventory.filter((val) => data !== val);
  //   setInventory(newInventory);
  // };

  // const removeInspection = (data) => {
  //   let newInspection = inspection.filter((val) => data !== val);
  //   setInspection(newInspection);
  // };

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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  placeholder="Title"
                />
              </FormGroup>
            </Col>
          </Row>
          <div className="text-center">
            <Button type="submit" color="success" className="px-2">
              Add Inspection Area
            </Button>
          </div>
        </AvForm>
      </div>
    </React.Fragment>
  );
};

export default CreateInspection;

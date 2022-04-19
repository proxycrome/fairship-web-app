import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  InputGroup,
  Card, CardBody,
  Row,
  Col,
  Button,
} from 'reactstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import MoveIn from './MoveIn';

const optionGroup = [
  {
    label: 'type',
    options: [
      { label: 'Move in', value: 'Move in' },
      { label: 'Move Out', value: 'Move Out' },
      { label: 'Bi-annual', value: 'Bi-annual' },
      { label: 'External', value: 'External' },
    ],
  },
];

const propertyOptionGroup = [
  {
    label: 'Search by unit or tenant',
    options: [
      { label: 'Unit', value: 'Unit' },
      { label: 'Tenant', value: 'Tenant' },
    ],
  },
];

const NewInspection = ({BackToHome}) => {
  const [moveInDate, setMoveInDate] = useState(new Date());
  const [inspectionDate, setInspectionDate] = useState(new Date());
  const [isMoveIn, setIsMoveIn] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [propertySelectedGroup, setPropertySelectedGroup] = useState(
    'Search by unit or Tenant'
  );

  return (
    <div className="page-content container">
      <h5 className="ml-5 mt-5">New Inspection</h5>
      <Card>
        <CardBody>
          {' '}
          <Col lg="9" className="mx-auto">
            <Form>
              <Row>
                <Col lg="6">
                  <FormGroup className="select2-container">
                    <Label>Type</Label>
                    <Select
                      value={selectedGroup}
                      // onChange={handleSelectGroup}
                      options={optionGroup}
                      classNamePrefix="select2-selection"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <FormGroup className="select2-container">
                    <Label>Property</Label>
                    <Select
                      // value={propertySelectedGroup}
                      // onChange={handlePropertySelectGroup}
                      // options={propertyOptionGroup}
                      classNamePrefix="select2-selection"
                    />
                  </FormGroup>
                </Col>
                
              <Button
                color="success"
                className="mr-1"
                onClick={() => setIsMoveIn(!isMoveIn)}
              >
                Start Inspection
              </Button>
              </Row>
            </Form>
          </Col>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewInspection;

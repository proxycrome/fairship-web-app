import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import Loader from '../../../components/Common/Loading';

import Moment from 'moment';
import { Link } from 'react-router-dom';

import { MDBDataTable } from 'mdbreact';
import './datatable.scss';

const PropertiesTable = ({ tableData }) => {
  const [data, setData] = useState(null);
  // const [activeTab, SetActiveTab] = useState('1');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(tableDataHandler());
    setIsLoading(false);
  }, []);

  const tableDataHandler = () => {
    const rowData = tableData?.map((data) => {
      const newData = {
        property: (
          <Link
            to={`/user/${data.id}`}
            // onClick={() => previewHandler(data.id)}
            className="text-dark font-weight-bold"
          >
            <img src={data.indexImage} alt="indexImage" className="avatar-sm rounded mr-2" />
            {`${data.entityLevel}`}
          </Link>
        ),
        type: data.type,
        address: data.address.houseNoAddress,
        state: data.address.state,
        unit: data.unitNo,
        entityLevel: data.entityLevel,
        date: Moment(data.createdAt).format('l'),
        status: (
          <span
            className={`badge badge-${
              data.status === 'ACTIVE' ? 'success' : 'danger'
            }`}
          >
            {data.status}
          </span>
        ),
        rating: (
          <span>
            {' '}
            {[1, 2, 3].map((star) => (
              <i key={star} className="mr-1  fas fa-star text-warning" />
            ))}
          </span>
        ),
        date: Moment(data.createdAt).format('l'),
        action: (
          <span>
            {' '}
            <i className="ri-more-2-fill"></i>{' '}
          </span>
        ),
      };
      return newData;
    });
    return {
      columns: [
        {
          label: 'Properties',
          field: 'property',
          sort: 'asc',
          width: 78,
        },
        {
          label: 'Type',
          field: 'type',
          sort: 'asc',
          width: 60,
        },
        {
          label: 'Address',
          field: 'address',
          sort: 'asc',
          width: 93,
        },
        {
          label: 'State',
          field: 'state',
          sort: 'asc',
          width: 60,
        },
        {
          label: 'Unit No',
          field: 'unit',
          sort: 'asc',
          width: 135,
        },
        {
          label: 'Entity Level',
          field: 'entityLevel',
          sort: 'asc',
          width: 110,
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc',
          width: 120,
        },
        {
          label: 'Action',
          field: 'action',
          sort: 'asc',
          width: 120,
        },
      ],
      rows: rowData,
    };
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              {!isLoading ? (
                <MDBDataTable hover responsive data={data} className="mt-4" />
              ) : (
                <Loader loading={isLoading} />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default PropertiesTable;

import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Card, CardBody, UncontrolledTooltip } from 'reactstrap';

import Loader from '../../../../components/Common/Loading';

import Moment from 'moment';
import { Link } from 'react-router-dom';

import { MDBDataTable } from 'mdbreact';
import '../datatable.scss';

const PropertiesTable = ({ tableData }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const tableDataHandler = useCallback(() => {
    const rowData = tableData?.map((data) => {
      const newData = {
        property: (
          <Link to={`/unit_property/${data.id}`} className="text-dark font-weight-bold">
            <img
              src={data.indexImage}
              alt="indexImage"
              className="avatar-sm rounded mr-2"
            />
            <span className="card-title text-capitalize">
              {`${data.title}`}{' '}
            </span>
          </Link>
        ),
        type: data.type,
        address: data.address.houseNoAddress,
        state: data.address.state,
        price: data?.price?.toLocaleString(),
        feature: data.feature,
        entityLevel: data.entityLevel,
        date: Moment(data.createdAt, "DD-MM-YYYY").format("DD-MM-YYYY"),
        status: (
          <span
            className={`badge badge-${
              data.status === 'ACTIVE' ? 'primary' : 'success'
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
        action: (
          <>
            <div className="d-flex">
              <Link
                to={`/unit_property/${data.id}`}
                className="mr-3 text-primary"
                id="preview"
              >
                <i className="dripicons-preview font-size-18"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="preview">
                Preview
              </UncontrolledTooltip>

              <Link
                to={`/update_single_unit/${data.id}`}
                className="mr-3 text-primary"
                id="edit"
              >
                <i className="fas fa-pen font-size-12"></i>
              </Link>
              <UncontrolledTooltip placement="top" target="edit">
                Edit
              </UncontrolledTooltip>
            </div>
          </>
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
          label: 'Price (₦)',
          field: 'price',
          sort: 'asc',
          width: 60,
        },
        {
          label: 'Feature',
          field: 'feature',
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
  }, [tableData])

  useEffect(() => {
    setData(tableDataHandler());
    setIsLoading(false);
  }, [tableDataHandler]);


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

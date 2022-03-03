import React, { useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import livingRoom from '../../../assets/images/Living.png';

const ServiceRequest = ({ setShowPreview }) => {
  const data = {
    columns: [
      {
        label: 'Property',
        field: 'property',
        width: 150,
      },
      {
        label: 'Description',
        field: 'description',
        width: 100,
      },
      {
        label: 'Date',
        field: 'date',
        width: 100,
      },
      {
        label: 'Status',
        field: 'status',
        width: 100,
      },
    ],
    rows: [
      {
        property: (
          <>
            <Link to="#" className="mr-3" onClick={() => setShowPreview(true)}>
              <img
                className="mr-1"
                src={livingRoom}
                alt="Header Avatar"
                width="70"
                height="60"
              />
              <span> Cosy Studio in the heart of lagos</span>
            </Link>
          </>
        ),
        description: 'Lorem ipsum dolor sit...',
        date: '3rd Jul 2020',
        status: 'Completed',
      },
      {
        property: (
          <>
            <img
              className="mr-1"
              src={livingRoom}
              alt="Header Avatar"
              width="70"
              height="60"
            />
            <span> Cosy Studio in the heart of lagos</span>
          </>
        ),
        description: 'Lorem ipsum dolor sit...',
        date: '3rd Jul 2020',
        status: 'In progress',
      },
      {
        property: (
          <>
            <img
              className="mr-1"
              src={livingRoom}
              alt="Header Avatar"
              width="70"
              height="60"
            />
            <span> Cosy Studio in the heart of lagos</span>
          </>
        ),
        description: 'Lorem ipsum dolor sit...',
        date: '3rd Jul 2020',
        status: 'Completed',
      },
      {
        property: (
          <>
            <img
              className="mr-1"
              src={livingRoom}
              alt="Header Avatar"
              width="70"
              height="60"
            />
            <span> Cosy Studio in the heart of lagos</span>
          </>
        ),
        description: 'Lorem ipsum dolor sit...',
        date: '3rd Jul 2020',
        status: 'In progress',
      },
      {
        property: (
          <>
            <img
              className="mr-1"
              src={livingRoom}
              alt="Header Avatar"
              width="70"
              height="60"
            />
            <span> Cosy Studio in the heart of lagos</span>
          </>
        ),
        description: 'Lorem ipsum dolor sit...',
        date: '3rd Jul 2020',
        status: 'In progress',
      },
    ],
  };

  return (
    <div>
      <MDBDataTable responsive striped bordered data={data} />
    </div>
  );
};

export default ServiceRequest;

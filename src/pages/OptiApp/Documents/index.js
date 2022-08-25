import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Card, CardBody } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDocuments } from '../../../store/actions';
import Loader from '../../../components/Common/Loading/index';

const Document = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  const { loading, documents } = useSelector((state) => state.Document);

  // console.log(documents);

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 100,
      },
      {
        label: 'Property',
        field: 'property',
        width: 150,
      },
      {
        label: 'Type',
        field: 'type',
        width: 100,
      },
      {
        label: 'Date',
        field: 'date',
        width: 100,
      },
    ],
    rows: documents?.map((doc) => ({
      name: (
        <>
          <a href={doc.link} target="_blank" rel="noopener noreferrer">
            <i className=" ri-profile-line font-size-14" />
            <span className="co-name mx-2">{doc.name}</span>
          </a>
        </>
      ),
      property: `${
        doc.property.parentProperty ? doc.property.parentProperty?.title : ''
      } ${doc.property.title}`,
      type: '',
      date: `${doc.createdAt}`,
    })),
  };

  return (
    <div className="page-content">
      <Card>
        <CardBody>
          <h5 className="ml-2 mb-5"> Documents </h5>
          {loading ? (
            <Loader loading={loading} />
          ) : (
            <MDBDataTable responsive striped bordered data={data} />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Document;

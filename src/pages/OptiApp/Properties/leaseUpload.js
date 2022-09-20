import React, { useState } from 'react';
import AxiosInstance from '../../../utils/axiosInstance';
import { Button, Alert } from 'reactstrap';
import { AvForm, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import Uploader from './cardProperty/uploadFile';
const defaultInput = { uploadType: 'default' };

const LeaseUpload = ({ propertyId, closeModal, reloadProperty, name }) => {
  const [msg, setMsg] = useState(null);
  const [uploadField, setUploadField] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = (e, values) => {
    setUploadField(values.uploadType);
  };

  console.log(selectedFile);
  const submitUpload = () => {
    let formData = [{ ...selectedFile[0], documentName: name }];
    let url = `auth/properties/documents/${propertyId}`;
    AxiosInstance.put(url, formData)
      .then((res) => {
        setMsg('upload successfully');
        closeModal(false);
        reloadProperty(true);
      })
      .catch((error) => {
        alert('error found, please refresh');
        console.log(error);
        console.log(error.response);
      });
  };

  const submitPMAUpload = () => {
    let url = "";
    if (name === "LEASE_AGREEMENT") {
      url = `auth/properties/documents/select-pma-generated-lease-agreement-doc/${propertyId}`;
    }

    if (name === "SALE_AGREEMENT") {
      url = `auth/properties/documents/select-pma-generated-sell-agreement-doc/${propertyId}`
    }
    
    AxiosInstance.put(url)
    .then((res) => {
      setMsg('Document uploaded successfully');
      closeModal(false);
      reloadProperty(true);
    })
    .catch((error) => {
      alert('error found, please refresh')
    })
  }

  const capitalize = (str) => {
    return (
      str.split('_').join(' ').charAt(0).toUpperCase() +
      str.split('_').join(' ').slice(1).toLowerCase()
    );
  };

  return (
    <div>
      {!uploadField && (
        <AvForm onValidSubmit={handleSubmit} model={defaultInput}>
          {/* Radios */}
          <AvRadioGroup name="uploadType" required>
            <div className="mb-3">
              <AvRadio
                label={`Use PMA Generated ${capitalize(name)}`}
                value="default"
              />
            </div>
            <div>
              <AvRadio label={`Use your ${capitalize(name)}`} value="upload" />
            </div>
          </AvRadioGroup>
          <Button color="success" type="submit">
            Done
          </Button>
        </AvForm>
      )}

      {uploadField !== null && uploadField === 'default' && (
        <>
          {/* <Alert color="danger text-center">
            {' '}
            The page is under review by the admin, please check back{' '}
          </Alert>
          <span>
            Use PMA Generated Lease Agreement under review, please select other
            option
          </span> */}
          <h5 className='mb-5'>Upload PMA Document</h5>
          <div className="text-center mt-5">
            <button className="btn btn-success" onClick={submitPMAUpload}>
              Done
            </button>
          </div>
        </>
      )}

      {uploadField !== null && uploadField === 'upload' && (
        <>
          <Uploader selectedFile={setSelectedFile} />
          <div className="text-center">
            <button className="btn btn-success" onClick={submitUpload}>
              Done
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LeaseUpload;

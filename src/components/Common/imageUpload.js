import React, { useCallback, useState, useEffect } from 'react';
import { Card, Row, Col, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

//Dropzone
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({
  setFile,
  selectedFiles,
  typeName = 'encodedString',
}) => {
  const [isFileError, setFileError] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [base64File, setBase64File] = useState([]);
  const [selectedUploadFiles, setUploadFile] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    setBase64File([]);
    if (acceptedFiles) {
      handleAcceptedFiles(acceptedFiles);
      setFileError(null);
    }
    if (rejectFiles.length > 0) {
      setFileError('please select proper file and size');
    }
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 5000000,
    accept: 'image/jpeg, image/png',
  });

  const handleAcceptedFiles = (files) => {
    setImageError(null);
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );

    if (files.length < 3) {
      setImageError('Atleast 3 images are required');
    } else {
      setUploadFile(files);
    }

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setBase64File((prevState) => [
          ...prevState,
          { [typeName]: reader.result.split('base64,')[1] },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (base64File.length > 2) {
      setFile(base64File);
    }
  }, [base64File]);

  /**
   * Formats the size
   */
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };
  return (
    <div>
      <h4 className="card-title">
        <i className=" fas fa-star-of-life mr-1 pb-2 text-danger font-size-10" />
        Attach Image(s)
      </h4>
      <span className="text-danger">
        Note: You can select multiple images once
      </span>
      {imageError && (
        <Alert color="danger" className="py-1 mb-2">
          {imageError}
        </Alert>
      )}
      <div {...getRootProps()}>
        <div
          style={{
            minHeight: '100px',
            border: '2px dashed #ced4da',
            background: '#fff',
            borderRadius: '6px',
          }}
        >
          <div className="dz-message needsclick mt-2">
            <input {...getInputProps()} />
            <div>
              <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
            </div>
            {isFileError && (
              <span className="text-danger font-size-12 font-weight-bold">
                {isFileError}
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="card-title-desc">Ensure Image is not more than 5mb</p>

      <div className="dropzone-previews mt-3" id="file-previews">
        <Row className="mb-3">
          {selectedUploadFiles.map((f, i) => {
            return (
              <Col sm={3} key={i}>
                <Card
                  className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                  key={i + '-file'}
                >
                  <div className="p-2">
                    <Row className="d-flex flex-column align-items-center">
                      <Col className="col-auto">
                        <img
                          className="avatar-lg rounded bg-light"
                          alt={f.name}
                          src={f.preview}
                        />
                      </Col>
                      <Col>
                        <p className="text-center">
                          <strong>{f.formattedSize}</strong>
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default ImageUpload;
import React, { useCallback, useState, useEffect } from 'react';
import { Card, Row, Col, } from 'reactstrap';
import { Link } from 'react-router-dom';

//Dropzone
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({
  setFile,
  selectedFile,
  typeName = 'encodedUpload',
}) => {
  const [, setFileError] = useState(null);
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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 250000,
    accept: '.pdf',
  });

  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );

    setUploadFile(files);

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
    selectedFile(base64File);
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
      <div {...getRootProps()}>
        <div className="dropzone">
          <div className="dz-message needsclick mt-2">
            <input {...getInputProps()} />
            <div className="mb-2">
              <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
            </div>
            <span className="text-danger font-size-12">
              Note: you can't select file greater than 250kb
            </span>
          </div>
        </div>
      </div>
      <div className="dropzone-previews mt-3" id="file-previews">
        <Row className="mb-3">
          {selectedUploadFiles.map((f, i) => {
            return (
              <Col sm={12} key={i}>
                <Card
                  className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                  key={i + '-file'}
                >
                  <div className="p-2">
                    <Row className="align-items-center">
                      <Col className="col-auto"></Col>
                      <Col>
                        <Link to="#" className="text-muted font-weight-bold">
                          {f.name}
                        </Link>
                        <p className="mb-0">
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

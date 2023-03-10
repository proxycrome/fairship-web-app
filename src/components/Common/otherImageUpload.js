import React, { useCallback, useState, useEffect } from 'react';
import { Card, Row, Col } from 'reactstrap';

//Dropzone
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({ setFile, selectedFiles }) => {
  const [isFileError, setFileError] = useState(false);
  const [base64File, setBase64File] = useState([]);
  const [selectedUploadFiles, setUploadFile] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    setBase64File([]);
    if (acceptedFiles) {
      handleAcceptedFiles(acceptedFiles);
      setFileError(false);
    }
    if (rejectFiles.length > 0) {
      setFileError(true);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 5000000,
    accept: 'image/jpeg, image/png',
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
          { encodedUpload: reader.result.split('base64,')[1] },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (base64File.length > 0) {
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
      <p className="card-title-desc mb-0 pb-0">Add at least 1 image here</p>
      <span className="text-danger">
        Note: You can select multiple images once
      </span>
      <div {...getRootProps()}>
        <div className="dropzone">
          <div className="dz-message needsclick mt-2">
            <input {...getInputProps()} />
            <div className="mb-3">
              <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
            </div>
            {isFileError && (
              <span className="text-danger font-size-12 font-weight-bold">
                {' '}
                please select proper file and size{' '}
              </span>
            )}
            <h4>Upload at least one image here.</h4>
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
                        {/* <Link to="#" className="text-muted font-weight-bold">
                          {f.name}
                        </Link> */}
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
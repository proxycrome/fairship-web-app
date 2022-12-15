import React, { useState, useEffect, useRef } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import File from "../../../../assets/images/File.png";
import Check from "../../../../assets/images/checked.png";
import Cloud from "../../../../assets/images/Cloud.png";
import Trash from "../../../../assets/images/trash.png";

const DocsUpload = ({ name, documentName, setFile }) => {
  const [base64File, setBase64File] = useState({});
  const fileInputRef = useRef(null);
  const [docName, setDocName] = useState("");

  const handleFileChange = (e, stringName) => {
    const { files } = e.target;

    const encodedFileBase64 = (file) => {
      let reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          setBase64File({
            ...base64File,
            name,
            [stringName]: reader.result.split("base64,")[1],
            title: name === "OTHERS" ? docName : documentName,
          });
        };
        reader.onerror = (error) => {
          console.log("error", error);
        };
      }
    };

    if (files[0]?.size <= 250000 && files[0]?.type === "application/pdf") {
      encodedFileBase64(files[0]);
    }
    e.target.value = null;
  };

  useEffect(() => {
    if (Object.keys(base64File).length > 0) {
      setFile(base64File);
      setDocName("");
    }
  }, [base64File]);

  const handleFileSelect = (e, reference) => {
    e.preventDefault();
    reference.current.click();
  };

  const handleDelete = () => {
    setBase64File({});
  };

  return (
    <div className="d-flex align-items-end">
      {name === "OTHERS" ? (
        <div style={{width: "100%"}}>
          <Label>Title</Label>
          <Input
            type="text"
            className="form-control grey-box-background"
            name="docName"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
          />
        </div>
      ) : (
        <div className="grey-box-background d-flex justify-content-between p-3">
          <div className="d-flex align-items-center">
            <img src={File} alt="file" />
            <h6 className="ml-2 pt-2">{documentName}</h6>
          </div>
          {base64File.encodedUpload ? (
            <div>
              <img
                src={Trash}
                alt="trash"
                width="20"
                height="20"
                className="mr-2"
                onClick={handleDelete}
                style={{ cursor: "pointer" }}
              />
              <img src={Check} alt="check" width="20" height="20" />
            </div>
          ) : null}
        </div>
      )}

      <button
        className="file-button"
        onClick={(e) => handleFileSelect(e, fileInputRef)}
      >
        <img src={Cloud} alt="cloud" />
      </button>
      <input
        type="file"
        className="file"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e, "encodedUpload")}
        accept="application/pdf"
      />
    </div>
  );
};

export default DocsUpload;

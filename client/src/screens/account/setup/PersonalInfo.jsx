import React, { useCallback, useState } from "react";
import AccountSetup from "../../../layouts/AccountSetupLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import Dropzone from "../../../assets/Dropzone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { storage } from "../../../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState("");

  const { _id, role_name } = useSelector((state) => state.auth.userInfo);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = async () => {
    return new Promise((resolve, reject) => {
      const metadata = {
        contentType: file.type,
      };

      const newFileName = `${_id}.${file.name.split(".").pop()}`;
      const storageRef = ref(storage, "Avatar/" + newFileName);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              console.log("Default");
              break;
          }
        },
        (error) => {
          setIsUploading(false);
          switch (error.code) {
            case "storage/unauthorized":
              console.log("User doesn't have permission to access the object");
              break;
            case "storage/canceled":
              console.log("User canceled the upload");
              break;
            case "storage/unknown":
              console.log("Unknown error occurred:", error.serverResponse);
              break;
            default:
              console.log("Default");
              break;
          }
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setDownloadURL(downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      let fileURL = downloadURL;
      if (file) {
        fileURL = await handleUpload();
        const res = await axios.put(
          process.env.REACT_APP_BACKEND_URL + `user/upload-avatar/${_id}`,
          {
            avatar: fileURL,
          }
        );
        console.log(res);
      }
    } catch (error) {
      console.error("Error uploading data:", error);
    } finally {
      setIsUploading(false);
    }
    navigate("/account/setup/profile");
  };

  const handleDelete = () => {
    setFile(null);
    setPreview(null);
    setDownloadURL("");
  };

  return (
    <AccountSetup progress={0}>
      <Form onSubmit={handleSubmit} className="min-vh-100">
        <h4>{role_name === "Company" ? "Logo" : "Avatar"}</h4>
        <Row>
          <Col sm={4}>
            <p>Upload {role_name === "Company" ? "Logo" : "Avatar"}</p>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <img src={Dropzone} alt="Dropzone" />
            </div>
          </Col>
          <Col sm={8}>
            {preview && (
              <div className="position-relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="img-fluid"
                  style={{ maxHeight: "200px" }}
                />
                <Button
                  variant="danger"
                  className="position-absolute top-0 end-0"
                  onClick={handleDelete}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </div>
            )}
          </Col>
        </Row>
        <hr />

        <Button className="mt-4" type="submit" disabled={isUploading}>
          {isUploading ? "Uploading..." : " Next"}
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Form>
    </AccountSetup>
  );
}

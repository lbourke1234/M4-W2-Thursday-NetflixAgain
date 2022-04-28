import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function ErrorMsg() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="danger">
          <Alert.Heading>Ooops!</Alert.Heading>
          <p>
          Something went wrong. Please try again.
          </p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-danger">
              Close
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  export default ErrorMsg;
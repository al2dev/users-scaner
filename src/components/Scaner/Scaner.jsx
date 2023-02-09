import { useState } from "react"
import QrReader from 'react-web-qr-reader'
import "./Scaner.css"

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_ENVIRONMENT
};

const Scaner = (props) => {
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const [data, setData] = useState('Point camera to add');

  const onResultHandler = (result) => {
    (!!result && setData(result?.data));
    props.onScan(result);
  };

  return (
    <div className="qr-container">
      <div className="qr-container__camera">
        <QrReader
          className="qr-container__camera-box"
          constraints={videoConstraints}
          onScan={onResultHandler}
        />
      </div>
    </div>
  );
};

export default Scaner;
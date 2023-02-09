import { useState, useEffect } from 'react'
import Card from '../UI/Card'
import Reader from './Scaner'
import './ScanerBlock.css'

const DEVICES = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i;

const ScanerBlock = (props) => {
  const [deviceType, setDeviceType] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    DEVICES.test(navigator.userAgent) ? setDeviceType("Mobile") : setDeviceType("Desktop");
  });

  const onCancelHandler = () => { setShowForm(!showForm) };
  const onScanHandler = (result) => {
    setShowForm(!showForm);
    props.onResultScan(result);
  };

  if (deviceType === 'Desktop') {
    return (
      <Card className="block-reader">
        <h3>Pleace use mobile device for scan</h3>
      </Card>
    )
  }

  return (
    <Card className="block-reader">
      {(showForm && <div>
        <Scaner className="block-reader__reader" onScan={onScanHandler} />
        <button onClick={onCancelHandler}>Cancel</button>
      </div>)}
      {(!showForm && <button onClick={onCancelHandler}>Scan user</button>)}
    </Card>
  )
}

export default ScanerBlock;

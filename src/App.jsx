import './App.css'
import { useState } from 'react'

import ScanerBlock from './components/Scaner/ScanerBlock'

const INITIAL_DATA = [
  {
    transaction: 1,
    date: Date.now(),
    status: "",
    amount: 1000
  }
]

export default function App() {
  const [receipts, setReceipts] = useState(INITIAL_DATA);

  const onResultScanHandler = (result) => {
    setReceipts([{ date: Date.now(), status: "", amount: result?.data }, ...receipts]);
  };

  return (
    <div>
      <ScanerBlock onResultScan={onResultScanHandler} />
    </div>
  )
}

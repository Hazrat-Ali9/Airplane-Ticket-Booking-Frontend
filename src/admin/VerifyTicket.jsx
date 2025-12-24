import React from "react";
import QRScan from "./qr-reader/qr-reader.component";
import QRScanner from "./qr-reader/QRScanner";
// verify token
const VerifyTicket = () => {
  return (
    <div className="px-[30px] md:px-[30px]">
      <QRScanner />
    </div>
  );
};

export default VerifyTicket;

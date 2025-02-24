import { Lpo } from "@/types/models";
import Image from "next/image";
import React, { useRef } from "react";

interface LpoPrintProps {
  lpo: Lpo;
}

const LpoPrint: React.FC<LpoPrintProps> = ({ lpo }) => {
  const printRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Image
        className="img"
        src="/purchaseChain.png"
        alt="logo"
        height={200}
        width={200}
      />

      <div ref={printRef} className="print-container p-6 bg-white">
        <h1 className="header text-xl font-bold">Local Purchase Order</h1>
        <p>
          <strong>LPO Number:</strong> {lpo.lpoNumber}
        </p>
        <p>
          <strong>Supplier:</strong> {lpo.supplier.name}
        </p>

        <h3 className="text-lg font-bold mt-4">Supply Items</h3>
        <table className="table mt-2">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {lpo.supplyItems.map((item: any) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.unitPrice.toFixed(2)}</td>
                <td>{(item.quantity * item.unitPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-end justify-end w-full">
          <div className="text-right">
            <p>
              <strong>VAT Rate:</strong> {lpo.vatRate}%
            </p>
            <p>
              <strong>Total:</strong> {lpo.total.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="signage">
          <div>
            <h4>Prepared by:</h4>
            <p>
              {lpo.createdBy?.firstName} {lpo.createdBy?.lastName}
            </p>
          </div>
          <div>
            <h4>Signature</h4>
            <p className="line"></p>
          </div>
          <div>
            <h4>Date</h4>
            <p className="line"></p>
          </div>
        </div>

        <div className="signage">
          <div>
            <h4>First Approved by:</h4>
            <p>
              {lpo.firstApprover?.firstName} {lpo.firstApprover?.lastName}
            </p>
          </div>
          <div>
            <h4>Signature</h4>
            <p className="line"></p>
          </div>
          <div>
            <h4>Date</h4>
            <p className="line"></p>
          </div>
        </div>

        {/* <div className="signage">
          <div>
            <h4>Second Approved by:</h4>
            <p>
              {lpo.secondApprover?.firstName} {lpo.secondApprover?.lastName}
            </p>
          </div>
          <div>
            <h4>Signature</h4>
            <p className="line"></p>
          </div>
          <div>
            <h4>Date</h4>
            <p className="line"></p>
          </div>
        </div> */}

        <div className="signage">
          <div>
            <h4>Final Approved by:</h4>
            <p>
              {lpo.finalApprover?.firstName} {lpo.finalApprover?.lastName}
            </p>
          </div>
          <div>
            <h4>Signature</h4>
            <p className="line"></p>
          </div>
          <div>
            <h4>Date</h4>
            <p className="line"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpoPrint;

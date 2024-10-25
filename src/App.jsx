import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseNppkb from "./component/BaseNppkb";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const baseNppkbRef = useRef(null);
  const handlePrintBaseNppkbRef = useReactToPrint({ contentRef: baseNppkbRef });

  return (
    <div>
      <div
        style={{ height: "100vh", gap: "8px" }}
        className="d-flex align-items-center justify-content-center"
      >
        <button className="btn btn-primary" onClick={handlePrintBaseNppkbRef}>
          Print NPPKB
        </button>
        <button className="btn btn-primary" onClick={handlePrintBaseNppkbRef}>
          Print Info PKB
        </button>
      </div>

      <div className="d-none">
        <BaseNppkb ref={baseNppkbRef} />
      </div>
    </div>
  );
}

export default App;

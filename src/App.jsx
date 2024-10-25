import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseNppkb from "./component/BaseNppkb";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Container } from "react-bootstrap";

function App() {
  const baseNppkbRef = useRef(null);
  const handlePrintBaseNppkbRef = useReactToPrint({ contentRef: baseNppkbRef });

  return (
    <div>
      <Container className="mt-3">
        <div
          style={{ height: "100vh", gap: "8px" }}
          className="d-flex flex-column align-items-center "
        >
          <BaseNppkb ref={baseNppkbRef} />
        </div>
      </Container>

      <div className="fixed-bottom">
        <Container
          className="py-3 d-flex align-items-center"
          style={{ backgroundColor: "white", maxWidth: "400px" }}
        >
          <button
            className="btn btn-primary w-100 m-auto"
            onClick={handlePrintBaseNppkbRef}
          >
            Print NPPKB
          </button>
        </Container>
      </div>
    </div>
  );
}

export default App;

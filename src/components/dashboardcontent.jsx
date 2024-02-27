// LIBRARY IMPORT
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { MdArrowOutward, MdArrowUpward } from "react-icons/md";

// ASSETS IMPORT
import report from "../assets/report.png";
import report2 from "../assets/report2.png";
import report3 from "../assets/report3.png";
import excel from "../assets/excel.png";
import pdf from "../assets/pdf.png";

const dashboardcontent = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [fileName, setFileName] = useState("");

  const handleDownload = (context) => {
    if (context === "IND") {
      setFileUrl("src/assets/templates/Template Data - Indonesia.xlsx");
      setFileName("Template Data - Indonesia.xlsx");
    } else if (context === "EN") {
      setFileUrl("src/assets/templates/Template Data - English.xlsx");
      setFileName("Template Data - English.xlsx");
    }
  };

  useEffect(() => {
    if (fileUrl && fileName) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [fileUrl, fileName]);

  return (
    <Container className="p-4">
      <Row>
        <Col xs={8}></Col>
      </Row>
      <Row>
        <Col xs={4}>
          <div className="card-2 mt-2">
            <Row>
              <Col xs={7}>
                <div className="card-white mb-2">
                  <h1>2.000</h1>
                </div>
                <h3>Total Files Processed</h3>
                <Button className="btn btn-light-1 mt-3">
                  <MdArrowOutward size={20} className="me-1" />
                  Learn more
                </Button>
              </Col>
              <Col xs={5}>
                <img src={report} alt="Report" width={100} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={4} className="mt-2">
          <div className="card-3 mt-2">
            <Row>
              <Col xs={7}>
                <div className="card-white mb-2">
                  <h1>2.000</h1>
                </div>
                <h3>Data SKPI Recorded</h3>
                <Button className="btn btn-light-1 mt-3">
                  <MdArrowOutward size={20} className="me-1" />
                  Learn more
                </Button>
              </Col>
              <Col xs={5}>
                <img src={report2} alt="Report" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={4}>
          <div className="card-4 mt-2">
            <Row>
              <Col xs={7}>
                <div className="card-white mb-2">
                  <h1>2.000</h1>
                </div>
                <h3>Data Keyword</h3>
                <Button className="btn btn-light-1 mt-3">
                  <MdArrowOutward size={20} className="me-1" />
                  Learn more
                </Button>
              </Col>
              <Col xs={5}>
                <img src={report3} alt="Report" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={4}>
          <div className="card-4 mt-2">
            <Row>
              <Col xs={7}>
                <h3>File Excel Templates for Bahasa</h3>
                <Button
                  className="btn btn-light-1 mt-3"
                  onClick={() => handleDownload("IND")}
                >
                  <IoMdDownload size={20} className="me-1" />
                  Download
                </Button>
              </Col>
              <Col xs={5}>
                <img src={excel} alt="Report" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={4}>
          <div className="card-4 mt-2">
            <Row>
              <Col xs={7}>
                <h3>File Excel Templates for English</h3>
                <Button
                  className="btn btn-light-1 mt-3"
                  onClick={() => handleDownload("EN")}
                >
                  <IoMdDownload size={20} className="me-1" />
                  Download
                </Button>
              </Col>
              <Col xs={5}>
                <img src={excel} alt="Report" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={4}>
          <div className="card-4 mt-2">
            <Row>
              <Col xs={7}>
                <h3>Download Usage Guide Files</h3>
                <Button className="btn btn-light-1 mt-3" disabled>
                  <IoMdDownload size={20} className="me-1" />
                  Download
                </Button>
              </Col>
              <Col xs={5}>
                <img src={pdf} alt="Report" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default dashboardcontent;

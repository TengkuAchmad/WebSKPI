// LIBRARY IMPORT
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Pagination,
} from "react-bootstrap";
import { useState } from "react";

// ASSETS IMPORT
import FileUpload from "../functions/FileUpload";

import KeywordsCRUD from "./keywordcrud";

const skpicontent = () => {
  const [excelData, setExcelData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = excelData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleUpload = (data) => {
    setExcelData(data);
  };

  
  return (
    <Container className="p-4">
      <KeywordsCRUD />

      <Row className="mt-4">
        <Col xs={12}>
          <div className="card-1 mt-4 text-start">
            <div>
              <h5>Upload File</h5>
            </div>
            <FileUpload onUpload={handleUpload} />
          </div>
        </Col>
      </Row>

      <div className="card-1 mt-5">
        <div>
          <h5>Data Preview</h5>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "10px", textAlign: "center" }}>No.</th>
              <th style={{ textAlign: "center" }}>Data SKPI</th>
            </tr>
          </thead>
          {excelData.length > 0 ? (
            <tbody>
              {currentItems.map((row, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>
                    {index + 1 + (currentPage - 1) * itemsPerPage}.
                  </td>
                  <td>{row}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td>#</td>
                <td style={{ textAlign: "center" }}>No data found!</td>
              </tr>
            </tbody>
          )}
        </Table>
        <Pagination className="custom-pagination">
          {Array.from({
            length: Math.ceil(excelData.length / itemsPerPage),
          }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>

      <Button className="btn btn-custom-1 mt-4">Start Process</Button>
    </Container>
  );
};

export default skpicontent;

// LIBRARY IMPORT
import {
  Table,
  Pagination,
  Button,
  Stack,
  InputGroup,
  Form,
  Container,
} from "react-bootstrap";
import { useState, useEffect } from "react";

// REQUEST IMPORT
import { getKeyword } from "../../api/request";

import { HiFilter, HiPlus } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

// FUNCTION IMPORT
import FindKeywords from "../functions/Keyword/findKeywords";

const keywordscrud = () => {
  const [keywords, setKeywords] = useState([]);
  const [keywordCount, setKeywordCount] = useState(0);
  const [currentPageKeyword, setCurrentPageKeyword] = useState(1);
  const [itemsPerPageKeyword] = useState(3);

  const indexOfLastItemKeyword = currentPageKeyword * itemsPerPageKeyword;
  const indexOfFirstItemKeyword = indexOfLastItemKeyword - itemsPerPageKeyword;
  const currentItemsKeyword = keywords.slice(
    indexOfFirstItemKeyword,
    indexOfLastItemKeyword
  );
  const paginateKeyword = (pageNumberKeyword) =>
    setCurrentPageKeyword(pageNumberKeyword);

  const fetchDataKeywords = async () => {
    try {
      const data = await getKeyword();
      setKeywords(data);
      setKeywordCount(data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDataSearch = (datas) => {
    setKeywords([]);
    setKeywordCount(0);
    setKeywords(datas);
    setKeywordCount(datas.length);
    setCurrentPageKeyword(1);
  };

  useEffect(() => {
    fetchDataKeywords();
  }, []);

  return (
    <>
      <div className="card-1 mt-4">
        <Container>
          <div className="d-flex justify-content-start text-start align-items-center">
            <h5 className="p-0 m-0">Keywords Overview ({keywordCount})</h5>
            <FindKeywords onSearchResult={handleDataSearch} />
            <div className="ms-auto">
              <div className="text-color-primary">
                <Button className="btn-custom-1" type="submit">
                  <HiPlus /> Add New
                </Button>
              </div>
            </div>
          </div>
        </Container>
        <Container className="table-container mt-4">
          <Table>
            <thead>
              <tr>
                <th
                  className="custom-table-1"
                  style={{ width: "50px", fontWeight: "600" }}
                >
                  No.
                </th>
                <th className="custom-table-1" style={{ fontWeight: "600" }}>
                  Keyword
                </th>
                <th className="custom-table-1" style={{ fontWeight: "600" }}>
                  Usage Percentage
                </th>
                <th className="custom-table-1" style={{ fontWeight: "600" }}>
                  Occurences
                </th>
                <th className="custom-table-1" style={{ fontWeight: "600" }}>
                  Stats
                </th>
                <th className="custom-table-1" style={{ fontWeight: "600" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItemsKeyword.map((data, index) => (
                <tr key={index}>
                  <th
                    className="custom-table-1"
                    style={{ textAlign: "center" }}
                  >
                    {index + 1}.
                  </th>
                  <th className="custom-table-1">{data.Keyword}</th>
                  <th className="custom-table-1">{data.Percentage}</th>
                  <th className="custom-table-1">{data.TotalOccurrences}</th>
                  <th className="custom-table-1">{data.TotalOccurrences}</th>
                  <th className="custom-table-1">
                    <Stack direction="horizontal" gap={3}>
                      <Button className="btn btn-warning" size="sm">
                        <AiFillEdit /> Edit
                      </Button>
                      <Button className="btn btn-danger" size="sm">
                        <FaTrash /> Delete
                      </Button>
                    </Stack>
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Pagination className="custom-pagination mt-2">
          {Array.from({
            length: Math.ceil(keywords.length / itemsPerPageKeyword),
          }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPageKeyword}
              onClick={() => paginateKeyword(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </>
  );
};

export default keywordscrud;

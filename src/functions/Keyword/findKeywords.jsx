// LIBRARY IMPORT
import { Form, InputGroup, Button, Spinner, Stack } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { HiFilter } from "react-icons/hi";
import { useState } from "react";

// REQUEST IMPORT
import { findKeyword } from "../../../api/request";

const findKeywords = ({ onSearchResult }) => {
  const [isLoading, setIsloading] = useState(false);

  // PREPARING FORM DATA
  const [formData, setFormData] = useState({
    Payload_DK: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setIsloading(true);

    try {
      const response = await findKeyword(formData);
      onSearchResult(response);
      setIsloading(false);
    } catch (error) {
      setTimeout(() => {
        setIsloading(false);
      }, 3000);
    }
  };
  return (
    <>
      <Form className="ms-3" onSubmit={handleSubmit}>
        <Stack direction="horizontal" gap={3}>
          <InputGroup className="custom-form-1">
            <InputGroup.Text
              style={{
                backgroundColor: "#F6F6F6",
                borderRadius: "20px",
                border: "none",
              }}
            >
              <IoIosSearch size={20} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              name="Payload_DK"
              value={formData.Payload_DK}
              onChange={handleChange}
              className="custom-form-1"
              required
            />
          </InputGroup>
          <Button className="btn-custom-3 ms-3" type="submit">
            {isLoading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="mr-1"
              />
            ) : (
              <>
                <HiFilter size={20} /> Filter
              </>
            )}
          </Button>
        </Stack>
      </Form>
    </>
  );
};

export default findKeywords;

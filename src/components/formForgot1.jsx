// LIBRARY IMPORT
import { Form, Button, InputGroup, Spinner } from "react-bootstrap";
import { BiEnvelope, BiLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// REQUEST IMPORT
import { accountLogin } from "../../api/request";

const formForgot1 = () => {
  // NAVIGATE
  const navigate = useNavigate();

  // SPINNER
  const [isLoading, setIsLoading] = useState(false);

  // PREPARING FORM DATA
  const [formData, setFormData] = useState({
    Email_DA: "",
    Password_DA: "",
  });

  // FORM DATA VALUE ON CHANGE HANDLER
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setIsLoading(true);

    try {
      const response = await accountLogin(formData);
      setTimeout(() => {
        navigate("/dashboard");
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        toast.error("Login failed. Please try again.");
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <>
      <ToastContainer theme="light" style={{ width: "500px" }} />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <BiEnvelope />
            </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="youremail@email.com"
              name="Email_DA"
              value={formData.Email_DA}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>
        <Button className="btn btn-custom-1 mt-2" type="submit">
          {isLoading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="mr-1"
            />
          ) : null}
          {isLoading ? "" : "Send OTP"}
        </Button>
        <div className="text-center mt-2 text-custom-1">
          <a as={Link} href="/register">
            or create new account
          </a>
        </div>
      </Form>
    </>
  );
};

export default formForgot1;

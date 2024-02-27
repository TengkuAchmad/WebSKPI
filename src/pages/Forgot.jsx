// LIBRARY IMPORT
import { Container, Row, Stack } from "react-bootstrap";

// COMPONENTS IMPORT
import FormForgot from "../components/formForgot1";

// ASSETS IMPORT
import forget from "../assets/forget.png";

const Forgot = () => {
  return (
    <Container className="container-1">
      <Row>
        <div className="card-1">
          <div className="card-border mb-3">
            <Stack direction="horizontal">
              <div>
                <p>Dashboard SKPI | Tel-U</p>
                <h2>Forgot your Password ?</h2>
                <h6>Please fill the form below.</h6>
              </div>
              <img src={forget} alt="Say hi" width={100} />
            </Stack>
          </div>
          <FormForgot />
        </div>
      </Row>
    </Container>
  );
};

export default Forgot;

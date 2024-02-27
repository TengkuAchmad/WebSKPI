// LIBRARY IMPORT
import { Container, Row, Stack } from "react-bootstrap";

// COMPONENTS IMPORT
import RegisterForm from "../components/formRegister";

// ASSETS IMPORT
import hands from "../assets/hands.png";

const Register = () => {
  return (
    <Container className="container-1">
      <Row>
        <div className="card-1">
          <div className="card-border mb-3">
            <Stack direction="horizontal">
              <div>
                <p>Dashboard SKPI | Tel-U</p>
                <h2>Welcome !</h2>
                <h6>Sign Up to register your account.</h6>
              </div>
              <img src={hands} alt="Say hi" width={140} />
            </Stack>
          </div>
          <RegisterForm />
        </div>
      </Row>
    </Container>
  );
};

export default Register;

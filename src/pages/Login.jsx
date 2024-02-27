// LIBRARY IMPORT
import { Container, Row, Stack } from "react-bootstrap";

// COMPONENTS IMPORT
import LoginForm from "../components/formLogin";

// ASSETS IMPORT
import hands from "../assets/hands.png";

const Login = () => {
  return (
    <Container className="container-1">
      <Row>
        <div className="card-1">
          <div className="card-border mb-3">
            <Stack direction="horizontal">
              <div>
                <p>Dashboard SKPI | Tel-U</p>
                <h2>Welcome !</h2>
                <h6>Please sign in to continue.</h6>
              </div>
              <img src={hands} alt="Say hi" width={120} />
            </Stack>
          </div>
          <LoginForm />
        </div>
      </Row>
    </Container>
  );
};

export default Login;

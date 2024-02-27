// LIBRARY IMPORT
import { Container, Tabs, Tab } from "react-bootstrap";

// COMPONENTS IMPORT
import DashboardContent from "../components/dashboardcontent";
import SKPIContent from "../components/skpicontent";

const Index = () => {
  return (
    <Container className="mt-4">
      <div className="card">
        <Tabs
          defaultActiveKey="dashboard"
          id="fill-tab-example"
          className="mb-3 tabs-custom"
          fill
        >
          <Tab eventKey="dashboard" title="Dashboard" className="tab-content">
            <DashboardContent />
          </Tab>
          <Tab eventKey="skpi" title="Data SKPI">
            <SKPIContent />
          </Tab>
          <Tab eventKey="result" title="Result">
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default Index;

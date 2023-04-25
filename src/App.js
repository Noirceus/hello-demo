import { Container, Row, Col } from "reactstrap";

import Post from "./components/Post";
import Header from "./components/Header";
import SideCard from "./components/SideCard";

const App = () => (
  <>
    <Header />

    <main className="my-5 py-5">
      <Container className="px-0">
        <Row
          noGutters
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col
            xs={{ order: 1 }}
            md={{ size: 7, offset: 1 }}
            tag="aside"
            className= "pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
          >
            <Post />
          </Col>
          
          <Col
            xs={{ order: 3 }}
            md={{ size: 3, order: 2 }}
            tag="section"
            className= "py-5 mb-5 py-md-0 mb-md-0 mx-auto"
          >
            <SideCard />
          </Col>
        </Row>
      </Container>
    </main>
  </>
);

export default App;
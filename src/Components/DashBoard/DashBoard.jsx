import React from "react";
// import { Nav.Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import User from "../DashBoard/User/User";
import Products from "../DashBoard/Products/Products"
import Orders from "../DashBoard/Orders/Orders"
import Home from "../Home/Home"
import "./Dashboard.css"

const DashBoard = () => {
  return (
    // <div>
    //   <div>
    //     <Link to="/admin/user">User</Link>
    //   </div>
    //   <div>
    //     <Link to="/admin/products">Products</Link>
    //   </div>
    //   <div>
    //     <Link to="/admin/orders">Orders</Link>
    //   </div>
    // </div>
    <div class="container text-center">
    <Tabs
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="nav-dashboard"
  >
    <Tab className="col-dashboard" eventKey="user" title="USERS">
      <User />
    </Tab>
    <Tab className="col-dashboard" eventKey="productos" title="PRODUCTOS">
      <Products />
    </Tab>
    <Tab className="col-dashboard" eventKey="order" title="ORDERS" >
      <Orders/>
    </Tab>
  </Tabs>
    </div>
  );
};

export default DashBoard;




// import Sonnet from '../../components/Sonnet';

// function LeftTabsExample() {
//   return (
//     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//       <Row>
//         <Col sm={3}>
//           <Nav variant="pills" className="flex-column">
//             <Nav.Item>
//               <Nav.Link eventKey="first">Tab 1</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="second">Tab 2</Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Col>
//         <Col sm={9}>
//           <Tab.Content>
//             <Tab.Pane eventKey="first">
//               <Sonnet />
//             </Tab.Pane>
//             <Tab.Pane eventKey="second">
//               <Sonnet />
//             </Tab.Pane>
//           </Tab.Content>
//         </Col>
//       </Row>
//     </Tab.Container>
//   );
// }

// export default LeftTabsExample;
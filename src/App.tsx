// import JournalDetailInquiry from "./screens/journalDetailInquiry/journalDetailInquiry";
// import Headers from "./components/headers/headers";
import NmsProduction_Accounting from "./components/nms";

// function App() {
//   return (
//     <div>
//       <Headers />
//       <NmsProduction_Accounting />

//     </div>
//   );
// }

// export default App;
// import ListEmployeeComponent from "./components/ListEmployeeComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
// import Header from "./components/Header";
import Headers from "./components/headers/headers";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import ViewEmployee from "./components/ViewEmployee";

import Layout from "./components/layout";

function App() {
  return (
    <div>
      <Footer />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<CreateEmployee />} />
          <Route path="/update-employee/:id" element={<UpdateEmployee />} />
          <Route path="/view-employee/:id" element={<ViewEmployee />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

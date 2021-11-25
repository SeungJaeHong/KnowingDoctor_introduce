import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Medical_staff from "./Medical_staff";
import Home from "./Home";
import Medical_search from "./Medical_search";
function AppRouter(props) {
  return (
    <div>

        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="professor" element={<Medical_search />}></Route>
          <Route path="professor">
            <Route path=":name" element={<Medical_staff />}></Route>
          </Route>
        </Routes>

    </div>
  );
}

export default AppRouter;

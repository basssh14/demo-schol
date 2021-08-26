import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import components
//Log in routes
import LandingLogin from "./Components/layout/LandingLogin";
import LandingRegister from "./Components/layout/LandingRegister";
//userSide routes
import UserSide from "./Components/layout/UserSide";
import ParentsST from "./Components/layout/ParentsST";
import ApplicantsSt from "./Components/layout/ApplicantsSt";
import BankSt from "./Components/layout/BankSt";
import ScholarshipsST from "./Components/layout/ScholarshipsST";
import UserPassword from "./Components/layout/UserPassword";
//adminSide routes
import LoginS from "./Components/layout/LoginS";
import Students from "./Components/layout/Students";
import Applications from "./Components/layout/Applications";
import Payments from "./Components/layout/Payments";
import Pay from "./Components/layout/Pay";
import Options from "./Components/layout/Options";
import AdminPass from "./Components/layout/AdminPass";
import NewAdminUser from "./Components/layout/NewAdminUser";

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={LandingLogin} />{" "}
        <Route exact path="/register" component={LandingRegister} />{" "}
        {/* userSide */}
        <Route exact path="/userSide" component={UserSide} />
        <Route exact path="/parentsSt" component={ParentsST} />{" "}
        <Route exact path="/applicantsSt" component={ApplicantsSt} />{" "}
        <Route exact path="/bankSt" component={BankSt} />
        <Route exact path="/scholarshipsSt" component={ScholarshipsST} />{" "}
        <Route exact path="/userPassword" component={UserPassword} />{" "}
        {/* adminSide */}
        <Route exact path="/adminSide" component={LoginS} />{" "}
        <Route exact path="/students" component={Students} />{" "}
        <Route exact path="/applications" component={Applications} />{" "}
        <Route exact path="/payments" component={Payments} />{" "}
        <Route exact path="/pay" component={Pay} />{" "}
        <Route exact path="/options" component={Options} />{" "}
        <Route exact path="/adminPass" component={AdminPass} />{" "}
        <Route exact path="/newAdminUser" component={NewAdminUser} />{" "}
      </Fragment>{" "}
    </Router>
  );
}

export default App;

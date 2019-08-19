import React from "react";
import { Route, Switch } from "react-router-dom";
import main from "../Routes/main";
import about from "../Routes/about"
import contact from "../Routes/contact";
import policy from "../Routes/policy";
import donate from "../Routes/donate";
import advertise from "../Routes/advertise";
import schedule from "../Routes/schedule";

const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={main}/>
        <Route exact path="/about" component={about}/>
        <Route exact path="/contact" component={contact}/>
        <Route exact path="/policy" component={policy}/>
        <Route exact path="/donate" component={donate}/>
        <Route exact path="/advertise" component={advertise}/>
        <Route exact path="/schedule" component={schedule}/>
    </Switch>
)

export default AppRouter;
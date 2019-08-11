import React from "react";
import { Route, Switch } from "react-router-dom";
import main from "../Routes/main";

const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={main}/>
    </Switch>
)

export default AppRouter;
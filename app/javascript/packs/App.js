import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Routes from "./routes";

class App extends React.Component {

    render() {
        const routes = Routes.map((route, index) => {
            return route.component ?
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => <route.component {...props} />}
                />
                : null
        });
        return (
           <play></play>
        );
    }
}


export default App;

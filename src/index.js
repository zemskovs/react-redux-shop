import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/app";
import createStore from "./store";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const store = createStore();

render(
	<BrowserRouter>
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/:id" component />
			</Switch>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

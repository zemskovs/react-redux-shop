import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/app";
import createStore from "./store";
import "semantic-ui-css/semantic.min.css";

const store = createStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

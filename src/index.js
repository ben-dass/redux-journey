import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { fetchTodos } from "./features/todos/todosSlice";
import store from "./store";
import "./api/server";

import "./index.css";

store.dispatch(fetchTodos());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";

import { App } from "components/App";

import { persistor, store } from "./redux/store";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter basename="/goit-react-hw-07-phonebook/">
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<App />
					</PersistGate>
				</Provider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);

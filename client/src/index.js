import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material/styles";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <GoogleOAuthProvider clientId="479543517442-pa6khc7q1frk7tgq4spu7tuqndvl10kn.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();

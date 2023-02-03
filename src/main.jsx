import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./Redux/Store";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-xqizhlc78nb3q524.us.auth0.com"
    clientId="Qb0YHQ91ru6LGhvhAN0jP2cI9q7ZidEy"
    authorizationParams={{
      redirect_uri: window.location.origin + "/home"
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);

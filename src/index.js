import ReactDOM from "react-dom/client";
import App from "./components/App";
import GlobalStyles from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

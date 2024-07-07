import "./App.css";
import MyRoutes from "../routes/MyRoutes";
<<<<<<< HEAD
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <MyRoutes />
    </Fragment>
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder/>

      <MyRoutes />
    </div>
>>>>>>> 17e25bba89206a5d14599880394f0864a3f4c4db
  );
}

export default App;

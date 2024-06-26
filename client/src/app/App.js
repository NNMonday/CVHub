import "./App.css";
import MyRoutes from "../routes/MyRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
     <ToastContainer />
      <MyRoutes />
    </div>
  );
}

export default App;

import "./App.css";
import MyRoutes from "../routes/MyRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder/>

      <MyRoutes />
    </div>
  );
}

export default App;

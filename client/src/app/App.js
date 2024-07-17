import "./App.css";
import MyRoutes from "../routes/MyRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  localStorage.setItem("userId", auth.userInfo.data._id)
  return (
    <div>
      <Toaster position="top-center" reverseOrder />
      <MyRoutes />
    </div>
  );
}

export default App;

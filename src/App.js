import "react-day-picker/dist/style.css";
import { RouterProvider } from "react-router-dom";
// Your App.tsx file
import "react-day-picker/dist/style.css";

import { router } from "./routes/Routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormInput from "./page/form";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<FormInput />}>
        {/* <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

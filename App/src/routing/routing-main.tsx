import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LogInPage, FullScreenPage, DashboardPage } from "../pages/index.tsx";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <header className="container-fluid px-0"></header>
      <main>
        <Routes>
          <Route path="/" element={<LogInPage />}></Route>
          <Route path="dashboard" element={<DashboardPage />}></Route>
          <Route path="fullscreen" element={<FullScreenPage />}></Route>
          {/* <Route path="history" element={<HistoryPage />}></Route> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RoutingMain;

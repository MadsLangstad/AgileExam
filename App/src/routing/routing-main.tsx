import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/dashboard-page.tsx";
import { LogInPage } from "../pages/index.tsx";
import FullScreenPage from "../pages/fullscreen-page.tsx";
import HistoryPage from "../pages/history-page.tsx";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <header className="container-fluid px-0"></header>
      <main>
        <Routes>
          <Route path="/" element={<LogInPage />}></Route>
          <Route path="dashboard" element={<DashBoardPage />}></Route>
          <Route path="fullscreen" element={<FullScreenPage />}></Route>
          <Route path="history" element={<HistoryPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RoutingMain;

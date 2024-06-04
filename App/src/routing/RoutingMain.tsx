import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/DashboardPage.tsx";
import { LogInPage } from "../pages";
import { WeatherCardProvider } from "../contexts/WeatherCardContext.tsx";
import { MediaCardProvider } from "../contexts/MediaCardContext.tsx";
import { BirthdayCardProvider } from "../contexts/BirthdayCardContext.tsx";
import FullScreenPage from "../pages/FullScreenPage.tsx";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <header className="container-fluid px-0"></header>
      <main>
        <WeatherCardProvider>
          <MediaCardProvider>
            <BirthdayCardProvider>
              <Routes>
                <Route path="/" element={<LogInPage />}></Route>
                <Route path="dashboard" element={<DashBoardPage />}></Route>
                <Route path="fullscreen" element={<FullScreenPage />}></Route>
              </Routes>
            </BirthdayCardProvider>
          </MediaCardProvider>
        </WeatherCardProvider>
      </main>
    </BrowserRouter>
  );
};

export default RoutingMain;

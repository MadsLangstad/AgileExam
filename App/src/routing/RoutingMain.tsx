import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/DashboardPage.tsx";
import { LogInPage } from "../pages";
import { WeatherCardProvider } from "../contexts/WeatherCardContext.tsx";
import { MediaCardProvider } from "../contexts/MediaCardContext.tsx";
import { BirthdayCardProvider } from "../contexts/BirthdayCardContext.tsx";
import Navbar from "../components/shared/NavbarNavigation.tsx";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <header className="container-fluid px-0">
        <Navbar />
      </header>
      <main className="container">
        <WeatherCardProvider>
          <MediaCardProvider>
            <BirthdayCardProvider>
              <Routes>
                <Route path="/" element={<LogInPage />}></Route>
                <Route
                  path="dashboard-page"
                  element={<DashBoardPage />}
                ></Route>
              </Routes>
            </BirthdayCardProvider>
          </MediaCardProvider>
        </WeatherCardProvider>
      </main>
    </BrowserRouter>
  );
};

export default RoutingMain;

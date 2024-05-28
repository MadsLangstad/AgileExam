import { LogInPage } from "./pages";
import Navbar from "./components/shared/NavbarNavigation";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <h1 className="text-pink-700">Agile Exam</h1>
      <LogInPage></LogInPage>
    </>
  );
}

export default App;

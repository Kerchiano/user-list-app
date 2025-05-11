import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UsersPage from "@/pages/users";
import PATHS from "@/routes/paths";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen min-w-[479px]">
          <Navbar />

          <main className="flex-1 p-4">
            <Routes>
              <Route path={PATHS.USERS} element={<UsersPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

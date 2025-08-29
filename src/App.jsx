import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Homepage from "./components/pages/Home/Homepage";
import SplashCursor from "./components/molecules/SplashCursor";
function App() {
  return (
    <div className="main mx-auto">
      <SplashCursor />
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;

import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Story from "./components/Story/Story";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Feature />
        <div className="story">
          <Story />
        </div>
        <div className="footerr">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;

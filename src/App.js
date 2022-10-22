import Article from "./components/article/Article";
import Blog from "./components/blog/Blog";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Blog />
      <Article />
      <Footer />
    </div>
  );
}

export default App;

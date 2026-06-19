import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stories from './pages/Stories';
import ArticlePage from './pages/ArticlePage';
import About from './pages/About';
import Blogs from './pages/Blogs'
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
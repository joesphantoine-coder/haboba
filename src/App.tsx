import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Stories from './pages/Stories';
import ArticlePage from './pages/ArticlePage';
import About from './pages/About';
import Donate from './pages/Donate';
import SignIn from './pages/SignIn';
import { useDocumentDirection } from './lib/useDocumentDirection';
import Blogs from './pages/Blogs';

function App() {
  useDocumentDirection();

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:start-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
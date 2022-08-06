
import './App.css';
import Header from './components/Header'
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage'
import CategoriesBar from './components/CategoriesBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Search = () => {
  return (
    <h1>Search pagevhhhnvnnuuuuuuuiuyiyiyiiy</h1>
  );
}

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
      
        <Routes>
            <Route path={'search'} element={<SearchPage/>} />
          {/* </Route> */}
          {/* <Route path="/search" element={<Search />}>
            <Route path="*" element={<Header />} />
          </Route> */}
        </Routes>
      </Router>
      <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
              </div>
    </div>
  );
}

export default App;

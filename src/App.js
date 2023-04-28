import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import { useState,lazy, Suspense } from 'react';
import { Carddata } from './components/data';
import CardGrid from './components/CardGrid';
import SearchPage from './components/SearchPage';
import BioPage from './components/BioPage';
function App() {
  // const [searchText, setSearchText] = useState('');

  // const handleSearchTextChange = (text) => {
  //   setSearchText(text);
  // };

  // const handleClearSearchText = () => {
  //   setSearchText('');
  // };
  // const CardGrid = lazy(() => import('../src/components/CardGrid'));
  return (
    <Router>
    <div className="App">
      {/* <header style={{backgroundColor:"lightgrey",padding:"20px"}}>
        <Header
         searchText={searchText}
         onSearchTextChange={handleSearchTextChange}
         onClearSearchText={handleClearSearchText}/>
      </header>
      <main>
      <Suspense fallback={ <ClipLoader  color="#007bff" size={35} />}>
        <CardGrid data={Carddata} searchText={searchText}/>
        </Suspense>
      </main> */}
      <Routes>
<Route path='/' element={<SearchPage/>}/>
<Route path="/item/:id" element={<BioPage />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

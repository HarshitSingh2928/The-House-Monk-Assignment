import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import { ClipLoader } from 'react-spinners';
import { useState,lazy, Suspense } from 'react';
import { Carddata } from './components/data';
function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleClearSearchText = () => {
    setSearchText('');
  };
  const CardGrid = lazy(() => import('../src/components/CardGrid'));
  return (
    <div className="App">
      <header style={{backgroundColor:"lightgrey",padding:"20px"}}>
        <Header
         searchText={searchText}
         onSearchTextChange={handleSearchTextChange}
         onClearSearchText={handleClearSearchText}/>
      </header>
      <main>
      <Suspense fallback={ <ClipLoader  color="#007bff" size={35} />}>
        <CardGrid data={Carddata} searchText={searchText}/>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

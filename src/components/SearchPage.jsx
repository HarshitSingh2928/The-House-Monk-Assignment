import Header from "./Header";
import { ClipLoader } from 'react-spinners';
import { React,useState,lazy, Suspense } from 'react';
import { Carddata } from "./data";
const SearchPage = () => {
    const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleClearSearchText = () => {
    setSearchText('');
  };
  const CardGrid = lazy(() => import('../components/CardGrid'));
  return (
    <div>
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
  )
}

export default SearchPage
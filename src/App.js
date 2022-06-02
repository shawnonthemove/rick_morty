import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, {useState, useEffect} from 'react';
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";


function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  let [fetchedData, setFetchedData] = useState([]);
  let [ info, setInfo ] = useState({})
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      setInfo(data.info)
      setFetchedData(data.results)
    })()
  }, [api])

  return (
    <div className="App">
      <h1 className='text-center mb-3'>Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>
      <div className='container'>
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={fetchedData}></Card>
            </div>
          </div>
        </div>
      </div>
      <Pagination
      info = {info}
      pageNumber = {pageNumber}
      setPageNumber = {setPageNumber}
      ></Pagination>
    </div>
  );
}

export default App;

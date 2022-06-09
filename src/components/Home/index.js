import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, {useState, useEffect} from 'react';
import Search from "../Search/Search";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";


function Home() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchedData, setFetchedData] = useState([]);
  let [ info, setInfo ] = useState({});
  let speciesTypes = new Set();

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}&status=${status}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      setInfo(data.info)
      setFetchedData(data.results)
    })()
  }, [api])

  // 获取所有可能的species，但是api一次只能获取20个对象，使用下一页进行链接，不好完整获取。
  // useEffect(() => {
  //   (async function() {
  //     let data = await fetch("https://rickandmortyapi.com/api/character").then(res => res.json());
  //     data.results.forEach(item => {
  //       speciesTypes.add(item.species)
  //     });
  //     console.log(data);
  //   })()
  // }, [])

  return (
    <div className="App">
      <h1 className='text-center mb-3'>Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>
      <div className='container'>
        <div className="row">
          <Filter
          pageNumber={pageNumber}
          status={status}
          setStatus={setStatus}
          setGender={setGender}
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
          types={Array.from(speciesTypes)}
          ></Filter>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={fetchedData}></Card>
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

export default Home;

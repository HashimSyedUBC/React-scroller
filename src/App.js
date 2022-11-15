import logo from './logo.svg';
import './App.css';
import HorizontalScroll from "react-scroll-horizontal";
import { useState, useEffect } from 'react';
export default function App (){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_limit=10`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])
  return (
    <div className="App">
      
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <HorizontalScroll>
      {data &&
          data.map(({ id, title,url }) => {
            return(
            <div className='images' key={id} style = {{backgroundImage : `url(${url})`}}>
              <h3>{title}</h3>
            </div>
      )})}
      </HorizontalScroll>
    </div>
  );
}


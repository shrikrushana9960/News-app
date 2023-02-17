import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Card, Divider, List, Skeleton, Col, Row } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./Cards";
function App() {
  const { Meta } = Card;
  const [loading, setLoading] = useState(false);
  const [newData, setNewsData] = useState([]);
  const [page, setPage] = useState(20);
  const getData = async () => {
    setPage(page + 20);
    let data = await axios.get(
      `https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed`
    );
    console.log(data.data)
    setNewsData((item) => [...item, ...data.data]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mainDiv">
    
      <h2 style={{textAlign:"center"}}>News App</h2>
      <div
        id="scrollableDiv"
        style={{
          overflow: "auto",
          padding: "10px 16px",
        }}
      >
       
        <InfiniteScroll
          dataLength={newData.length}
          next={getData}
          hasMore={newData.length < 20}
          loader={
            <Skeleton
              avatar
              paragraph={{
                rows: 1,
              }}
              active
            />
          }
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
       
          <div style={{display:"flex",justifyContent:"center",alignItem:"center",flexWrap:"wrap",flexDirection:"row"}}>
            {newData?.map((item) => (
              <a href={item.link} style={{textDecoration:"none"}}>
                <Cards item={item}></Cards>
              
                </a>
            ))}
          </div>
      
        </InfiniteScroll>
        </div>
     
    </div>
  );
}

export default App;

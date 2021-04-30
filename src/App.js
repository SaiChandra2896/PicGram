import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header/Header";
import FilterSection from "./components/filter/FilterSection";
import Posts from "./components/posts/Posts";

import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("122");
    const fetchData = async () => {
      try {
        const resData = await axios.get(
          "https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json"
        );
        const postData = resData.data.pics;
        // console.log(postData);
        setPosts(postData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <FilterSection />
      <Posts posts={posts} />
    </div>
  );
};

export default App;

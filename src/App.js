import { useEffect } from "react";

//redux
import { Provider } from "react-redux";
import store from "./store";
import { getPosts } from "./actions/posts";

import Header from "./components/header/Header";
import FilterSection from "./components/filter/FilterSection";
import Posts from "./components/posts/Posts";

import "./App.css";

const App = () => {
  useEffect(() => {
    store.dispatch(getPosts());
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <FilterSection />
        <Posts />
      </div>
    </Provider>
  );
};

export default App;

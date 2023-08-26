import logo from './logo.svg';
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import ListTask from "./../src/components/ListTask";
import AddTask from "./../src/components/AddTask";
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Task List</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;

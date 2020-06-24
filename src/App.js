import React from 'react'
import './App.css'
import { Header, Body, Footer, Books, Signin, SendRequest } from './components'
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header /><br />
        <SendRequest /><br />
        <Footer />
      </Provider>
    </div>
  )
}

export default App

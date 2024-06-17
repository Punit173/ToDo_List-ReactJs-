import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Reducer from './Reducer'
import './App.css'
import Addtask from './Addtask'
import Navbar from './Navbar'
import Showtask from './Showtask'

function App() {

  // const store = createStore(Reducer);

  const persistconfig = {
    key : 'root',
    storage
  };

  const persistedReducer = persistReducer (persistconfig,Reducer);

  const store = createStore(persistedReducer);

  const persist = persistStore(store);


  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <Navbar/>
          <Addtask/>
          <Showtask/>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App

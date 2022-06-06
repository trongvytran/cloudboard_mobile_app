import { NavigationContainer } from '@react-navigation/native'
import Main from './components/Main'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import 'react-native-gesture-handler'

import React from 'react'

const store = configureStore({
  reducer: rootReducer,
})

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </Provider>
  )
}

export default App

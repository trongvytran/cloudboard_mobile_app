import { NavigationContainer } from '@react-navigation/native'
import Main from './components/Main'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import 'react-native-gesture-handler'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'

const store = configureStore({
  reducer: rootReducer,
})

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  )
}

export default App

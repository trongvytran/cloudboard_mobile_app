import { NavigationContainer } from '@react-navigation/native'
import Main from './components/Main'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()
import React from 'react'

const store = configureStore({
  reducer: rootReducer,
})

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="main"
            component={Main}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

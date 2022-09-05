import { NavigationContainer } from '@react-navigation/native'
import Main from './components/Main'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { NativeWindStyleSheet } from "nativewind";
import { configureStore } from '@reduxjs/toolkit'
import 'react-native-gesture-handler'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native';
const store = configureStore({
  reducer: rootReducer,
})

const queryClient = new QueryClient()

const App = () => {
  return (
    <StripeProvider
      publishableKey="pk_test_51LahqbKcBtKSrXqk3S2YpANLUn3cuc1AZ29KTR9TLMhUevzrpr4aig2rpKOmR4S8iQ0xhEJDrAwICC6Iqm9YKELm00goglXDRS"
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </Provider>
      </QueryClientProvider>
    </StripeProvider>
  )
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default App

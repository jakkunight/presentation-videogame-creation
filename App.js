import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './components/screens/InitialScreen';
import Introduction from './components/screens/Introduction';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial" >
          <Stack.Screen name="Initial" component={ InitialScreen } options={{ headerShown: false }} />
          <Stack.Screen name="Introduction" component={ Introduction } options={{ headerShown: false }} />
          {/* <Stack.Screen name="" component={  } />
          <Stack.Screen name="" component={  } />
          <Stack.Screen name="" component={  } />
          <Stack.Screen name="" component={  } /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

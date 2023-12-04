import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import QuizScreen from './screens/QuizScreen';
import ResultsScreen from './screens/ResultsScreen';
import ConfettiScreen from './screens/ConfettiScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MapScreen" component={MapScreen} options={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'none'
          }} />
          <Stack.Screen name="QuizScreen" component={QuizScreen} options={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'none'
          }} />
          <Stack.Screen name="ResultsScreen" component={ResultsScreen} options={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'none'
          }} />
          <Stack.Screen name="ConfettiScreen" component={ConfettiScreen} options={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'none'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

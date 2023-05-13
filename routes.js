import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./src/pages/Game";
import HomeScreen from "./src/pages/Home";
import HistoricScreen from "./src/pages/Historic";
import SignInScreen from "./src/pages/SignInScreen";
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen name={"Home"} component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name={"Game"} component={GameScreen} />
      <Stack.Screen name={"Historic"} component={HistoricScreen} />
      <Stack.Screen name={"SignInScreen"} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default Routes;

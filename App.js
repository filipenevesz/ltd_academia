import { StatusBar } from 'expo-status-bar';
import { Login } from './screens/login-page/login';
import HomeScreen from './screens/home/index'

export default function App() {
  return (
    <>
       {/* <Login />  */}
      <HomeScreen/>
      <StatusBar style="auto" />
    </>
  );
}


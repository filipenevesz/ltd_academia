import { StatusBar } from 'expo-status-bar';
import { Login } from './screens/login-page/login';
import { Profile } from './screens/profile/profile';


export default function App() {
  return (
    <>
      <Login />
      <StatusBar style="auto" />
      
    </>
  );
}


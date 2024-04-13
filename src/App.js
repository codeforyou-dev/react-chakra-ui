import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/Login';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Login />
      </Router>
     
    </ChakraProvider>
  );
}

export default App;

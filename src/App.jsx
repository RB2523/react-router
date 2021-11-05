import { BrowserRouter, Route , Switch } from "react-router-dom";

   import Home from "./Home";
   import About from "./About";
   import Contact from "./Contact";

    function App(){

     

      return (
        <BrowserRouter>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/contact" component={Contact} />
        </Switch>
        </BrowserRouter>
      );
     
    }

      

  export default App;
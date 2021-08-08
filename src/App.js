import { Route, Switch } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages";
import About from "./pages/about";
import Menu from "./pages/menu";
 

function App() {
	return (
		<>
			<Navbar />
			 <Switch>
				 <Route path="/" exact component={Home} />
				 <Route path="/about" component={About} />
				 <Route path="/menu" component={Menu} />
			 </Switch>
			<Footer />
		</>
	);
}

export default App;

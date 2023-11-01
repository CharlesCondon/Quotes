import './App.css';
import Home from './components/Home/home';
import Quotes from './components/Quotes/quotes';

function App() {
  	return (
		<div className="App">
			<main>
				<Quotes></Quotes>
				<Home></Home>
			</main>
		</div>
  	);
}

export default App;

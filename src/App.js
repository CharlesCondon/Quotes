import './App.css';
import Home from './components/Home/home';
import Quotes from './components/Quotes/quotes';

function App() {
  	return (
		<div className="App">
			<header className="App-header">
				<Quotes></Quotes>
				<Home></Home>
			</header>
		</div>
  	);
}

export default App;

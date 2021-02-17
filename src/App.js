import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NewsLetter from './components/newsletter/NewsLetter';
import Home from './screens/Home';
import ContactUs from './screens/ContactUs';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Switch>
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/" exact component={Home} />
      </Switch>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;

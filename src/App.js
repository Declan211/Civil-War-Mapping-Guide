
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import './index.css';
import January1861 from './components/Maps/January1861.js';
import January1862 from './components/Maps/January1862.js';
import January1863 from './components/Maps/January1863.js';
import January1864 from './components/Maps/January1864.js';
import January1865 from './components/Maps/January1865.js';
import July1861 from './components/Maps/July1861.js';
import July1862 from './components/Maps/July1862.js';
import July1863 from './components/Maps/July1863.js';
import July1864 from './components/Maps/July1864.js';
import July1865 from './components/Maps/July1865.js';
import Stats from './components/Stats.js';
import ScrollToTop from './components/ScrollToTop.js';
import Sources from './components/Sources.js';


function App() {
  return (
    <>
    <Router>
      
      <Navbar />
      <ScrollToTop>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/jan-1861' exact component={January1861} />
        <Route path='/jan-1862' exact component={January1862} />
        <Route path='/jan-1863' exact component={January1863} />
        <Route path='/jan-1864' exact component={January1864} />
        <Route path='/jan-1865' exact component={January1865} />
        <Route path='/jul-1861' exact component={July1861} />
        <Route path='/jul-1862' exact component={July1862} />
        <Route path='/jul-1863' exact component={July1863} />
        <Route path='/jul-1864' exact component={July1864} />
        <Route path='/jul-1865' exact component={July1865} />
        <Route path='/stats' exact component={Stats} />
        <Route path='/sources' exact component={Sources} />

      </Switch>
      </ScrollToTop>
    </Router>
    </>
  );
}

export default App;

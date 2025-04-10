import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Appshell from './AppShell';
import Home from './Home';
import Words from './Words';
import Texts from './Texts';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Appshell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/words" element={<Words />} />
            <Route path="/texts" element={<Texts />} />
          </Routes>
        </Appshell>
      </Router>
    );
  }
}

export default App;
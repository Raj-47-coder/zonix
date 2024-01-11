import './App.scss';
import './Fonts/Nexa-ExtraLight.ttf';
import './Fonts/Nexa-Heavy.ttf';
import Mainlayout from './Inauth/Mainlayout/Mainlayout';
import Signform from './Outauth/Signform'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/*" element={<Mainlayout />} />
          <Route exact path="/signform" element={<Signform />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

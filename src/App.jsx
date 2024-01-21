import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";

import TicketPage from "./Pages/TicketPage";
import SpeakerPage from "./Pages/SpeakersPages/TanjJain";
import TanjJain from "./Pages/SpeakersPages/TanjJain";
import SudhirKumar from "./Pages/SpeakersPages/SudhirKumar";
import Sampada from "./Pages/SpeakersPages/Sampada";

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Homepage />} ></Route>
        <Route  path="/ticket" element={<TicketPage />} ></Route>
        <Route  path="/tanujain" element={<TanjJain />} ></Route>
        <Route  path="/sudhir" element={<SudhirKumar />} ></Route>
        <Route  path="/sampada" element={<Sampada />} ></Route>
        
        <Route  path="/speaker" element={<SpeakerPage />} ></Route>
      </Routes>
    </>
  )
}

export default App;

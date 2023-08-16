import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordianPage from "./Pages/AccordianPage";
import ButtonPage from "./Pages/ButtonPage";
import CounterPage from "./Pages/CounterPage";
import DropdownPage from "./Pages/DropdownPage";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";

function App() {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-6 gap-5 mt-4">
        <Sidebar />
        <div className="col-span-5">
          <Route path="/acc">
            <AccordianPage />
          </Route>
          <Route path="/drp">
            <DropdownPage />
          </Route>
          <Route path="/btn">
            <ButtonPage />
          </Route>
          <Route path="/modal">
            <ModalPage />
          </Route>
          <Route path="/table">
            <TablePage />
          </Route>
          <Route path="/count">
            <CounterPage initialCount={10} />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import { ListFoodsProvider } from "./context/listFoodsContext";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contacts from "./pages/Contacts";
import Nutrition from "./pages/Nutrition";

function App() {
  return (
    <Routes>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contato" component={Contacts} />
        <ListFoodsProvider>
          <Route path="/cardapio" component={Menu} />
          <Route path="/nutricao" component={Nutrition} />
        </ListFoodsProvider>
      </Switch>
    </Routes>
  );
}

export default App;

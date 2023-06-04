import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterDetail from "./pages/detail";
import Characters from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/character/:id">
          <CharacterDetail />
        </Route>
        <Route path="/">
          <Characters />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

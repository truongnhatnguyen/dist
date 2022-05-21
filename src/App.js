import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import AppCardProduct from "./components/AppCartProduct";
import AppDetail from "./components/AppDetail";
import Banner from "./components/Banner";
import Layout from "./pages/Layout";
function App() {
  console.log(">>>>>>>>>props",<AppCardProduct/>,<AppDetail/>);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Layout>
              <Route exact path="/">
                <Banner />
                <AppCardProduct />
              </Route>
              <Route path="/detail/:id">
                <AppDetail />
              </Route>
            </Layout>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

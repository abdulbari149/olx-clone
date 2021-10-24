import React, { Suspense, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import config from "./config";
import { Layout } from "./components";

import { useTitle } from "./hooks";

interface Props {}

const App: React.FC<Props> = () => {
  const [pageTitle, setPageTitle] = useState("Loading...");
  useTitle(pageTitle);

  function dynamicImport(pageName: string, title: string) {
    setPageTitle(title);
    return React.lazy(() => import(`./pages/${pageName}`));
  }
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div> Loading ... </div>}>
          <Switch>
            {config.pages.map(
              ({ id, name, title, pageProps, ...routeProps }) => (
                <Route
                  key={id}
                  {...routeProps}
                  render={(props) => {
                    const RenderComponent = dynamicImport(name, title);
                    return <RenderComponent />;
                  }}
                />
              )
            )}
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;

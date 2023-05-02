/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import React, { memo, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import routes from "../Routes/routes";

const MainRouter = (props) => {
  return (
    <Router>
      <Suspense
        fallback={
          <Box mt={5} mb={5} display={"flex"} justifyContent={"center"}></Box>
        }
      >
        <Switch>
          <Route
            path={routes.DEFAULT.route}
            component={routes.DEFAULT.component}
            exact
          />
          <Route
            path={routes.PRODUCT.route}
            component={routes.PRODUCT.component}
            exact
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default memo(MainRouter);

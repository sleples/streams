import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact={true} component={StreamList} />
          <Route path="/streams/new" exact={true} component={StreamCreate} />
          <Route path="/streams/edit" exact={true} component={StreamEdit} />
          <Route path="/streams/delete" exact={true} component={StreamDelete} />
          <Route path="/streams/show" exact={true} component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
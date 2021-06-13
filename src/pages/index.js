import * as React from "react";
import Sidebar from "../components/Sidebar";

import '../stylesheets/index.sass'
// markup
const IndexPage = () => {
  return (
    <main>
      Your homepage goes here <Sidebar></Sidebar>
    </main>
  );
};

export default IndexPage;

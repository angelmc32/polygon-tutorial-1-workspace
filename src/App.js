import Layout from "./components/layout/Layout";
import "./styles/styles.css";

import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;

import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";
const App = () => {
  return (
    <Layout>
      <Slidebar />
      <Display />
    </Layout>
  );
};

export default App;

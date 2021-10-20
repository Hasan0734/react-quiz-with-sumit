import Layout from './Layout';
import Signup from './pages/Signup';
import './Styles/App.css';
function App() {
  return (
    <div className="App">
      <Layout >
        {/* <Home /> */}
        <Signup />
      </Layout>

    </div>
  );
}

export default App;

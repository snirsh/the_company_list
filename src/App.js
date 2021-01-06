import logo from './logo.svg';
import './App.css';
import CompanyTable from './CompanyList';

function App() {
  return (
    <div className="App" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
      <CompanyTable/>
    </div>
  );
}

export default App;
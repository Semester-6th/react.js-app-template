import './App.css';
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

function App() {
    let name = 'fahad'
    return (
        <div className="App">
            <ComponentA name={name}/>
            <ComponentB/>
        </div>
    );
}

export default App;

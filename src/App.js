import Login from "./Login";
import Users from "./Users";
export const Introduction = ()=>{
  return <h2>What is React</h2>;
};
function App(){
  return(
    <div>
      <Login/>
      <Users/>
    </div>
  );
};
export default App;
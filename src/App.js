import { useState } from 'react';
import './App.css';
function App() {
const [people,setPeople] = useState([
{
name:"A",
vote:0
},
{
name:"B",
vote:0
},
])
const Ic=(id)=>{
var np = Object.assign([],people)
np[id].vote+=1;
setPeople(np)
}
return (
<div className="App">
<h1>Voting System</h1>
{
people.map((data,index) => {
return(
<div key={index}>
Name : {data.name}
Vote : {data.vote}
<button onClick={()=> Ic(index)}>Click
here</button>
</div>
)
})
}
</div>
);
}
export default App;

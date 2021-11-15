import logo from './logo.svg';
import './App.css';

function App() {

//collections:Array,map,set//
//arrays//arrays store multiple variables based on index//
let friuts = ["apple","banana","orange","guava","sapota","muskmelon"]
console.log(friuts)
//map//map also store multiple variables based on key pairs//below we used get and set//
let friutsMap = new Map()
friutsMap.set("kashmir","apple")
friutsMap.set("TN","banana")
friutsMap.set("MH","orange")
friutsMap.set("Bihar","guava")
friutsMap.set("Gujarat","sapota")
friutsMap.set("up","muskmelon")
console.log(friutsMap)
console.log(friutsMap.get("MH"))
//map methods and properties//
//clear():clear removes all elements in array
//delete():removes an element specified by a key
//has():returns true if a key exists
//key():returns an array
//values():you'll get values
//entries():you'll get both keys&values

//<-----friutsMap.clear()------>
friutsMap.delete("up")
console.log(friutsMap)
console.log(friutsMap.has("Bihar"))
console.log(friutsMap.keys())
console.log(friutsMap.values())
console.log(friutsMap.entries())

//set//set also stores variables but it removes duplicates and accepts only unique values//it is nothing but collections of unique values//
//in below it has removed duplicates and taken only unique values//
//set methods and properties
////clear():clear removes all elements in array
//delete():removes an element specified by a key
//has():returns true if a key exists
//key():returns an array
//values():you'll get values
//entries():you'll get both keys&values
let vegetables = new Set()
vegetables.add("onion")
vegetables.add("tomato")
vegetables.add("beans")
vegetables.add("mirchi")
vegetables.add("carrot")
vegetables.add("bendi")
vegetables.add("bendi")
vegetables.add("bendi")
vegetables.add("bendi")
console.log(vegetables)
vegetables.delete("onion")
console.log(vegetables.keys())
console.log(vegetables.values())
console.log(vegetables.entries())

//forEach():it is a loop we use this for objects
friuts.forEach((fff)=>{console.log(fff)})
//for set
friutsMap.forEach((values,keys)=>
{
 console.log(`map--->values--->${values}`)
 console.log(`map--->keys--->${keys}`)
})





















  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         welcome to react environment
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Collections
        </a>
      </header>
    </div>
  );
}

export default App;

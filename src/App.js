import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Jsx from './Components/Jsx';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBinding from './Components/EventBinding';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import Counter from './Components/Counter';
import NameList from './Components/NameList';
function App() {
  return (
    <div className="App">
       <NameList/>
       {/* <Counter/>
       <UserGreeting/> 
       <ParentComponent/>
       <EventBinding/>
       <Greet name="Peter" heroName="Spiderman"><button><a href='https://www.marvel.com/characters/spider-man-peter-parker'>More About Spiderman</a></button></Greet>
       <Greet name="Bruce" heroName="Hulk"><button><a href='https://www.marvel.com/characters/hulk-bruce-banner'>More About Hulk</a></button></Greet>
       <Greet name="Tony" heroName="IronMan"><button><a href='https://www.marvel.com/characters/iron-man-tony-stark'>More About Ironman</a></button></Greet>
       <Welcome name="Natasha" heroName="Black Widow"><button><a href='https://www.marvel.com/characters/black-widow-natasha-romanoff'>More About Black Widow</a></button></Welcome>
       <Message/>
       <Jsx/>
       <FunctionClick/>
       <ClassClick/>  */}
    </div>
  );
}

export default App;

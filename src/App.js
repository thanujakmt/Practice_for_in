
import './App.css';
import Counter from './Counter/Counter';
import UppercaseCounter from './UpperCaseCount/CountUppercase';
import FindCharacter from './FindCharacter/FindCharacter';
import TodoList from './Todo/Todo';
import ToggleButton from './ToggleButton/ToggleButton';
import Greeting from './PassingData/Greeting';
import ParentList from './PassingData/ParentList';

function App() {
  return (
    <>
      <ToggleButton/>
      <Counter/>
      <FindCharacter />
      <UppercaseCounter/>
      <TodoList/>
      <Greeting/>
      <ParentList/>
    </>
  );
}

export default App;

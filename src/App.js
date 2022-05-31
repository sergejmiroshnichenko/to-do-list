import './App.module.scss';
import AddNote from './components/AddNote/AddNote';
import NoteContainer from './components/NoteContainer/NoteContainer';


function App() {

  return (
        <div className="App">
          <AddNote/>
          <NoteContainer />
        </div>
  );
}

export default App;


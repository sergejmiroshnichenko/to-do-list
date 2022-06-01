import './App.module.scss';
import AddNote from './components/AddNote/AddNote';
import NoteContainer from './components/NoteContainer/NoteContainer';
import {Provider} from 'react-redux';
import store from './store';


function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <AddNote/>
                <NoteContainer/>
            </div>
        </Provider>
    );
}

export default App;


import EntryBar from './EntryBar';
import List from './List';
import '../styles/todo.css';

export default function () {
    return (

        <div className="container">
        <div className="container-bg"></div>
            <div className="centered-container">
            <div className="header">
                <h1>TODO</h1>
                <img className="img-state"/>
            </div>
            <EntryBar />
             <List /> 
            </div>
        </div>
    );
}
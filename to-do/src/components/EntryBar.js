import '../styles/entrybar.css';

export default function EntryBar() {
    return (
        <div className="input-group">
            <div className="rounded-check">
                <input type="checkbox" id="allcheck"></input>
                <label htmlFor="allcheck"></label>
            </div>

            <input type="text" placeholder="Create a new todo..." className="input-box"></input>
        </div>

    );
}
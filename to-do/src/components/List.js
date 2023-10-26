import '../styles/list.css';

export default function List() {
    return (
        <div className="list-box">
            <div className="item-list">
                <div className="item">
                    <div className="rounded-check">
                        <input type="checkbox" id="item1"></input>
                        <label htmlFor="item1"></label>
                    </div>
                    <p>Complete online javascript course</p>
                </div>
                <div className="item">
                    <div className="rounded-check">
                        <input type="checkbox" id="item2"></input>
                        <label htmlFor="item2"></label>
                    </div>
                    <p>Jog around the park three times</p>
                </div>
            </div>
            <div className="list-footer">
                <span>5 items left</span>
                <div className="flex-gap">
                    <a>All</a>
                    <a>Active</a>
                    <a>Completed</a>
                </div>
                <a>Clear Completed</a>
            </div>
        </div>
    );
}
import '../styles/list.css';

export default function List() {
    return (
        <div className="list-box">
                <div class="item-list">
                    <div class="item">

                    </div>
                </div>
                <div class="list-footer">
                    <span>5 items left</span>
                    <div>
                        <a>All</a>
                        <a>Active</a>
                        <a>Completed</a>
                    </div>
                    <a>Clear</a>
                </div>
        </div>
    );
}
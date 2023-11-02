import '../styles/list.css';

import CloseIcon from '../images/icon-cross.svg';

export default function List() {
    return (
        <>
            <div className="list-box">
                <div className="item-list">
                    <div className="item">
                        <div className="flex-row center-align">
                            <div className="rounded-check">
                                <input type="checkbox" id="item1"></input>
                                <label htmlFor="item1"></label>
                            </div>
                            <p className="task">Complete online javascript course</p>
                        </div>
                        <img src={CloseIcon} alt="Image of an x" className="close-icon" />
                    </div>
                    <div className="item">
                        <div className="flex-row center-align">
                            <div className="rounded-check">
                                <input type="checkbox" id="item2"></input>
                                <label htmlFor="item2"></label>
                            </div>
                            <p className="task">Jog around the park three times</p>

                        </div>
                        <img src={CloseIcon} alt="Image of an x" className="close-icon" />
                    </div>
                </div>
                <div className="list-footer">
                    <span>5 items left</span>
                    <div className="flex-gap text-bold">
                        <a className="active-link links">All</a>
                        <a className="links">Active</a>
                        <a className="links">Completed</a>
                    </div>
                    <a className="links">Clear Completed</a>
                </div>
            </div>
            <p class="instructions">Drag and drop to reorder list</p>
        </>
    );
}
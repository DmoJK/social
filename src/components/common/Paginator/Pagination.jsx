import { useState } from 'react';
import s from './Paginator.module.css';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div>
        <div className={s.pages}>
            <span>{portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }} >Prev</button>}</span>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p} className={currentPage === p ? s.selectedPage : undefined}
                        onClick={(e) => { onPageChanged(p); }}>{p} </span>
                })}
            <span>{portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }} >Next</button>}</span>
        </div>
    </div>
};

export default Paginator;
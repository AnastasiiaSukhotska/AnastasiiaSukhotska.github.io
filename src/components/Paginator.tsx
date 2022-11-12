import { useState } from 'react';

type PropsType = {
    totalItemsAmount: number
    countUsers: number
    onPageClick: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator = ({totalItemsAmount, countUsers, onPageClick, portionSize = 10}: PropsType) => {
    let pagesCount = Math.ceil(totalItemsAmount/countUsers);
    let pages: Array<number> = [];
    for (let i=1; i<pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(totalItemsAmount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    if (portionNumber === null ) portionNumber = 1;
    let leftPortionPageNumber = (portionNumber -1) * portionSize +1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return  <div>
        { portionNumber > 1 && <button onClick = {() => {setPortionNumber(portionNumber -1)}}>Privious page</button>}
        {pages
        .filter(p => p<=rightPortionPageNumber&&p>=leftPortionPageNumber)
        .map(p => {
            return <span key={p} onClick={() => onPageClick(p)}>{p} </span>
        })}
                { portionNumber < portionCount && <button onClick = {() => {setPortionNumber(portionNumber + 1)}}>Next page</button>}
    </div>

}
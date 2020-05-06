import React, { useState } from 'react';
import {Pagination} from 'react-bootstrap';

// let PaginationComponent = (totalItemsCount, pageSizs, currentPage, onPageCanged, portionSize) => {
let PaginationComponent = (props) => {
    // console.log('totalItemsCount: '+props.totalItemsCount);
    // console.log('currentPage: '+props.currentPage);
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSizs); //Количество страниц возможных для вывода
    // console.log('Количество страниц возможных для вывода:'+pagesCount)

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;
    // console.log('rightPortionPageNumber:'+rightPortionPageNumber)

    const changePage = (e) => {
        props.onPageCanged(e.target.innerText)
        // console.log(e.target.innerText);
    }

    
    // console.log('portionCount:'+portionCount);
    // console.log('portionNumber:'+portionNumber);
    // console.log('portionSize (количество цифр пагинатроа):'+props.portionSize)
    // console.log('leftPortionPageNumber:'+leftPortionPageNumber)
    // console.log('rightPortionPageNumber:'+rightPortionPageNumber)

    // console.log('render Pagination')

    return (
        <Pagination size="sm">
            {/* <Pagination.First/> */}
            { portionNumber > 1 ? <Pagination.First onClick={()=>{ setPortionNumber(1);}}/> : <Pagination.First disabled/> }
            { portionNumber > 1 ? <Pagination.Prev onClick={()=>{ setPortionNumber(portionNumber - 1);}}/> : <Pagination.Prev disabled/> }

            {/* <Pagination.Prev /> */}
            {/* <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis /> */}

            {/* <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item> */}
            {pages
                .filter(p => p>= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map((p) => {
                    if (p == props.currentPage) {
                        return <Pagination.Item active>{p}</Pagination.Item>
                    }
                    return <Pagination.Item onClick={changePage} >{p}</Pagination.Item>
                })
            
            }

            {/* <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item> */}
            {/* <Pagination.Next /> */}
            
            { portionCount > portionNumber ? <Pagination.Next onClick={()=>{ setPortionNumber(portionNumber + 1);}}/> : <Pagination.Next disabled/> }
            {/* <Pagination.Last /> */}
            { portionCount !== portionNumber ? <Pagination.Last onClick={()=>{ setPortionNumber(portionCount);}}/> : <Pagination.Last disabled/> }
        </Pagination>
    );
}

export default PaginationComponent;
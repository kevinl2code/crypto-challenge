import React from 'react'

const Pagination = (props) => {

    const pageNumbers = () => {
        let array = []
        let i = 1
        while (i <= props.pageCount) {
            array.push(i)
            i++
        }
        return array
    }

    const handleClick = (num) => {
        console.log(num)
        props.setPage(num)
    }
    
    const renderLinks = () => pageNumbers().map((num) => {
        return(
            <div onClick={() => handleClick(num)} key={num}>
                <p className="active item">{num}</p>
            </div>
        )
    })

    return(
        <div className="ui pagination menu">
            {renderLinks()}
        </div>
    )
}

export default Pagination
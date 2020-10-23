import React from 'react'

export default (currency) => {
    const data = Object.entries(currency)
    return data.map((entry) => {
        return(
            <tr>
                <td data-label="Key">{entry[0]}</td>
                <td data-label="Value">{entry[1]}</td>
            </tr>
        )
    })
}
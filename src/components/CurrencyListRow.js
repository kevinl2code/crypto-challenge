import React from 'react'
import { Link } from 'react-router-dom'

const CurrencyListRow = ({ currency }) => {
    return(
        <tr key={currency.id}>
            <td>
                <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
            </td>
        </tr>
    )
}

export default CurrencyListRow
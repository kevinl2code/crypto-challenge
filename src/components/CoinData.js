import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import coinlore from '../apis/coinlore'
import renderCoinData from '../scripts/renderCoinData'

const CoinData = () => {

    const [currency, setCurrency] = useState([])
    
    useEffect(() => {
        const currency = async () => {
            const data = await coinlore.get('ticker/', {
                params: {
                    id: new URLSearchParams(window.location.search).get('id')
                }
            })
            setCurrency(data.data[0])
        }
        currency()      
    }, [])

    return(
        <div className="ui card">
            <div className="content">
                <div className="header">{currency.name}</div>
                <div className="meta">Cryptocurrency</div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCoinData(currency)}
                    </tbody>
                </table>
            </div>
            <Link to='/'>Back to list</Link>
        </div>
    )
}
 
export default CoinData
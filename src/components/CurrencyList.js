
import React, {useEffect, useState} from 'react'

import Pagination from './Pagination'
import coinlore from '../apis/coinlore'
import renderCurrencies from '../scripts/renderCurrencies'

const CurrencyList = () => {
    
    const [currencies, setCurrencies] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
 
    useEffect(() => {
        const currencies = async () => {
            const data = await coinlore.get('tickers/', {
                params: {
                    start: 200,
                    limit: 100
                }
            })
            setCurrencies(data.data.data)
            setPageCount(data.data.data.length / 10)
        }

        currencies()
        
    }, [page])

    return(
        <React.Fragment>
            <table className="ui padded table">
                <thead>
                    <tr>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCurrencies(currencies, page)}
                </tbody>
            </table>
            <div>
                <Pagination pageCount={pageCount} setPage={setPage} />
            </div>

        </React.Fragment>
    )


}

export default CurrencyList
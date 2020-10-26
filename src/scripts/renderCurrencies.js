import React from 'react'
import CurrencyListRow from '../components/CurrencyListRow'

//Shortened by creating a React componenent for the Row.
//Would like to further shorten with an algorythm that can also provide
//for an unlimited number of pages/results per page.
export default (currencies, page) => {
    return currencies.map((currency, index) => {
        if (page === 1 && index < 10) {
            return <CurrencyListRow currency={currency} />
        } else if (page === 2 && index >= 10 && index < 20) {
            return <CurrencyListRow currency={currency} />
        } else if (page === 3 && index >= 20 && index < 30) {
            return <CurrencyListRow currency={currency} />
        } else if (page === 4 && index >= 30 && index < 40) {
            return <CurrencyListRow currency={currency} />
        } else if (page === 5 && index >= 40 && index < 50) {
            return <CurrencyListRow currency={currency} />
        } else if (page === 6 && index >= 50 && index < 60) {
            return <CurrencyListRow currency={currency} />
        } else if (page === 7 && index >= 60 && index < 70) {
            return <CurrencyListRow currency={currency} />
        } else if (page === 8 && index >= 70 && index < 80) {
            return <CurrencyListRow currency={currency} />
        } else if (page === 9 && index >= 80 && index < 90) {
            return <CurrencyListRow currency={currency} />
        } else if (page === 10 && index >= 90 && index < 100) {
            return <CurrencyListRow currency={currency} />
        }
    })
}
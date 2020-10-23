import React from 'react'
import { Link } from 'react-router-dom'

//I'm sure this can shortened substantially.
export default (currencies, page) => {
    return currencies.map((currency, index) => {
        if (page === 1 && index < 10) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        } else if (page === 2 && index >= 10 && index < 20) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        } else if (page === 3 && index >= 20 && index < 30) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        } else if (page === 4 && index >= 30 && index < 40) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        } else if (page === 5 && index >= 40 && index < 50) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        } else if (page === 6 && index >= 50 && index < 60) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        } else if (page === 7 && index >= 60 && index < 70) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        } else if (page === 8 && index >= 70 && index < 80) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        } else if (page === 9 && index >= 80 && index < 90) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        } else if (page === 10 && index >= 90 && index < 100) {
            return (
                <tr key={currency.id}>
                    <td>
                        <Link to={`/coindata?id=${currency.id}`}>{currency.name}</Link>
                    </td>
                </tr>
            )
        }
    })
}
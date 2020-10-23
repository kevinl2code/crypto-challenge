import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CoinData from './CoinData'
import CurrencyList from './CurrencyList'
import Header from './Header'


const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter className="ui container">
                <Header />
                <Switch>   
                    <Route path="/" exact component={CurrencyList} />
                    <Route path="/coindata" component={CoinData} />
                </Switch>  
            </BrowserRouter>
        </div>
    )
}



export default App
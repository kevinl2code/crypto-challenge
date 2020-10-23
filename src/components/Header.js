import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="ui three item borderless menu">
            <h2 className="item">Crypto Guide</h2>
            <Link className="item" to="/">Home</Link>
            <a className="item" href="https://www.coinlore.com/cryptocurrency-data-api">More info</a>
        </div>
    )
}

export default Header
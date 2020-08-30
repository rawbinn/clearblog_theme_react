import React from 'react'

const Header = ({children}) => {
    return (
        <header className="masthead">
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
                {children}
            </div>
            </div>
        </header>
    );
}
export default Header;
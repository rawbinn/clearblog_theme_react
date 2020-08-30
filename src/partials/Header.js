import React from 'react'

const Header = ({children}) => {
    return (
        <header className="masthead">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
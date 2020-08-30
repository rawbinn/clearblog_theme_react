import React from 'react'

const HeaderTitle = ({header}) => {
    return (
        <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
                <h1>{header.title}</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
        </div>
    );
}
export default HeaderTitle;
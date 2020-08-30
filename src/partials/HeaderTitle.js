import React from 'react'

const HeaderTitle = ({header}) => {
    return (
            <div>
                <h1>{header.title}</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
    );
}
export default HeaderTitle;
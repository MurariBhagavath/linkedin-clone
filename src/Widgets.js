import React from "react";
import './Widgets.css'
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("React is awesome", "Top news - 999 readers")}
        {newsArticle("ChatGPT is killing", "AI - 254 readers")}
        {newsArticle("Redux is cool", "Code - 856 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Crypto - 856 readers")}
        {newsArticle("Tesla hits new highs", "cars & auto - 856 readers")}


    </div>;
}

export default Widgets;

import React from 'react'
import './TitleWraper.scss'

const TitleWraper = ({MainTitle,subTitle}) => {
    return (
        <>
            <div className="wraper_title">
                <h1 className="hd dropmsg">{MainTitle}</h1>
                <h2 className="hd1 dropmsg1">
                <strong>{subTitle}</strong>
                </h2>
            </div>
        </>
    )
}
export default TitleWraper
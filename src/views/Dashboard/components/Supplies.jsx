import React from 'react'
import MetamaskFox from '../../../assets/img/metamask-fox.svg';
const Supplies = (props) => {
    return (
        <div className='supply' style={{ display: "flex", gap: "3rem", color: "white", padding: "1rem 1rem 1.2rem .1rem", borderBottom: "solid 1px rgba(195, 197, 203, 0.75)", width: "max-content" }}>
            <span style={{ display: "flex", gap: ".5rem", color: "white", width : "6rem" }}> <span style={{ height: "1.2rem", width: "1.2rem", backgroundColor: "rgba(55, 55, 71, .8)", borderRadius: "2rem", textAlign: "center", padding: "2.5px" }}>{props.icon} </span><span>{props.title}</span></span>
            <span style={{width : "4rem"}}> {props.currentSupply}</span>
            <span style={{width : "3rem"}}> {props.totalSupply}</span>
            <span style={{ display: "flex", flexDirection: "Column", alignItems: "center" }}> ${props.price} <span>{props.priceInBtc} BTC</span> </span>
            <span>
                <img src={MetamaskFox} alt="" />
            </span>
        </div>
    )
}

export default Supplies
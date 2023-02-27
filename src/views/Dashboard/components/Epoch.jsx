import React from 'react'

const Epoch = (props) => {
    return (
        <div style={{color : "white", display:"flex", flexDirection : "column", textAlign:'center', alignItems:'center', width:'10rem'}}>
            <div style={{ display:"flex", flexDirection : "column", borderBottom: "solid 1px rgba(195, 197, 203, 0.75)", width: "max-content", padding:'.5rem'}}>
                <span>Current Epoch</span>
                <span style={{fontSize:"2rem"}}>{props.Epoch}</span>
            </div>
            <div style={{ display:"flex", flexDirection : "column", borderBottom: "solid 1px rgba(195, 197, 203, 0.75)", width: "max-content", padding:'.5rem'}}>
                <span style={{fontSize:"2rem"}}>{props.nextEpoch}</span>
                <span>Next Epoch in</span>
            </div>
            <div style={{ display:"flex", flexDirection : "column", width: "max-content", padding:'.5rem', lineHeight : '1.5'}}>
                <span>Live TWAP: <span style={{color : "rgba(0, 232, 162, 1)"}}>{props.liveTwap}</span></span>
                <span>TVL: <span style={{color : "rgba(0, 232, 162, 1)"}}>{props.TVL}</span></span>
                <span>Last Epoch TWAP: <span style={{color : "rgba(0, 232, 162, 1)"}}>{props.lastEpoch}</span></span>
            </div>
        </div>
    )
}

export default Epoch

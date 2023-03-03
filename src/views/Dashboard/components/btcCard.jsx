import { Button } from '@material-ui/core';
import React from 'react'

import { ReactComponent as Upload } from '../../../assets/img/upload.svg';
import { ReactComponent as Download } from '../../../assets/img/download.svg';
import bomb2 from '../../../assets/img/bomb2.png';

const btcCard = (props) => {
    return (
        <div style={{ color: 'white', marginBottom:`${props.mb}` }}>
            <div style={{ display: 'flex', gap: '1rem', color: 'white', }}>
                <span> {props.icon}</span>
                <div style={{
                    width: '100%', borderBottom: 'solid 1px rgba(195, 197, 203, 0.75)', display: 'flex', justifyContent: 'space-between', alignSelf: 'start'
                }}>
                    <div>
                        <span style={{ fontSize: '1.2rem', color: 'white', fontWeight: '600' }}>{props.title}</span>
                        <span style={{ fontSize: '.8rem', color: 'white', backgroundColor: 'rgba(0, 232, 162, 0.5)', borderRadius: '.5rem', padding: '.2rem', marginLeft: '1rem' }}>Recommended</span>
                        <p style={{ fontSize: '.9rem', fontWeight: '100', marginBottom: '.2rem'}}>{props.subHead}</p>
                    </div>
                    <div style={{ alignSelf: `${props.align}` }}>
                        <span>TVL : {props.TVL}</span>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'right', width: '100%', margin: '1rem 0', display:`${props.stakeDisp}` }}>
                <span> Total Staked:{props.staked}</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', lineHeight: '1.5', justifyContent: 'space-between' }}>
                <span style={{ width: '8rem' }}>Daily returns : <span style={{fontSize:'1.3rem'}}>{props.dailyReturn}%</span></span>
                <span style={{ width: '8rem' }}>Your Stake :<br/>
                 {props.stakeIcon}{props.yourStake} <br/>
                    ≈ ${props.stakeInDollars}
                </span>
                <span style={{ width: '8rem' }}>
                    Earned: <br/>
                    {props.earnedIcon}
                    {props.Earned} <br/>
                    ≈ ${props.earningInDollars}
                </span>
                <div style={{
                    display: 'flex',
                    flexWrap: `${props.btnwrap}`,
                    height:`${props.height}`,
                    alignSelf:`${props.alignSelf}`,
                    gap: '0.5rem',
                    justifyContent: 'center',
                    width: `${props.width}`
                }}>

                    <Button variant='outlined' onClick={props.approve} style={{ borderColor: 'white', borderRadius: '1rem' }}><Upload className="img-download" width={20} height={15}  />Deposit</Button>
                    <Button variant='outlined' onClick={props.onReward} style={{ borderColor: 'white', borderRadius: '1rem' }}><Download className="img-download" width={20} height={15} />Withdraw</Button>
                    <Button variant='outlined' onClick={props.onRedeem} style={{ borderColor: 'white', borderRadius: '1rem' }}><img className='img-bomb2_farm' src={bomb2} alt="" width={15} height={15} />Claim Rewards</Button>
                </div>
            </div>
        </div >
    )
}

export default btcCard
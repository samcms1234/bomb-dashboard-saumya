import React from 'react'
import { Button } from '@material-ui/core';
import BtcCard from './btcCard'
import TokenSymbol from '../../../components/TokenSymbol';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import CountUp from 'react-countup';

const card = {
    backdropFilter: 'blur(2px) saturate(180%)',
        backgroundColor: 'rgba(35, 40, 75, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(114, 140, 223, 1)',
        padding: '1rem 2rem',
        color: 'white',    
        marginTop:'2rem'
}

const BombFarms = () => {
    // const stakedBalance = useStakedBalanceOnBoardroom();
    const TVL = useTotalValueLocked();
    return (

        <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:'2rem' }}>
                <div>
                    <span style={{ fontSize: '1.2rem', color: 'white', fontWeight: '600' }}>Bomb Farms</span>
                    <p style={{ fontSize: '.9rem', fontWeight: '100', marginBottom: '.2rem' }}>Stake your LP tokens in our farms to start earning $BSHARE</p>
                </div>
                <div>
                <Button variant='outlined' style={{ borderColor: 'white', borderRadius: '1rem' }}>Claim All</Button>
                </div>
            </div>
            <BtcCard
                    title="BOMB-BTCB"
                    icon={<TokenSymbol symbol="BOMB-BTCB-LP" size="50" />}    
                    TVL={<CountUp style={{ fontSize: '20px' }} end={TVL} separator="," prefix="$" />}
                    dailyReturn="2"
                    yourStake=" 6.0000 "
                    stakeIcon={<TokenSymbol symbol="BOMB-BTCB-LP" size="20" />}
                    Earned=" 1660.44" 
                    earnedIcon={<TokenSymbol symbol="BSHARE" size="20" />}
                    align="center"
                    stakeDisp="none"
                    btnwrap="nowrap"
                    height="2rem"
                    alignSelf="end"
                    width='auto'
                    mb='1.5rem'
                    />
            <BtcCard
                    title="BSHARE-BNB"
                    icon={<TokenSymbol symbol="BSHARE-BNB-LP" size="50" />}    
                    TVL={<CountUp style={{ fontSize: '20px' }} end={TVL} separator="," prefix="$" />}
                    dailyReturn="2"
                    yourStake=" 6.0000 "
                    stakeIcon={<TokenSymbol symbol="BSHARE-BNB-LP" size="20" />}
                    Earned=" 1660.44" 
                    earnedIcon={<TokenSymbol symbol="BSHARE" size="20" />}
                    align="center"
                    stakeDisp="none"
                    btnwrap="nowrap"
                    height="2rem"
                    alignSelf="end"
                    width='auto'
                    mb='1rem'
                    />
        </div>
    )
}

export default BombFarms
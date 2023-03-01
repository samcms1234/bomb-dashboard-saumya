import React, { useMemo } from 'react';
import TokenSymbol from '../../../components/TokenSymbol';
import { Button } from '@material-ui/core';
import useBondStats from '../../../hooks/useBondStats';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useBombFinance from '../../../hooks/useBombFinance';


const card = {
    backdropFilter: 'blur(2px) saturate(180%)',
        backgroundColor: 'rgba(35, 40, 75, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(114, 140, 223, 1)',
        padding: '1rem 2rem',
        color: 'white',    
        marginTop:'2rem'
}

const Bonds = (props) => {
  const tBondStats = useBondStats();
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const bombFinance = useBombFinance();
  const bondBalance = useTokenBalance(bombFinance?.BBOND);

    return (
        <div style={card}>
            <div style={{ display: 'flex', gap: '1rem', color: 'white'}}>
                <span> <TokenSymbol symbol="BBOND" size="50" /></span>
                <div>
                    <span style={{ fontSize: '1.2rem', color: 'white', fontWeight: '600' }}>Bonds </span>
                    <p style={{ fontSize: '.9rem', fontWeight: '100', marginBottom: '.2rem', color:'rgba(195, 197, 203, 1)'}}>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', gap:'5rem'}}>
                <div style={{display:'flex', gap:'7rem', flex:'3', marginTop:'1.5rem'}}>
                    <div style={{display:'flex', flexDirection:'column', gap:'.8rem'}}>
                        <span style={{color:'rgba(195, 197, 203, 1)'}}>Current Price: (Bomb)^2</span>
                        <span style={{fontSize:'1.3rem'}}>BBond = {Number(tBondStats?.tokenInFtm).toFixed(4)} BTCB</span>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', gap:'.4rem', textAlign:'center'}}>
                        <span>Available to redeem: </span>
                        <span style={{fontSize:'1.7rem',display:'flex', justifyContent:'center'}}>
                          <span><TokenSymbol symbol="BBOND" size="40" /></span><span style={{alignSelf:'center'}}>{getDisplayBalance(bondBalance)}</span> </span>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'column', gap:'1rem', flex:'2'}}>
                    <div style={{display:'flex', gap:'2rem', justifyContent:'space-between', alignItems:'center',borderBottom: 'solid 1px rgba(195, 197, 203, 0.75)',paddingBottom:'1rem'}}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <span>Purchase BBond</span>
                            <span style={{color:'rgba(195, 197, 203, 1)'}}>Bomb is over peg</span>
                        </div>
                        <div>
                            <Button variant='outlined' style={{ borderColor: 'white', borderRadius: '1rem' }}>Purchase</Button>
                        </div>
                    </div>
                    <div style={{display:'flex', gap:'2rem', justifyContent:'space-between', alignItems:'center'}}>
                        <span>
                            Redeem Bomb
                        </span>
                        <div>
                            <Button variant='outlined' style={{ borderColor: 'white', borderRadius: '1rem' }}>Redeem</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bonds
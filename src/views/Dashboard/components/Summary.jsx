import React, { useMemo, useState } from 'react'
import Supplies from './Supplies.jsx';
import Epoch from './Epoch'
import TokenSymbol from '../../../components/TokenSymbol';
import useBombStats from '../../../hooks/useBombStats';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';
import { roundAndFormatNumber } from '../../../0x';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import ProgressCountdown from './ProgressCountdown';
import moment from 'moment';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import CountUp from 'react-countup';
import useCashPriceInEstimatedTWAP from '../../../hooks/useCashPriceInEstimatedTWAP';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';

const card = {
    backdropFilter: 'blur(2px) saturate(180%)',
    backgroundColor: 'rgba(35, 40, 75, 0.75)',
    borderRadius: '12px',
    border: '1px solid rgba(114, 140, 223, 1)',
    padding: '1.5rem 3rem'
}

const language = "en"


const Summary = () => {

    const bombStats = useBombStats();
    const bShareStats = usebShareStats();
    const tBondStats = useBondStats();
    const currentEpoch = useCurrentEpoch();
    const { to } = useTreasuryAllocationTimes();
    const TVL = useTotalValueLocked();
    const cashStat = useCashPriceInEstimatedTWAP();
    const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);

    const bombPriceInDollars = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
    );
    const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);

    const bSharePriceInDollars = useMemo(
        () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
        [bShareStats],
      );
      const bSharePriceInBNB = useMemo(
        () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
        [bShareStats],
      );

      const tBondPriceInDollars = useMemo(
        () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
        [tBondStats],
      );
      const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
      

  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);

  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );

  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const cashPrice = useCashPriceInLastTWAP();
  const bondScale = (Number(cashPrice) / 100000000000000).toFixed(4);
    return (
        <div style={card}>
            <h2 style={{ color: 'white !important', textAlign: 'center', padding: '1rem', fontSize: '1.2rem', fontWeight: '400', textTransform: 'capitalize',borderBottom: "solid 1px rgba(195, 197, 203, 0.75)", marginBottom:'1rem' }}> Bomb Finance Summary</h2>
            <div style={{ display: "flex", justifyContent: 'space-between', flexWrap:'wrap', alignItems:'center', rowGap:'2rem'}}>
                <div>
                    <div style={{color : 'white',display:'flex', gap:'2rem', fontSize:'.9rem', justifyContent:'center'}}>
                        <span>Current Supply</span>
                        <span>Total Supply</span>
                        <span>Price</span>
                    </div>
                    <Supplies
                        icon={<TokenSymbol symbol="BOMB" size="20" />}
                        title="$BOMB"
                        currentSupply={Intl.NumberFormat(language, {notation: "compact"}).format(bombCirculatingSupply)}
                        totalSupply={Intl.NumberFormat(language, {notation: "compact"}).format(bombTotalSupply)}
                        price={bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'}
                        priceInBtc={bombPriceInBNB ? bombPriceInBNB : '-.----'}
                    />
                    <Supplies
                        icon={<TokenSymbol symbol="BSHARE" size="20" />}
                        title="$BSHARE"
                        currentSupply={Intl.NumberFormat(language, {notation: "compact"}).format(bShareCirculatingSupply)}
                        totalSupply={Intl.NumberFormat(language, {notation: "compact"}).format(bShareTotalSupply)}
                        price={bSharePriceInDollars ? bSharePriceInDollars : '-.--'}
                        priceInBtc={bSharePriceInBNB ? bSharePriceInBNB : '-.----'}
                    />
                    <Supplies
                        icon={<TokenSymbol symbol="BBOND" size="20" />}
                        title="$BBOND"
                        currentSupply={Intl.NumberFormat(language, {notation: "compact"}).format(tBondCirculatingSupply)}
                        totalSupply={Intl.NumberFormat(language, {notation: "compact"}).format(tBondTotalSupply)}
                        price={tBondPriceInDollars ? tBondPriceInDollars : '-.--'}
                        priceInBtc={tBondPriceInBNB ? tBondPriceInBNB : '-.----'}
                    />
                </div>
                <div>
                    <Epoch 
                    Epoch={Number(currentEpoch)}
                    nextEpoch={<ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />}
                    TVL={<CountUp end={TVL} separator="," prefix="$" />}
                    liveTwap={scalingFactor}
                    lastEpoch={bondScale || '-'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Summary
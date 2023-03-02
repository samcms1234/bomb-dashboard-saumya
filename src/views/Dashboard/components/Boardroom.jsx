import { Button } from '@material-ui/core'
import React , {useMemo} from 'react'
import BtcCard from './btcCard'
import TokenSymbol from '../../../components/TokenSymbol';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import { getDisplayBalance } from '../../../utils/formatBalance';
import CountUp from 'react-countup';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useBombStats from '../../../hooks/useBombStats';
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR'

import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useBombFinance from '../../../hooks/useBombFinance';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import useRedeemOnBoardroom from '../../../hooks/useRedeemOnBoardroom';
import useWithdrawCheck from '../../../hooks/boardroom/useWithdrawCheck';

const card = {
    upper: {
        backdropFilter: 'blur(2px) saturate(180%)',
        backgroundColor: 'rgba(35, 40, 75, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(114, 140, 223, 1)',
        padding: '1rem 2rem',
        color: 'white',
        flex: '2'
    },
    lower: {
        backdropFilter: 'blur(2px) saturate(180%)',
        backgroundColor: 'rgba(35, 40, 75, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(114, 140, 223, 1)',
        padding: '1rem 2rem',
        color: 'white',
        flex: '1'
    }
}

const Boardroom = () => {
    // const stakedBalance = useStakedBalanceOnBoardroom();
    const totalStaked = useTotalStakedOnBoardroom();
    const TVL = useTotalValueLocked();
    const stakedBalance = useStakedBalanceOnBoardroom();
    const bombStats = useBombStats();
    const boardroomAPR = useFetchBoardroomAPR();
    const earnings = useEarningsOnBoardroom();
    const tokenPriceInDollars = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
      );
    const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);

    const bombFinance = useBombFinance();
    const [approveStatus, approve] = useApprove(bombFinance.BSHARE, bombFinance.contracts.Boardroom.address);
    const { onReward } = useHarvestFromBoardroom();
    const canClaimReward = useClaimRewardCheck();
    const canWithdraw = useWithdrawCheck();
    const { onRedeem } = useRedeemOnBoardroom();
    return (
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div>
                <div>
                    <div style={{ textAlign: 'right' }}>
                        <span><a href="https://docs.bomb.money/welcome-start-here/readme" style={{ color: 'rgba(158, 230, 255, 1)' }}>Read Investment Strategy</a></span>
                    </div>
                    <Button
                        variant='text' href="https://www.bomb.money/" style={{ backgroundColor: 'rgba(0, 173, 232, 0.8)', color: 'black', width: '100%', margin: '.5rem 0', fontWeight: '600', textTransform: 'capitalize', fontSize: '1.1rem' }}> Invest Now </Button>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                        <Button variant='text' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'black', width: '50%', fontWeight: '600', textTransform: 'capitalize', fontSize: '1.1rem' }}>
                            <a
                                href="http://discord.bomb.money/"
                                rel="noopener noreferrer"
                                target="_blank"
                                style={{ textDecoration: 'none', color: '#FFFFFF' }}
                            >
                            Chat on Discord</a> </Button>
                        <Button variant='text' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: 'black', width: '50%', fontWeight: '600', textTransform: 'capitalize', fontSize: '1.1rem' }}> <a
                                href="https://docs.bomb.money/welcome-start-here/readme"
                                rel="noopener noreferrer"
                                target="_blank"
                                style={{ textDecoration: 'none', color: '#FFFFFF' }}
                            >
                            Read Docs</a> </Button>
                    </div>
                </div>
                <div style={card.upper}>
                    <BtcCard
                        title="Boardroom"
                        icon={<TokenSymbol symbol="BSHARE" size="50" />}
                        subHead="Stake BSHARE and earn BOMB every epoch"
                        TVL= {<CountUp style={{ fontSize: '20px' }} end={TVL} separator="," prefix="$" />}
                        staked={Number(getDisplayBalance(totalStaked)).toFixed(2)}
                        dailyReturn={boardroomAPR.toFixed(2)}
                        yourStake={getDisplayBalance(stakedBalance)}
                        stakeInDollars={tokenPriceInDollars}
                        stakeIcon={<TokenSymbol symbol="BSHARE" size="20" />}
                        Earned={getDisplayBalance(earnings)}
                        earningInDollars={earnedInDollars}
                        earnedIcon={<TokenSymbol symbol="BOMB" size="20" />}
                        align="end"
                        btnwrap="wrap"
                        width="13rem"
                        approve={approve}
                        onReward={onReward}
                        onRedeem={onRedeem}
                    />
                </div>
            </div>
            <div style={card.lower}>
                <span>Latest News</span>
            </div>
        </div>
    )
}

export default Boardroom
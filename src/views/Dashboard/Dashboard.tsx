import React from 'react'
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Summary from './components/Summary';
import HomeImage from '../../assets/img/background.jpg';
import { Helmet } from 'react-helmet';
import Boardroom from './components/Boardroom';
import BombFarms from './components/BombFarms';
import Bonds from './components/Bonds';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import { Box, Card, CardContent, Button, Typography, Grid, Paper } from '@material-ui/core';
import ProgressCountdown from '../Boardroom/components/ProgressCountdown';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
import moment from 'moment';
import TokenSymbol from '../../components/TokenSymbol';
import useBombFinance from '../../hooks/useBombFinance';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { roundAndFormatNumber } from '../../0x';
import useBombStats from '../../hooks/useBombStats';
import usebShareStats from '../../hooks/usebShareStats';
import useBondStats from '../../hooks/useBondStats';
import { Bomb as bombTesting } from '../../bomb-finance/deployments/deployments.testing.json';
import { Bomb as bombProd } from '../../bomb-finance/deployments/deployments.mainnet.json';
import CountUp from 'react-countup';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import { ReactComponent as IconDiscord } from '../../assets/img/discord.svg';
import { getDisplayBalance } from '../../utils/formatBalance';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import BShareimg from '../../assets/img/bshare-256.png';
import bsharebnbimg from '../../assets/img/bshare-bnb-LP.png';
import Bombimg from '../../assets/img/bomb1.png';
import BBondimg from '../../assets/img/bbond.png';
import bomb_bitcoin from '../../assets/img/bomb-bitcoin-LP.png';
import useCashPriceInEstimatedTWAP from '../../hooks/useCashPriceInEstimatedTWAP';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import Label from '../../components/Label';
import Value from '../../components/Value';
import useEarningsOnBoardroom from '../../hooks/useEarningsOnBoardroom';
import useStakedBalanceOnBoardroom from '../../hooks/useStakedBalanceOnBoardroom';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';
import bondimg from '../../assets/img/xbomb.png';
import useTokenBalance from '../../hooks/useTokenBalance';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const TITLE = 'bomb.money | Dashboard'

const Dashboard = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Page>
        <BackgroundImage />
              <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Route exact path={path}>
          <Summary/>
          <Boardroom/>
          <BombFarms/>
          <Bonds/>
      </Route>
            
            
      </Page>
    </Switch>
  )
}

export default Dashboard
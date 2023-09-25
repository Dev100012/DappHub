import {
    Grid,
    Box,
    CardActionArea,
    Card,
    Avatar,
    Typography,
    styled,
    useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import Text from 'src/components/Text';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import Label from 'src/components/Label';

const CardActionAreaWrapper = styled(CardActionArea)(
    ({ theme }) => `
      padding: ${theme.spacing(2.5)};
      display: flex;
      align-items: center;
      justify-content: space-between;
  
      .MuiTouchRipple-root {
          opacity: .15;
      }
  
      &:hover {
          .MuiCardActionArea-focusHighlight {
              opacity: .02;
          }
      }
    `
);

function Content() {
    const { t }: { t: any } = useTranslation();
    const theme = useTheme();

    const data = [
        { name: "Mav", link: 'https://app.mav.xyz/', icon: '/static/images/mylogo/mav.png' },
        { name: 'SyncSwap', link: 'https://syncswap.xyz/', color: `${theme.colors.success.main}`, icon: '/static/images/mylogo/syncswap.png' },
        { name: 'SpaceFi', link: 'https://app.spacefi.io/#/home', icon: '/static/images/mylogo/spacefi.png' },
        { name: 'Satis', link: 'https://sat.is/', icon: '/static/images/mylogo/sat.png' },
        { name: 'ZkSync(Velocore)', link: 'https://zksync.velocore.xyz/swap', color: `${theme.colors.success.main}`, icon: '/static/images/mylogo/velocore.png' },
        { name: 'Izumi', link: 'https://izumi.finance/trade/swap', icon: '/static/images/mylogo/izumi.png' },
        { name: 'Mute', link: 'https://app.mute.io/swap', icon: '/static/images/mylogo/mute.png' },
        { name: 'Trade SyncFutures', link: 'https://trade.synfutures.com/', color: `${theme.colors.success.main}`, },
        { name: 'Eralend', link: 'https://app.eralend.com/', icon: '/static/images/mylogo/era.png' },
        { name: 'Xy Finance', link: 'https://app.xy.finance/', icon: '/static/images/mylogo/xy.png' },
        { name: 'Deri', link: 'https://deri.io/#/pro/trade/futures/BTCUSD', icon: '/static/images/mylogo/deri.png' },
        { name: 'OpenOcean Finance', link: 'https://app.openocean.finance/classic', color: `${theme.colors.success.main}`, icon: '/static/images/mylogo/openocean.png' },
        { name: 'Zerolend', link: 'https://app.zerolend.xyz/', risk: true, color: `${theme.colors.warning.main}`, icon: '/static/images/mylogo/zerolend.png' },
        { name: 'Interport', link: 'https://app.interport.fi/324/324/ETH/USDC', color: `${theme.colors.success.main}`, icon: '/static/images/mylogo/interport.svg' },
        { name: 'Onchain Trade', link: 'https://onchain.trade/', icon: '/static/images/mylogo/onchain.svg' },
        { name: 'Unidex Exchange', link: 'https://www.unidex.exchange/', icon: '/static/images/mylogo/unidex.svg' },
        { name: 'Zkswap Finance', link: 'https://zkswap.finance/', icon: '/static/images/mylogo/zkswap.png' },
        { name: 'Zkera', link: 'https://zkera.fi/', risk: true, color: `${theme.colors.warning.main}`, icon: '/static/images/mylogo/zkera.svg' },
        { name: 'Mesprotocol', link: 'https://www.mesprotocol.com/', risk: true, color: `${theme.colors.warning.main}`, icon: '/static/images/mylogo/mes.png' },
        { name: 'Domani Finance', link: 'https://domani.finance/', risk: true, color: `${theme.colors.warning.main}`, icon: '/static/images/mylogo/Domani_logo_white.png' },
        { name: 'Symbiosis Finance', link: 'https://app.symbiosis.finance/', color: `${theme.colors.success.main}`, icon: '/static/images/mylogo/symbosis.png' },
        { name: 'Xbank Finance', link: 'https://www.xbank.finance/', color: `${theme.colors.warning.main}`, icon: '/static/images/mylogo/xbank.png' },
        { name: 'Zkdx', link: 'https://zkdx.io/', icon: '/static/images/mylogo/zkdx.png' },
        { name: 'Satori Finance', link: 'https://satori.finance/', icon: '/static/images/mylogo/satori.svg' },
        { name: 'Hold Station', link: 'https://holdstation.com/', color: `${theme.colors.success.main}` },
        { name: 'Fi Woo', link: 'https://fi.woo.org/', icon: '/static/images/mylogo/woo.png' },
        { name: 'Vesync Finance', link: 'https://app.vesync.finance/swap', icon: '/static/images/mylogo/vs_logo.svg' },
        { name: 'Rollup Finance', link: 'https://www.rollup.finance/', icon: '/static/images/mylogo/rollup.png' },
        { name: 'Reactor Fusion', link: 'https://reactorfusion.xyz/', risk: true, color: `${theme.colors.warning.main}` },
        { name: 'Tavaera', link: 'https://tevaera.com/', icon: '/static/images/mylogo/tecaera.png' },
        { name: 'Crypto Maze', link: 'https://cryptomaze.app/', color: `${theme.colors.success.main}` },
        { name: 'TinyWorlds', link: 'https://tinyworlds.io/' },
        { name: 'Robots Farm', link: 'https://robots.farm/', risk: true, color: `${theme.colors.warning.main}` },
        { name: 'Galaxyblitz World', link: 'https://galaxyblitz.world/', color: `${theme.colors.success.main}` },
        { name: 'The Snkrz', link: 'https://www.thesnkrz.com/', icon: '/static/images/mylogo/SNKRZ.png' },
        { name: 'Bladedao Game', link: 'https://www.bladedao.games/', risk: true, color: `${theme.colors.warning.main}` },














    ]

    return (
        <>
            {data?.map((val, i) => (

                <Grid key={i} item xs={12} md={4}>
                    <Card sx={{ cursor: 'pointer' }} onClick={() => window.open(val.link)}
                    >
                        <CardActionAreaWrapper>
                            <Box display="flex" alignItems="center">
                                <Avatar
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        objectFil: 'contain',
                                        background:val?.color ? val.color: `${theme.colors.primary.lighter}`,
                                        color: `${theme.colors.primary.main}`
                                    }}
                                // src={val.icon}
                                >
                                    {val.icon ?
                                        <img src={val.icon} style={{ objectFit: 'contain', height: 60, width: 60 }} />
                                        :
                                        <SubscriptionsTwoToneIcon />

                                    }
                                </Avatar>
                                <Box ml={1.5}>
                                    <Typography
                                        gutterBottom
                                        variant="subtitle2"
                                        sx={{
                                            fontSize: `${theme.typography.pxToRem(16)}`
                                        }}
                                    >
                                        {val.name}
                                    </Typography>
                                    {val.risk ?
                                        <Typography
                                            sx={{
                                                fontSize: `${theme.typography.pxToRem(14)}`
                                            }}
                                        >
                                            <Label color="error">
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        fontSize: `${theme.typography.pxToRem(11)}`,
                                                        textTransform: 'uppercase',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    {"Risky"}
                                                </Box>
                                            </Label>

                                        </Typography>
                                        : <Typography
                                            sx={{
                                                fontSize: `${theme.typography.pxToRem(14)}`
                                            }}
                                        >
                                            <Label color="success">
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        fontSize: `${theme.typography.pxToRem(11)}`,
                                                        textTransform: 'uppercase',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    {"Less Risk"}
                                                </Box>
                                            </Label>

                                        </Typography>}
                                </Box>
                            </Box>
                            <Typography
                                onClick={() => window.open(val.link)}
                                component="span"
                                color="text.secondary"
                                sx={{
                                    opacity: 0.7,
                                    display: 'flex'
                                }}
                            >
                                <ArrowForwardTwoToneIcon />
                            </Typography>
                        </CardActionAreaWrapper>
                    </Card>
                </Grid>
            ))}

        </>


    )
}

export default Content
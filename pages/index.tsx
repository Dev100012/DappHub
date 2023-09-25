import { Box, Card, Container, Button, styled, Grid, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';
import Highlights from 'src/content/Overview/Highlights';
import LanguageSwitcher from 'src/layouts/BoxedSidebarLayout/Header/Buttons/LanguageSwitcher';
import Footer from 'src/components/Footer';
import PrimarySearchAppBar from '@/components/Appbar';
import Content from '@/components/Content';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  const { t }: { t: any } = useTranslation();


  return (
    <OverviewWrapper>
      <Head>
        <title>DappHub</title>
      </Head>
      <PrimarySearchAppBar />
      <Grid sx={{ p: 2, mt: 0.2 }}>
        <Typography sx={{ fontSize: 16, fontWeight: 600 }}>Zk-Sync Dapps</Typography>
        <Grid sx={{ mt: -1 }} container spacing={2}>
          <Content />
        </Grid>
      </Grid>
      <Footer />
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

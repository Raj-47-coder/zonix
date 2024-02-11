import React from "react";
import { Delivery, Guarantee, Payment, Support } from "../../Zonixzsvgs/Zonixzsvgs";
import { Box, Typography } from "@mui/material";
import Benifit from "../../images/benifit.png";
import './Benifits.scss';
import { useTranslation } from 'react-i18next';

function Benifits() {
  const { t } = useTranslation();

  return (
    <>
      <Box component={'div'} className='container'>
        <Box component={'div'} className='benifits'>
          <Box component={'div'} className='benifits_item'>
            <img src={Benifit} alt={Benifit} className='benifits_deco' />
            <Box component={'div'} className='icon'>
              <Delivery />
            </Box>
            <Box component={'div'} className='content'>
              <Typography component={'h6'}>{t("fastDelivery.title")}</Typography>
              <Typography component={'p'}>{t("fastDelivery.desc")}</Typography>
            </Box>
          </Box>

          <Box component={'div'} className='benifits_item'>
            <img src={Benifit} alt={Benifit} className='benifits_deco' />
            <Box component={'div'} className='icon'>
              <Guarantee />
            </Box>
            <Box component={'div'} className='content'>
              <Typography component={'h6'}>{t("return24.title")}</Typography>
              <Typography component={'p'}>{t("return24.desc")}</Typography>
            </Box>
          </Box>

          <Box component={'div'} className='benifits_item'>
            <img src={Benifit} alt={Benifit} className='benifits_deco' />
            <Box component={'div'} className='icon'>
              <Payment />
            </Box>
            <Box component={'div'} className='content'>
              <Typography component={'h6'}>{t("payment.title")}</Typography>
              <Typography component={'p'}>{t("payment.desc")}</Typography>
            </Box>
          </Box>

          <Box component={'div'} className='benifits_item'>
            <img src={Benifit} alt={Benifit} className='benifits_deco' />
            <Box component={'div'} className='icon'>
              <Support />
            </Box>
            <Box component={'div'} className='content'>
              <Typography component={'h6'}>{t("support.title")}</Typography>
              <Typography component={'p'}>{t("support.desc")}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Benifits;

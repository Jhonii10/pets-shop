import React from "react";
import { alpha, Box, Card, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { fShortenNumber } from "@/utils/formatNumber";


const StyledIcon = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
  }));


const StatCard = ({
    title,
    total,
    icon,
    color = 'primary',
    sx,
    ...other
}) => {
  return (
    <Card
    sx={{
      padding:'24px',
      boxShadow: 0,
      color: (theme) => theme.palette[color].darker,
      bgcolor: (theme) => theme.palette[color].lighter,
      borderRadius:'16px',
      ...sx,
    }}
    {...other}
  >
    <Box marginBottom={'12px'} >
        {icon}
    </Box>

    <Typography variant="subtitle2" >
      {title}
    </Typography>

    <Typography variant="h3">{fShortenNumber(total)}</Typography>

    
  </Card>
  );
};

export default StatCard;


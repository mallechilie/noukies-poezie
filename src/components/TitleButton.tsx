import * as React from 'react';

import Link from 'next/link';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TitleButton() {
  return (
    <Button component={Link} href="/" sx={{ color: 'white', display: 'block' }}>
      <Typography variant="h6">NOUKIES POËZIE</Typography>
    </Button>
  );
}

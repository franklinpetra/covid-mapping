
import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container} >
      <Grid container spacing={3} justify="center" >
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Active cases of COVID-19."
          
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="We can no longer accurately track recovered."
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Recuperated and recorded a negative test."
        />
        
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Deaths directly caused by COVID-19."
        />
      </Grid>
    </div>
  );
};
export default Info;

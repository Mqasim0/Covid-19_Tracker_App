import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    textAlign: 'center',
  },
}));

export default function SearchData({ handleCountryChange }) {
  const classes = useStyles();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch('https://covid19.mathdro.id/api/countries');
      const data = await response.json();
      setCountry(data.countries);
    }
    fetchCountries();
  }, []);

  return (
    <div>
      <Grid container spacing={0} className={classes.gridStyle}>
        <Grid item xs={12} sm={12}>
          <h2> Search Data by country </h2>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl>
            <NativeSelect
              defaultValue=''
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              <option value=''>Global</option>
              {country.map((count, i) => (
                <option key={i} value={count.name}>
                  {count.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

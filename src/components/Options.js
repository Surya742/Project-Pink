import * as React from 'react';
// import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



export default function RowRadioButtonsGroup({updateYesState, updateNoState}) {
  return (
    <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" onClick={() => updateYesState()} />
        <FormControlLabel value="no" control={<Radio />} label="No" onClick={() => updateNoState()}/>

      </RadioGroup>
    </FormControl>
  );
}
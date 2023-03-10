import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import RowRadioButtonsGroup from './Options';
import CustomizedDialogs from './SubmitButton';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  textAlign: 'left'
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');
  const [yesCounter, setYesCounter] = React.useState(0);
  const [noCounter, setNoCounter] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const updateYesState = () => {
    setYesCounter(yesCounter+1);
    console.log("yesCounter: ", yesCounter);
  }

  const updateNoState = () => {
    setNoCounter(noCounter+1);
    console.log("noCounter: ", noCounter);
  }

  return (
    <div style={{marginTop: "7%"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Did you had your first period before 10 years of age?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Have you used hormonal contraception (this includes pills, injections, patches, the implant and MIRENA coil) at any time in the last 3 months?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Question 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Are your periods irregular?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Question 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Do you have more than 6 days bleeding each period?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Question 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Do you have heavy menstrual flow usually?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Question 6</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Do you have lower back pain?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Question 7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Do you have pelvic pain?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Question 8</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Do you have pain on opening your bowels?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>Question 9</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Do you have bleeding from your back passage when opening your bowels?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography>Question 10</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Do you have pain on passing urine?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography>Question 11</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Do you have passing blood issue in your urine?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
          <Typography>Question 12</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Do you feel Nausea more offently?
          </Typography>
          <RowRadioButtonsGroup updateYesState={updateYesState} updateNoState={updateNoState} />
        </AccordionDetails>
      </Accordion>
      <CustomizedDialogs yes = {yesCounter} no = {noCounter} />
    </div>
  );
}
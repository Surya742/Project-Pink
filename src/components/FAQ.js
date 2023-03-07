import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div style={{width: "60%", marginLeft: "auto", marginRight: "auto", textAlign: "left", marginTop: "5%"}}>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What's puberty</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Puberty happens to everyone! It’s a physical change that happens as you become an adult, 
            usually between the ages of 10-14. As a girl, you’ll know you’re going through puberty 
            when you notice your body going through physical changes like more definition in your 
            waistline, development of breasts, and—of course—your first period
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is a period?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Your period is the last part of your monthly cycle. Stage 1 has your body building up 
          blood-rich cells, preparing for pregnancy. Stage 2 is ovulation. Stage 3 is the shedding 
          of the blood-rich membrane, also known as your period. Stage 4 is the length of time of 
          your period, which is usually 3-7 days. Then it starts all over again (unless you get pregnant).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>When will my period start?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Everybody is different, but periods usually start somewhere between the ages of 10-14, and about 50% of girls will start their period by the age of 12. Don’t worry if you start your period earlier or later than your friends—it’s totally normal!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How long will my periods last?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Most girls and women find that periods last for about 5-7 days, and that they get their period approximately once a month. After a couple of years of having your period your body will settle into a pattern that’s unique to you, and you'll be familiar with how many days of bleeding to expect. If you notice that you don’t get your period very often, or if it lasts for longer than 7 days, it might be a good idea to check in with your doctor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I get rid of cramps and pain during my period?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Here are some surefire ways to feel better during your period. Try relaxing with a warm bath or hot water bottle – the warmth will ease overall tension and pain. It’s also important to stay active and eat well to help combat that dreaded bloat that many girls face as a symptom of PMS. If you find that nothing is truly helping you feel better, or that the pain is affecting your schoolwork or ability to enjoy activities overall, you can always talk to your gynaecologist or doctor about other treatments.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How often should I change my pads?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You should change your pad depending on your flow. It may seem like you bleed a lot during your period, but most girls normally lose between 4 and 12 teaspoons of blood during an average period. In the first 1-2 days of your period, you may bleed more heavily and need to change it often. If you are using pads with high absorbing capacity, then you can wear these for as long as 8 hours. Like when you are sleeping at night. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What's discharge?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Vaginal discharge happens to every woman and it is your body's way of keeping your vagina clean and healthy. You’ll notice that discharge tends to changes in both color and appearance over the course of the month, and that normal discharge ranges in color from colorless to yellow and has no smell. If you notice any changes or if you aren’t sure if your discharge is normal, you can always ask your doctor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How will puberty affect my breasts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There’s no one way that puberty will affect your breasts. Some girls see a big increase in their cup size while other girls may see very little change at all. The important thing to remember is that every girl is different, and there’s no “perfect” cup size. Some girls also feel their breasts are sore or more sensitive during puberty—this pain, or lack of pain, is normal.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Will puberty make me feel different?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Puberty is a time when lots of changes are happening to your body, so it’s likely that you might feel a little uncomfortable, shy or moody. Just know that this is completely normal. And while each young woman grows and changes at her own pace, it’s good to share your experience with your friends. You’ll likely be relieved to know you’re not in it alone. Sharing your experiences might actually make it easier for you both to get through this time of big changes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How will I feel when I have my periods?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Some girls feel absolutely normal during their period, while other girls have a lot of period pain such as cramps. Some girls may have very little PMS symptoms, while others may feel tired, bloated and more emotional. It’s important to remember that each person is different and that you can even react differently from month to month.
Things like healthy eating and exercise can help you feel better no matter where you are in your monthly cycle. Try incorporating these things into your daily routine and see how it makes you feel!
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion, { accordionClasses } from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function Content({
  question, answer, numberQuestion
}) {
  const renderList = (list) => {
    return list.map((item, index) => (
      <li key={index}>{item.trim()}</li>
    ))
  }
  return (
    <AccordionGroup
      sx={{
        [`& .${accordionClasses.root}`]: {
          marginTop: '0.5rem',
          transition: '0.2s ease',
          '& button:not([aria-expanded="true"])': {
            transition: '0.2s ease',
            paddingBottom: '0.625rem',
          },
          '& button:hover': {
            background: 'transparent',
          },
        },
        [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
          bgcolor: 'background.level1',
          borderRadius: 'md',
          borderBottom: '1px solid',
          borderColor: 'background.level2',
        },
        '& [aria-expanded="true"]': {
          boxShadow: (theme) => `inset 0 -1px 0 ${theme.vars.palette.divider}`,
        },
      }}
    >
      <Accordion>
        <AccordionSummary>{numberQuestion + '/ ' + question}</AccordionSummary>
        <AccordionDetails>
          
          {Array.isArray(answer) ? renderList(answer) : answer.trim()}
        </AccordionDetails>
      </Accordion>
      
    </AccordionGroup>
  );
}

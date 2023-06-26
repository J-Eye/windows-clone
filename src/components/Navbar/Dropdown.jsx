import { Button, MenuItem, Menu, Box, Typography } from '@mui/material';
import React from 'react';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Dropdown = ({ name, content }) => {
  return (
    <Box sx={{width: '10%'}}>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button sx={{backgroundColor: 'white'}} {...bindTrigger(popupState)} endIcon={<KeyboardArrowDownIcon sx={{color:'black'}}/> }>
           <Typography sx={{ color:'black', textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '.6rem' }}>{name}</Typography> 
          </Button>
          <Menu {...bindMenu(popupState)}>
            {content.map((title, index) => (
              <Box key={index} >
                <MenuItem onClick={popupState.close}>{title}</MenuItem>
              </Box>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
    </Box>
  );
};

export default Dropdown;

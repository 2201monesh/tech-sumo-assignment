import React from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppsIcon from '@mui/icons-material/Apps';
import ViewListIcon from '@mui/icons-material/ViewList';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Body() {
  return (
    <div className='main-body'>
      <div className="upper-body">
        <div className="upper-body-up">
            <h2 style={{marginRight: '40px'}}>My Workspace</h2>
            <PersonAddAlt1Icon fontSize='small' style={{marginRight: '10px'}}  />
            <p style={{marginRight: '22px'}}>Share</p>
            <MoreHorizIcon fontSize='small' />
        </div>
        <div className="upper-body-low">
          <Stack direction='row' spacing={95}>
            <div className="button-left">
                <Button startIcon={<AddIcon />} size='small' style ={{backgroundColor: 'black', textTransform: 'none', color: 'white'}} variant="outlined">Create typeform</Button>
            </div>
            <div className="button-right">
              <Stack direction='row' spacing={2}>
                <Button endIcon={<KeyboardArrowDownIcon />} style={{backgroundColor: 'lightgray', color: 'black'}} size='small' variant="contained">Alphabetical</Button>
                <div className="group-button">
                 <ButtonGroup>
                  <Button startIcon={<AppsIcon />} style={{backgroundColor: 'lightgray', color: 'black'}} size='small' variant="contained">Grid</Button>
                  <Button startIcon={<ViewListIcon />} style={{backgroundColor: 'gray', color: 'black'}} size='small' variant="contained">List</Button>
                 </ButtonGroup> 
                </div>
              </Stack>  
            </div>
          </Stack>
        </div>
      </div>


      <div className="lower-body">
        <div className="table-head">
            <p>Typeform</p>
            <p>Questions</p>
            <p>Responses</p>
            <p>Completion</p>
            <p>Upgraded</p>
            <p>Integrations</p>
        </div>
        <div className="table-body"></div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppsIcon from '@mui/icons-material/Apps';
import ViewListIcon from '@mui/icons-material/ViewList';
import ButtonGroup from '@mui/material/ButtonGroup';
import MainTable from './MainTable';

export default function Body() {

    const [component, setComponent] = useState(["0"]);

    function addComponent() {
        setComponent([...component, "0"])
    }

    function deleteComponent() {
        setComponent([prevState => prevState.pop()])
    }

  return (
    <div className='main-body'>
      <div className="upper-body">
        <div className="upper-body-up">
            <h2 style={{marginRight: '40px'}}>My Workspace</h2>
            <PersonAddAlt1Icon fontSize='small' style={{marginRight: '10px', color: 'gray'}}  />
            <p style={{marginRight: '22px', color: 'gray'}}>Share</p>
            <MoreHorizIcon fontSize='small' style={{color: 'gray'}} />
        </div>
        <div className="upper-body-low">
          <Stack direction='row' spacing={95}>
            <div className="button-left">
                <Button onClick={addComponent} startIcon={<AddIcon />} size='small' style ={{backgroundColor: 'black', textTransform: 'none', color: 'white'}} variant="outlined">Add typeform</Button>
            </div>
            <div className="button-right">
              <Stack direction='row' spacing={2}>
                <Button onClick={deleteComponent} endIcon={<KeyboardArrowDownIcon />} style={{backgroundColor: '#E0E0E0', color: 'black', boxShadow: 'none'}} size='small' variant="contained">Delete Typeform</Button>
                <div className="group-button">
                 <ButtonGroup>
                  <Button startIcon={<AppsIcon />} style={{backgroundColor: '#E0E0E0', color: 'black', boxShadow: 'none'}} size='small' variant="contained">Grid</Button>
                  <Button startIcon={<ViewListIcon />} style={{backgroundColor: '#707070', color: 'white', boxShadow: 'none'}} size='small' variant="contained">List</Button>
                 </ButtonGroup> 
                </div>
              </Stack>  
            </div>
          </Stack>
        </div>
      </div>


      <div className="lower-body">
        <div className="table-head">
           <div className="table-head-left">
             <p>Typeform</p>
           </div>
           <div className="table-head-middle">
             <p>Questions</p>
             <p>Responses</p>
             <p>Completion</p>
             <p>Upgraded</p>
           </div>
           <div className="table-head-right">
             <p>Integrations</p>
           </div>
        </div>

        <div className="table-body">
            {/* <MainTable />
            <MainTable /> */}
            {component.map((item, i) => (<MainTable item={item} />))}
        </div>

      </div>
    </div>
  )
}

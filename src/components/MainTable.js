import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function MainTable(props) {
  return (
    <div>
        <div className="maintable-main">
            <div className="maintable-left">
                <div className="maintable-left-1">
                    <div style={{width: '30px', height: '30px',border: '1px solid gainsboro', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} ></div>
                </div>
                <div className="maintable-left-2">
                    <p>My typeform</p>
                    <p className='font-small' style={{color: 'gray'}}>Created: 21 Oct 2022</p>
                </div>
            </div>

            <div className="maintable-middle">
                <p>{props.item}</p>
                <p style={{color: 'gray'}}>0</p>
                <p>0%</p>
                <p>01 Dec 2022</p>
            </div>

            <div className="maintable-right">
                <p>
                     <div style={{width: '30px', height: '30px', border: '1px solid gainsboro', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'gray'}} >+</div>
                </p>
                <p><MoreHorizIcon style={{color: 'gray'}} /></p>
            </div>

        </div>
    </div>
  )
}

import { Link } from 'react-router-dom';
import * as React from 'react';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function ServicesList({data}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List
      sx={{ width: '150px', maxWidth: 360}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <div className='ServiceList-container'>
        <Link to={data.menuPaths.services} className='Nav-menu-item' onMouseEnter={handleOpen}>{data.menuItems.services}</Link>
        <button className='ServiceList-button'> {open ? <ExpandLess /> : <ExpandMore onMouseEnter={handleOpen} onMouseLeave={handleClose} />}</button>
      </div>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List onMouseLeave={handleClose} component="div" disablePadding>
            <Link className='Nav-menu-item Services-name-text' to={data.menuPaths.firstservice}>{data.menuItems.firstservice}</Link> <br/>
            <Link className='Nav-menu-item Services-name-text' to={data.menuPaths.secondservice}>{data.menuItems.secondservice}</Link>
        </List>
      </Collapse>
    </List>
  );
}



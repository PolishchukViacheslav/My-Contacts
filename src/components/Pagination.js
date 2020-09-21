import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux';
import { selectPagesCount } from '../features/reduxSlices/paginationSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const PaginationRounded = () => {
  const classes = useStyles();
  const pages = useSelector(selectPagesCount);
  console.log('pages', pages);
  const handleClick = (event, val) => {
    console.log('event', val);
  }

  return (
    <div className={classes.root}>
      <Pagination count={pages} shape="rounded" onChange={handleClick}/>
      {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
    </div>
  );
}
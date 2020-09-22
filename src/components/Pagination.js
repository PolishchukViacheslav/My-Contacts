import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { selectPagesCount, selectPerPage, setPrepContSlice } from '../features/reduxSlices/paginationSlice';
import { selectPreparedContacts } from '../features/reduxSlices/filterSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const PaginationRounded = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pages = useSelector(selectPagesCount);
  const perPage = useSelector(selectPerPage);
  const contacts = useSelector(selectPreparedContacts);
  
  const handleClick = (event, page) => {
    if (pages === 1) {
      return
    }
    const startIndex = perPage * (page - 1);
    const endIndex = startIndex + perPage; 
    const contactsSlice = contacts.slice(startIndex, endIndex);
    dispatch(setPrepContSlice(contactsSlice));
    console.log('event', page);
  }

  return (
    <div className="contacts__pagination">
      <div className={classes.root}>
        <Pagination count={pages} shape="rounded" onChange={handleClick}/>
      </div>
    </div>
  );
}
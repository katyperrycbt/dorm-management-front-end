import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch, useSelector } from 'react-redux';
import { getDashboard, editDashboard } from '../../actions/admin.dashboard';

import useStyles from './styles';
import { TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import { useHistory } from 'react-router-dom';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));


export default function Dashboard() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [whatDatabase, setWhatDatabase] = React.useState('student-information');
  const profile = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const [cell, setCell] = React.useState(null);

  const dispatch = useDispatch();

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Student Accounts', value: 'student-information', current: 'student-information' === whatDatabase ? true : false },
    { key: 1, label: 'Utility Bills', value: 'utility', current: 'utility' === whatDatabase ? true : false },
    { key: 2, label: 'Resident Bills', value: 'resident', current: 'resident' === whatDatabase ? true : false },
    { key: 3, label: 'Admin Accounts', value: 'admin-accounts', current: 'admin-accounts' === whatDatabase ? true : false },
    { key: 4, label: 'Fix Requests', value: 'fix-request', current: 'fix-request' === whatDatabase ? true : false },
    { key: 5, label: 'Return Requests', value: 'return-request', current: 'leaving-request' === whatDatabase ? true : false },
    { key: 6, label: 'Room', value: 'room', current: 'room' === whatDatabase ? true : false },
    { key: 7, label: 'StayInDorm/SA', value: 'stayindorm', current: 'stayindorm' === whatDatabase ? true : false },
    { key: 8, label: 'ResidentInfo/SA', value: 'residentinfo', current: 'residentinfo' === whatDatabase ? true : false },
    { key: 9, label: 'ParentInfo/SA', value: 'parentinfo', current: 'parentinfo' === whatDatabase ? true : false },
    { key: 10, label: 'Insurance/SA', value: 'insurance', current: 'insurance' === whatDatabase ? true : false },
    { key: 11, label: 'StudentList/R', value: 'studentlist', current: 'studentlist' === whatDatabase ? true : false },
    { key: 12, label: 'Power/UB', value: 'power', current: 'power' === whatDatabase ? true : false },
    { key: 13, label: 'Water/UB', value: 'water', current: 'water' === whatDatabase ? true : false },
  ]);

  useEffect(() => {
    dispatch(getDashboard("student-information"));
  }, [dispatch]);

  let rows = useSelector((state) => state.dashboard);

  if (!profile) {
    history.push('/login');
    return <></>;
  }

  var myObject = rows[0] || {};
  var keyNames = Object.keys(myObject);

  let headCells = [];

  keyNames.forEach((item) => {
    headCells.push({ id: item, numberic: false, disablePadding: false, label: item });
  });

  const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            {whatDatabase}
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Add new record">
            <IconButton color="secondary" aria-label="new record">
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {headCells.map((headCell, index) => (
            <TableCell
              key={`headCsaaell.idsssss${index}${Date.now()}${Math.random()}`}
              align={headCell.numeric ? 'right' : 'right'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n[keyNames[0]]);

      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleClickEdit = (event, id, field, value) => {
    setCell({ id, field, value });
  }

  const handleCellChange = (event) => {
    setCell({ ...cell, value: event.target.value })
  }

  const handleSubmit = () => {
    if (cell) {
      const oldRecord = rows.find(item => item.id === cell.id);
      console.log('old field', oldRecord[cell.field]);
      const prepareNewRecord = {
        ...oldRecord,
        [cell.field]: cell.value
      }

      dispatch(editDashboard(whatDatabase, cell.id, prepareNewRecord)).then(() => {
        rows.find((item) => (item['_id'] ? item['_id'] === cell['id'] : item[keyNames[0]] === cell['id']))[cell['field']] = cell['value'];
        setCell(null);
      });
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleChipClick = (e, value) => {
    dispatch(getDashboard(value)).then(() => {
      setWhatDatabase(value);
      const temp = chipData.findIndex((item) => item.value === value);
      if (temp > -1) {
        let backup = chipData.map(x => { return { ...x, current: false } });
        backup[temp]['current'] = true;
        setChipData(backup);
      }
    });
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Paper component="ul" className={classes.root1} elevation={3}>
          {
            chipData.map((data) => {
              let icon = 'https://res.cloudinary.com/katyperrycbt/image/upload/v1615828599/bkz5vkwtgccqzwg9yv36.png';

              return (
                <div key={`${Math.random()}wdwdsada`} style={{ display: !data.current ? '' : 'none' }}>

                  <Chip
                    avatar={<Avatar alt='custom' src={icon} />}
                    label={data.label}
                    color="primary"
                    variant="outlined"
                    clickable
                    onClick={(event) => handleChipClick(event, data.value)}
                  />

                </div>
              )
            })
          }
        </Paper>

        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row[keyNames[0]]);
                  const labelId = `enhandcvdssded-table-checkbox-${index}${Date.now()}${Math.random()}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={`mycustomqw---woix${index}${Date.now()}${Math.random()}`}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row[keyNames[0]])}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>

                      {
                        keyNames.map((key, index) => {
                          return <TableCell
                            align={headCells.find(item => item.id === key).numberic ? 'left' : 'right'}
                            onClick={(event) => handleClickEdit(event, row['_id'] || row[keyNames[0]], key, row[key])}
                            key={`dsdid${index}${Date.now()}${Math.random()}`}
                          >
                            {
                              (cell ? ((row['_id'] ? cell['id'] === row['_id'] : cell['id'] === row[keyNames[0]]) && cell['field'] === key) : false) ?
                                <TextField onKeyDown={handleKeyDown} onBlur={handleSubmit} autoFocus variant='outlined' value={cell['value']} onChange={handleCellChange} /> :
                                (typeof row[key] === 'object' && row[key] !== null ? "Object" : row[key])
                            }

                          </TableCell>
                        })
                      }
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import ReactTooltip from 'react-tooltip';

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(title, active_state, end_date) {
    return { title, active_state, end_date };
}

const rows = [
    createData('Wake up', 'In Progress', '07-09-2021'),
    createData('Sleep', 'Done', '07-09-2021'),
    createData('Meeting with Saman', 'Done', '07-09-2021'),
    createData('Watch the F9', 'Done', '07-09-2021'),
    createData('Exams at school', 'Done', '07-09-2021'),
    createData('Birthday for Lal', 'In Progress', '07-09-2021'),
    createData('Ice cream sandwich', 'In Progress', '07-09-2021'),
    createData('Jelly Bean', 'In Progress', '07-09-2021'),
    createData('KitKat', 'In Progress', '07-09-2021'),
    createData('Lollipop', 'Done','07-09-2021'),
    createData('Marshmallow', 'Done', '07-09-2021'),
    createData('Nougat', 'Done', '07-09-2021'),
    createData('Oreo', 'Done', '07-09-2021'),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

export default function Table1(props) {
    const classes = useStyles2();
    // const [rows, setRows] = React.useState([props.rows])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <ReactTooltip />
            <Table className={classes.table} aria-label="custom pagination table">
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows).map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell style={{ width: 100 }} align="right">
                                    {row.active_state}
                                </TableCell>
                                <TableCell style={{ width: 100 }} align="right">
                                    {row.end_date}
                                </TableCell>
                                <TableCell style={{ width: 30 }} align="right">
                                    {(row.active_state === 'In Progress') ?
                                        <div data-tip="Click here to mark as done" onClick={() => { console.log('hi') }}><SportsHandballIcon /></div> :
                                        <CheckCircleRoundedIcon style={{ color: "green" }} />}

                                </TableCell>
                                <TableCell style={{ width: 30 }} align="right">
                                    <div data-tip="Click here to delete this TODO" onClick={() => { console.log('hi') }}><DeleteIcon value={row.end_date} /></div>
                                </TableCell>
                            </TableRow>
                        ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={5}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { 'aria-label': 'rows per page' },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    TablePagination,
    TableFooter,
} from '@material-ui/core'
// constants
import { VIOLATION_PER_REPO_DASHBOARD_HEADERS } from '../utils/constants'

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950,
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light),
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark,
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block',
    },
}))

function DashboardVioPerRepo(props: any) {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {VIOLATION_PER_REPO_DASHBOARD_HEADERS.map((header) => (
                            <TableCell
                                key={header}
                                className={classes.tableHeaderCell}
                            >
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.violationCountList
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((row: any) => (
                            <TableRow key={row.violation_id}>
                                <TableCell>
                                    <Typography className={classes.name}>
                                        {row.repo_num}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography className={classes.name}>
                                        {row.repo_name}
                                    </Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2"
                                    >
                                        {row.violation_amount}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={props.violationCountList.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default DashboardVioPerRepo

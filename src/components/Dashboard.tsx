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
    Grid,
    Typography,
    TablePagination,
    TableFooter,
} from '@material-ui/core'
// constants
import { VIOLATION_DASHBOARD_HEADERS } from '../utils/constants'

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

interface DashboardInfo {
    violations: string[],
}

const Dashboard = (props: DashboardInfo) => {
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
                        {VIOLATION_DASHBOARD_HEADERS.map((header) => (
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
                    {props.violations
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((row: any) => (
                            <TableRow key={row.violation_id}>
                                <TableCell>
                                    <Grid container>
                                        <Grid item lg={6}>
                                            <Typography
                                                className={classes.name}
                                            >
                                                <strong>Violation ID:</strong>{' '}
                                                {row.violation_id}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                <strong>File Path:</strong>{' '}
                                                {row.file_path}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                <strong>Line Number:</strong>{' '}
                                                {row.line_number}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                <strong>Created Date:</strong>{' '}
                                                {row.timestamp_found}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                            </TableCell>

                            <TableCell>
                                <Grid container>
                                    <Grid item lg={6}>
                                        <Typography
                                            className={classes.name}
                                        >
                                            <strong>
                                                Pull Request Link:
                                            </strong>{' '}
                                            {row.pull_url}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            variant="body2"
                                        >
                                            <strong>Repo Name:</strong>{' '}
                                            {row.repo_name}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            variant="body2"
                                        >
                                            <strong>Resource Name:</strong>{' '}
                                            {row.resource_name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>

                            <TableCell>
                                <Typography
                                    color="primary"
                                    variant="subtitle2"
                                >
                                    <strong>User Email:</strong>{' '}
                                    {row.user_email}
                                </Typography>
                            </TableCell>

                            <TableCell>
                                <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            row.status === 'Resolved'
                                                ? 'green'
                                                : 'blue',
                                    }}
                                >
                                    {row.status}
                                </Typography>
                            </TableCell>
                        </TableRow>
                        )
                    )
                }
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={props.violations.length}
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


export default Dashboard

import { FC, ReactElement, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import DashboardVioPerRepo from '../../../components/DashboardVioPerRepo'
import axios from 'axios'

// components
import PageTitle from '../../../components/PageTitle'

// constants
import {
    APP_TITLE,
    ADMIN_VIO_QUERY_TOTAL_VIO_PER_REPO,
    API_ADMIN_TOTAL_VIO_PER_REPO,
} from '../../../utils/constants'

// define css-in-js
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        uni_title: {
            fontSize: 24,
            display: 'flex',
            justifyContent: 'center',
        },
    })
)

const TTotalVioPerRepo: FC<{}> = (): ReactElement => {
    const classes = useStyles()
    const [counts, setCounts] = useState([])

    useEffect(() => {
        const getTotalVioPerRepo = async () => {
            const response = await axios.get(API_ADMIN_TOTAL_VIO_PER_REPO)
            if (response?.data) setCounts(response.data['body'])
        }
        getTotalVioPerRepo()
    }, [])

    return (
        <>
            <div className={classes.uni_title}>Violations Query</div>
            <Helmet>
                <title>
                    {ADMIN_VIO_QUERY_TOTAL_VIO_PER_REPO} | {APP_TITLE}
                </title>
            </Helmet>
            <div className={classes.root}>
                <PageTitle title={ADMIN_VIO_QUERY_TOTAL_VIO_PER_REPO} />
            </div>
            <div>
                <DashboardVioPerRepo violationCountList={counts} />

            </div>
        </>
    )
}

export default TTotalVioPerRepo

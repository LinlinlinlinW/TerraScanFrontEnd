// import { FC, ReactElement, useState, useEffect, MouseEvent } from 'react'
import { FC, ReactElement } from 'react'

import { Helmet } from 'react-helmet'
import { makeStyles, createStyles } from '@material-ui/core/styles'
// import axios from 'axios'

// components
import PageTitle from '../../../components/PageTitle'
import RulesPanel from '../../../components/RulesPanel'

// constants
import {
    APP_TITLE,
    ADMIN_VIO_QUERY_TOP_10_RULES,
    API_ADMIN_VIO_QUERY_TOP_10_RULES,
    HEADER_HEIGHT,
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
        rulesPane: {
            padding: HEADER_HEIGHT + 20,
            overflow: 'hidden',
        },
        dropZone: {
            width: '50%',
        },
    })
)

const TTop10Rules: FC<{}> = (): ReactElement => {
    const classes = useStyles()
    // const [top10Rules, setTop10Rules] = useState([])

    // useEffect(() => {
    //     const getTop10Rules = async () => {
    //         const response = await axios.get(API_ADMIN_VIO_QUERY_TOP_10_RULES)
    //         if (response?.data) setTop10Rules(response.data['body'])
    //     }
    //     getTop10Rules()
    // }, [])

    return (
        <>
            <div className={classes.uni_title}>Violations Query</div>
            <Helmet>
                <title>
                    {ADMIN_VIO_QUERY_TOP_10_RULES} | {APP_TITLE}
                </title>
            </Helmet>
            <div className={classes.root}>
                <PageTitle title={ADMIN_VIO_QUERY_TOP_10_RULES} />
            </div>
            <div>
                <div className={classes.rulesPane}>
                    <RulesPanel api={API_ADMIN_VIO_QUERY_TOP_10_RULES} />
                </div>
            </div>
        </>
    )
}

export default TTop10Rules

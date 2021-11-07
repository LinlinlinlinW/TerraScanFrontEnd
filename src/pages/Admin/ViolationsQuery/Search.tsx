import {
    FC,
    ReactElement,
    useRef,
    MouseEvent,
    useState,
    useEffect,
} from 'react'
import { Helmet } from 'react-helmet'
import Dashboard from '../../../components/Dashboard'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import axios from 'axios'

// components
import PageTitle from '../../../components/PageTitle'

// constants
import {
    APP_TITLE,
    ADMIN_VIO_QUERY_SEARCH,
    API_ADMIN_VIO_QUERY_SEARCH,
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

const TSearch: FC<{}> = (): ReactElement => {
    const classes = useStyles()

    const usernameRef = useRef<HTMLInputElement>(null)
    const repoNameRef = useRef<HTMLInputElement>(null)
    const prlinkRef = useRef<HTMLInputElement>(null)

    const [violations, setViolations] = useState<Array<string>>([])

    useEffect(() => {
        const getTotalVioPerRepo = async () => {
            const response = await axios.get(API_ADMIN_VIO_QUERY_SEARCH)
            if (response?.data) setViolations(response.data['body'])
        }
        getTotalVioPerRepo()
    }, [])

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault()
        let userName = usernameRef.current ? usernameRef.current.value : ''
        let repoName = repoNameRef.current ? repoNameRef.current.value : ''
        let prLink = prlinkRef.current ? prlinkRef.current.value : ''
        
        const getViolationBasedOnUserinput  = async () => {
            await axios
            // .post(API_ADMIN_VIO_QUERY_SEARCH, param)
            .get(
                API_ADMIN_VIO_QUERY_SEARCH +
                    '?userName=' +
                    userName +
                    '&repoName=' +
                    repoName +
                    '&prLink=' +
                    prLink
            )
            .then((response) => {
                setViolations(response.data['body'])
            })
            .catch((e) => {
                console.log(e)
            })
        }
        getViolationBasedOnUserinput()
    }

    return (
        <>
            <div className={classes.uni_title}>Violations Query</div>
            <Helmet>
                <title>
                    {ADMIN_VIO_QUERY_SEARCH} | {APP_TITLE}
                </title>
            </Helmet>
            <div className={classes.root}>
                <PageTitle title={ADMIN_VIO_QUERY_SEARCH} />
            </div>
            <form>
                <label>
                    GitHub Username
                    <input
                        type="text"
                        id="github_username"
                        name="github_username"
                        ref={usernameRef}
                    />
                </label>
                <br></br>
                <label>
                    GitHub Repo Name
                    <input
                        type="text"
                        id="github_reponame"
                        name="github_reponame"
                        ref={repoNameRef}
                    />
                    <br></br>
                </label>
                <label>
                    GitHub PR Link
                    <input
                        type="text"
                        id="github_prlink"
                        name="github_prlink"
                        ref={prlinkRef}
                    />
                    <br></br>
                </label>
                <Button
                    className="search_btn"
                    onClick={handleClick}
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    style={{
                        maxWidth: '100px',
                        maxHeight: '30px',
                        minWidth: '30px',
                        minHeight: '30px',
                    }}
                >
                    SUBMIT
                </Button>
            </form>
            <Dashboard violations={violations} />
        </>
    )
}

export default TSearch

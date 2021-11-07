import { FC, ReactElement, useState, useEffect, useRef } from 'react'
import { Helmet } from "react-helmet";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// components
import PageTitle from "../components/PageTitle"
import Dashboard from '../components/Dashboard'

// constants
import { APP_TITLE, USER_VIEW_ALL_VIOS, API_ADMIN_VIO_QUERY_SEARCH, DASHBOARD_NO_VIOLATION } from "../utils/constants";

// REST API
import axios from 'axios';

// define css-in-js
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  })
);

const MyViolation: FC<{}> = (): ReactElement => {
    const classes = useStyles();
    const [violations, setViolations] = useState<string[]>([])
    const usernameRef = useRef<HTMLInputElement>(null)
    let userName = usernameRef.current ? usernameRef.current.value : 'Bolin'

    useEffect(() => {
      const fetchVios = async () => {
              await axios  
              .get(API_ADMIN_VIO_QUERY_SEARCH +
                '?userName=' + userName)
              .then((res: any) => {
                setViolations(res.data.body)
              })
              .catch((err: any) => {
                  console.log(err)
              })
          }
          fetchVios()
      }
  , [])
  const handleDisplayVioDashboard = () : any => {

    if (!violations) {
      setViolations([])
    }

    const viosArr = violations;
    if (viosArr) {
        return (
          <Dashboard violations={violations} />
        )
    } else {
        return (
            <h2> {DASHBOARD_NO_VIOLATION} </h2>
        )
    }
}

  return (
    <>
      <Helmet>
        <title>
          {} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <PageTitle title={USER_VIEW_ALL_VIOS} />
      </div>
      {handleDisplayVioDashboard()}
    </>
  );
};

export default MyViolation;
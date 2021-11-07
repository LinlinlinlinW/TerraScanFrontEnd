import React, { FC, ReactElement, useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Dropzone from "react-dropzone-uploader";
import 'react-dropzone-uploader/dist/styles.css';

// components
import PageTitle from "../../components/PageTitle";
import RulesPanel from "../../components/RulesPanel";
import Button from '@mui/material/Button';

// constants
import { APP_TITLE, ADMIN_MANAGE_ALL_RULES, API_ADMIN_MANAGE_ALL_RULES, HEADER_HEIGHT } from "../../utils/constants";

import axios from 'axios';

// define css-in-js
const useStyles = makeStyles(() =>
  createStyles({
    top: {
      position: "fixed",
      zIndex: 1,
      width: "100%",
      backgroundColor: "#ffffff",
      top: HEADER_HEIGHT,
      padding: 20,
    },
    rulesPane: {
      padding: HEADER_HEIGHT + 20,
      overflow: "hidden",
    },
    dropZone: {
      width: "50%"
    }
    
  })
);

const ManageAllRules: FC<{}> = (): ReactElement => {
    const classes = useStyles();
    const [clickUpload, setUpload] = useState(false)
    let [buttonText, setButtonText ] = useState("Upload")

    const handleClickUpload = () : any => {
        setUpload(!clickUpload)
        if (!clickUpload) {
          buttonText = "Cancel"
        } else {
          buttonText = "Upload"
        }
        setButtonText(buttonText)
    }
    
    const handleClickRefresh = () : void => {

    }

    const handleSendFile = (file : Object) : void => {
      const jsyaml = require('js-yaml')
      const yaml = jsyaml.load(file)
      const json = JSON.stringify(yaml)
      const obj = {"file" : json}
      console.log(obj)
      const sendFile = async () => {
        await axios
        .put(API_ADMIN_MANAGE_ALL_RULES, obj)
        .then((res: any) => {
            console.log(res)
        })
        .catch((err: any) => {
            console.log(err)
        })
      }
      sendFile()
    }

    return (
        <>
            <Helmet>
                <title>
                    {} | {APP_TITLE}
                </title>
            </Helmet>
            <div className={classes.top}>
                <PageTitle title={ADMIN_MANAGE_ALL_RULES}/>
                <Button size="large" onClick={handleClickUpload}>{buttonText}</Button>
                <Button size="large" onClick={handleClickRefresh}>Refresh</Button>
                {clickUpload? 
                    <div className={classes.dropZone}>
                      <Dropzone
                        onSubmit={(file) => handleSendFile(file)}
                        styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
                        accept=".yml"
                      />
                    </div>
                     : null}
            </div>
            <div className={classes.rulesPane}>
                <RulesPanel api={API_ADMIN_MANAGE_ALL_RULES}/>
            </div>
            
        </>
    );
};

export default ManageAllRules;
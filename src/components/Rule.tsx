import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import RuleDetail from './Dialog'

// REST API
import axios from 'axios'

import { API_ADMIN_MANAGE_ALL_RULES } from '../utils/constants'

interface RuleInfo {
    id: any,
    name: string,
    description: string,
    resource: string,
    rules: any,
}

const useStyles = makeStyles(() => ({
    details: {
        display: 'flex',
        height: '180px'
    }
}))

const Rule = (props: RuleInfo) => {
    const classes = useStyles()
    const clickDelete = (): any => {
        const deleteRules = async () => {
            console.log(props.id)
            await axios
                .delete(API_ADMIN_MANAGE_ALL_RULES + "?id=" + props.id)
                .then((res: any) => {
                    console.log(res)
                })
                .catch((err: any) => {
                    console.log(err)
                })
        }
        deleteRules()
    }

    return (
        <Card sx={{ width: window.innerWidth / 5 }}>
            <div className={classes.details}>
                <CardContent sx={{ display: 'block' }}>
                    <Typography variant="h5" component="div">
                        <Box
                            component="span"
                            sx={{ display: 'block', mx: '2px' }}
                        >
                            {props.name}
                        </Box>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </div>
            <CardActions>
                <RuleDetail
                    name={props.name}
                    description={props.description}
                    resource={props.resource}
                    rules={props.rules}
                />
                <Button variant="outlined" onClick={clickDelete}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Rule

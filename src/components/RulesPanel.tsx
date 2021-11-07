import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// REST API
import axios from 'axios';

// Style
import Grid from '@mui/material/Grid';

// components
import Rule from "./Rule";

// constants
import { RULESPANEL_NO_RULE } from "../utils/constants";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			flex: 1,
			display: "flex",
			position: "-webkit-sticky"
		},
	})
);

interface RulesPanelInfo {
	api: string,
}

const RulesPanel = (props: RulesPanelInfo) => {
	const classes = useStyles();
	const [rules, setRule] = useState<any[]>([])

	useEffect(() => {
		const fetchRules = async () => {
			await axios
				.get(props.api)
				.then((res: any) => {
					setRule(res.data.body)
				})
				.catch((err: any) => {
					console.log(err)
				})
		}
		fetchRules()
	}
		, [])

	const handleDisplayAllRules = (): any => {
		const rulesArr = rules;
		if (rulesArr) {
			return (
				rulesArr.map((eachRule: any) => (
					<Rule
						key={eachRule.id}
						id={eachRule.id}
						name={eachRule.name}
						description={eachRule.description}
						resource={eachRule.resource}
						rules={eachRule.resource}
					/>))
			)
		} else {
			return (
				<h2> {RULESPANEL_NO_RULE} </h2>
			)
		}
	}

	return (
		<>
			<div className={classes.root}>
				<Grid container gap={4}>
					{handleDisplayAllRules()}
				</Grid>
			</div>
		</>
	)
}

export default RulesPanel

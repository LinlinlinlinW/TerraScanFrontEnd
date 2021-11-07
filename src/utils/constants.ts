// APP TEXT
export const APP_TITLE = 'TerraScan'
export const FOOTER_TEXT = `${new Date().getFullYear()} Proudly made in Vancouver ♡ by Seven Of Spades`
// PAGES TITLE
export const PAGE_TITLE_MY_VIOLATIONS = 'My Violations'
export const ADMIN_MANAGE_ALL_RULES = 'Manage All Rules'
export const ADMIN_VIO_QUERY_SEARCH = 'Search'
export const ADMIN_VIO_QUERY_TOP_10_RULES = 'Top 10 Rules Being Violated'
export const ADMIN_VIO_QUERY_TOTAL_VIO_PER_REPO = 'Total Violations Per Repo'
export const USER_VIEW_ALL_VIOS = 'View All Violations'
export const PAGE_TITLE_CODE = 'Code Editor'
export const PAGE_LOGOUT = 'Log out'
// UI CONSTANTS
export const FOOTER_HEIGHT = 30
export const HEADER_HEIGHT = 60
export const DRAWER_WIDTH = 300

/**
 * API endpoints
 * composite endpoints in the order of COMMON PART, STAGE, VERSION, and a specific name
 */

//COMMON PART
const COMMON_PART = 'https://9hpaanl7pi.execute-api.us-east-2.amazonaws.com'

//STAGE
const STAGE_DEV = '/dev'
// const STAGE_PROD = "/prod";

//VERSION
const VERSION = '/v1'

// DASHBOARD HEADER
export const VIOLATION_DASHBOARD_HEADERS = [
    'Violation Info',
    'User Info',
    'GitHub Info',
    'Status',
]

export const VIOLATION_PER_REPO_DASHBOARD_HEADERS = [
    '#',
    'Repo Name',
    'Violation Amount',
]

// Admin - VIOLATION QUERY SEARCH
export const API_ADMIN_VIO_QUERY_SEARCH =
    COMMON_PART + STAGE_DEV + VERSION + '/violations'

// Admin - VIOLATION QUERY TOP 10 RULES
export const API_ADMIN_VIO_QUERY_TOP_10_RULES =
    COMMON_PART + STAGE_DEV + VERSION + '/violations/top10'

// Admin - VIOLATION QUERY TOP 10 RULES
export const API_ADMIN_TOTAL_VIO_PER_REPO =
    COMMON_PART + STAGE_DEV + VERSION + '/violations/count-per-repo'

// Admin - MANAGE ALL RULES
export const API_ADMIN_MANAGE_ALL_RULES =
    COMMON_PART + STAGE_DEV + VERSION + '/rules'

/**
 * Components String
 */

// RulesPanel

export const RULESPANEL_NO_RULE = 'No Rule in Database'
export const UPLOAD_RULES_FILE_LIMIT = 1

// Dashboard
export const DASHBOARD_NO_VIOLATION = 'No violation! Congrats!';


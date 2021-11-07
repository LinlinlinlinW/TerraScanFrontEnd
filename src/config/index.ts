// icons
import HomeIcon from '@material-ui/icons/Home'
import DashboardIcon from '@material-ui/icons/BarChartOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import GitHubIcon from '@material-ui/icons/GitHub'
import PrivateIcon from '@material-ui/icons/LockOutlined'
import PublicIcon from '@material-ui/icons/LockOpenOutlined'
// import CodeIcon from '@material-ui/icons/CodeOutlined'

// components
import MyViolation from '../pages/MyViolation'
import ManageAllRules from '../pages/Admin/ManageAllRules'
import TSearch from '../pages/Admin/ViolationsQuery/Search'
import TTotalVioPerRepo from '../pages/Admin/ViolationsQuery/TotalVioPerRepo'
import TTop10Rules from '../pages/Admin/ViolationsQuery/Top10Rules'
import Logout from '../pages/Logout'
// import CodeEditor from '../pages/CodeEditor'

// interface
import RouteItem from '../model/RouteItem.model'

// define app routes
export const routes: Array<RouteItem> = [
    {
        key: 'router-my-violation',
        title: 'My Violations',
        tooltip: 'My Violations',
        path: '/',
        enabled: true,
        component: MyViolation,
        icon: HomeIcon,
        appendDivider: true,
    },
    {
        key: 'router-admin-manage-all-rules',
        title: 'Manage All Rules',
        tooltip: 'Manage All Rules',
        path: '/admin_manage_all_rules',
        enabled: true,
        component: ManageAllRules,
        icon: DashboardIcon,
    },
    {
        key: 'router-admin-violations-query',
        title: 'Violations Query',
        tooltip: 'Violations Query',
        enabled: true,
        icon: GitHubIcon,
        subRoutes: [
            {
                key: 'router-vq-search',
                title: 'Search',
                tooltip: 'Search',
                path: '/vq/search',
                enabled: true,
                component: TSearch,
                icon: PrivateIcon,
            },
            {
                key: 'router-vq-total-vio-per-repo',
                title: 'Total Violations Per Repo',
                tooltip: 'Total Violations Per Repo',
                path: '/vq/total-vio-per-repo',
                enabled: true,
                component: TTotalVioPerRepo,
                icon: PublicIcon,
            },
            {
                key: 'router-vq-top-10-rules',
                title: 'Top 10 Rules Being Violated',
                tooltip: 'Top 10 Rules Being Violated',
                path: '/vq/top-10',
                enabled: true,
                component: TTop10Rules,
                icon: PublicIcon,
            },
        ],
    },
    // {
    //     key: 'router-code',
    //     title: 'Code Editor',
    //     tooltip: 'Code Editor',
    //     path: '/code-editor',
    //     enabled: true,
    //     component: CodeEditor,
    //     icon: CodeIcon,
    //     appendDivider: true,
    // },
    {
        key: 'router-log-out',
        title: 'Log out',
        tooltip: 'Log out',
        path: '/logout',
        enabled: true,
        component: Logout,
        icon: SettingsIcon,
    },
]

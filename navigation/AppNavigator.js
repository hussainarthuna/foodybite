import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import WelcomePage from '../pages/WelcomePage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomePage from '../pages/HomePage';
import FavoritesPage from '../pages/FavoritesPage';
import NotificationsPage from '../pages/NotificationsPage';
import ProfilePage from '../pages/ProfilePage';
import {Colors} from '../constants/Colors';
import {Icon} from 'native-base';
import TrendingRestaurantsPage from '../pages/TrendingRestaurantsPage';
import AllCategoriesPage from '../pages/AllCategoriesPage';
import CategoryRestaurantsPage from '../pages/CategoryRestaurantPage';
import {Transition} from 'react-native-reanimated';
import FollowersPage from '../pages/FollowersPage';
import FollowingsPage from '../pages/FollowingsPage';
import SettingsPage from '../pages/SettingsPage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import ChangeLanguagePage from '../pages/ChangeLanguagePage';
import UserReviewsPage from '../pages/UserReviewsPage';
import EditProfilePage from '../pages/EditProfilePage';


const navOptionsHandler = (navigation) => ({
    headerShown: false,
});

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => {
                return <Icon name='home' type='AntDesign' fontSize={25} style={{color: tintColor}}/>;
            },
        },
    },
    Favorites: {
        screen: FavoritesPage,
        navigationOptions: {
            // tabBarLabel: 'Favorites',
            tabBarIcon: ({tintColor}) => {
                return <Icon name='bookmark-o' type='FontAwesome' fontSize={25} style={{color: tintColor}}/>;
            },
        },
    },
    Notifications: {
        screen: NotificationsPage,
        navigationOptions: {
            // tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => {
                return <Icon name='notifications-none' type='MaterialIcons' fontSize={25} style={{color: tintColor}}/>;
            },
        },
    },
    Profile: {
        screen: ProfilePage,
        navigationOptions: {
            // tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => {
                return <Icon name='person-outline' type='MaterialIcons' fontSize={25} style={{color: tintColor}}/>;
            },
        },
    },
}, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: Colors.primary,
    },
});

const MainStack = createStackNavigator({
    Tabs: {
        screen: TabNavigator,
        navigationOptions: navOptionsHandler,
    },
    TrendingRestaurants: {
        screen: TrendingRestaurantsPage,
        navigationOptions: navOptionsHandler,
    },
    AllCategories: {
        screen: AllCategoriesPage,
        navigationOptions: navOptionsHandler,
    },
    CategoryRestaurant: {
        screen: CategoryRestaurantsPage,
        navigationOptions: navOptionsHandler,
    },
    UserReviews: {
        screen: UserReviewsPage,
        navigationOptions: navOptionsHandler,
    },
    Followers: {
        screen: FollowersPage,
        navigationOptions: navOptionsHandler,
    },
    Followings: {
        screen: FollowingsPage,
        navigationOptions: navOptionsHandler,
    },
    Settings: {
        screen: SettingsPage,
        navigationOptions: navOptionsHandler,
    },
    ChangePassword: {
        screen: ChangePasswordPage,
        navigationOptions: navOptionsHandler,
    },
    ChangeLanguage: {
        screen: ChangeLanguagePage,
        navigationOptions: navOptionsHandler,
    },
    EditProfile: {
        screen: EditProfilePage,
        navigationOptions: navOptionsHandler,
    },
});

// MainStack.navigationOptions = ({navigation}) => {
//     let drawerLockMode = 'unlocked';
//     if (navigation.state.index > 0) {
//         drawerLockMode = 'locked-closed';
//     }
//
//     return {
//         drawerLockMode,
//     };
// };
//
// const drawerNavigator = createDrawerNavigator({
//     drawer: MainStack
// }, {
//     contentComponent: SideMenu,
//     drawerWidth: Dimensions.get('window').width * 3 / 4,
// });

const welcomeStack = createStackNavigator({
    Welcome: {
        screen: WelcomePage,
        navigationOptions: navOptionsHandler,
    },
});

const authStack = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: navOptionsHandler,
    },
    Register: {
        screen: RegisterPage,
        navigationOptions: navOptionsHandler,
    },
    ForgotPassword: {
        screen: ForgotPasswordPage,
        navigationOptions: navOptionsHandler,
    },
});

// const appNavigator = createSwitchNavigator({
//     Splash: welcomeStack,
//     Auth: authStack,
//     App: MainStack,
// }, {
//     initialRouteName: 'Splash',
// });
const appNavigator = createAnimatedSwitchNavigator({
    Splash: welcomeStack,
    Auth: authStack,
    App: MainStack,
}, {
    initialRouteName: 'Splash',
    transition: (
        <Transition.Together>
            {/*<Transition.Out*/}
            {/*    type="slide-top"*/}
            {/*    durationMs={400}*/}
            {/*    interpolation="easeIn"*/}
            {/*/>*/}
            <Transition.In type="fade" durationMs={500}/>
        </Transition.Together>
    ),
});

export default createAppContainer(appNavigator);


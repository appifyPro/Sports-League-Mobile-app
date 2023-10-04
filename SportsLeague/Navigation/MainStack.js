import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../Screens/SplashScreen";
import StartScreen from "../Screens/StartScreen";
import SigninEmail from "../Screens/SigninEmail";
import SignupScreen from "../Screens/SignupScreen";
import ForgetPasswordScreen from "../Screens/ForgetPasswordScreen";
import SigninUsername from "../Screens/SigninUsername";
import SelectPassword from "../Screens/SelectPassword";
import CreateAccount from "../Screens/CreateAccount";
import Notification from "../Screens/Notification";
import Leaderboard from "../Screens/Leaderboard";
import GroupStagePick from "../Screens/GroupStagePick";
import NotificationSetting from "../Screens/NotificationSetting";
import YourPicks from "../Screens/YourPicks";
import BottomTab from "./BottomTab";
import Profile from "../Screens/Profile";
import InviteFriends from "../Screens/InviteFriends";
import PoolRules from "../Screens/PoolRules";
import BracketPicksheet from "../Screens/BracketPicksheet";
import PickTeam from "../Screens/PickTeam";
import TeamsShedule from "../Screens/TeamsShedule";

const Stack = createNativeStackNavigator();

export function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="SigninEmail" component={SigninEmail} />
            <Stack.Screen name="SigninUsername" component={SigninUsername} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
            <Stack.Screen name="SelectPassword" component={SelectPassword} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Leaderboard" component={Leaderboard} />
            <Stack.Screen name="GroupStagePick" component={GroupStagePick} />
            <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
            <Stack.Screen name="YourPicks" component={YourPicks} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="InviteFriends" component={InviteFriends} />
            <Stack.Screen name="PoolRules" component={PoolRules} />
            <Stack.Screen name="BracketPicksheet" component={BracketPicksheet} />
            <Stack.Screen name="PickTeam" component={PickTeam} />
            <Stack.Screen name="TeamsShedule" component={TeamsShedule} />
        </Stack.Navigator>
    );
}

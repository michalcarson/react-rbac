import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext";
import Can from "../components/Can";
import Logout from "../components/Logout";
import Profile from "../components/User/Profile";
import PostsList from "../components/Blog/Posts/List";

const DashboardPage = () => (
    <AuthConsumer>
        { ({ user }) => (
            <Can
                user={ user }
                perform="dashboard-page:visit"
                yes={ () => (
                    <div>
                        <h1>Dashboard</h1>
                        <Logout />
                        <Profile />
                        <PostsList />
                    </div>
                ) }
                no={ () => <Redirect to="/" /> }
            />
        ) }
    </AuthConsumer>
);

export default DashboardPage;

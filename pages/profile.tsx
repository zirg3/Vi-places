import React from 'react';
import Layout from "../app/components/common/Layout";
import {NextPageAuth} from "../app/types/auth";

const Profile:NextPageAuth = () => {
    return (
        <Layout>
            Profile
        </Layout>
    );
};
Profile.isOnlyUser = true

export default Profile;

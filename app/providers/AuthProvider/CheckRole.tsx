import React, {FC, ReactNode, useEffect} from 'react';
import {TypeComponentAuthFields} from "../../types/auth";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

// @ts-ignore
const CheckRole:FC<TypeComponentAuthFields<{children: ReactNode}>> = ({children, Component: {isOnlyUser, isAdmin}}) => {
    const {data} = useSession()
    const {replace, pathname} = useRouter()

    const Children = () => <>{children}</>

    // if (data) return <Children/>
    if (data && isOnlyUser) {
        return <Children/>
    }
    // else if (data && isAdmin) {
    //     return <Children/>
    // }
    else if (isAdmin) {
        pathname !== '/404' && replace('/404')
        return null
    } else if (isOnlyUser) {
        pathname !== '/auth' && replace('/auth')
        return null
    }

};

export default CheckRole;

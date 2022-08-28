import React, {FC, ReactNode} from 'react';
import {TypeComponentAuthFields} from "../../types/auth";
import dynamic from "next/dynamic"

const DynamicCheckRoll = dynamic(() => import('../AuthProvider/CheckRole'), {
    ssr: false
})


interface IAuthProvider {
    Component: { isOnlyUser: boolean, isAdmin: boolean }
    children: ReactNode
}
const AuthProvider:FC<IAuthProvider> = ({children, Component: {isOnlyUser, isAdmin}}) => {


    if(!isOnlyUser && !isAdmin) {
        return <>{children}</>
    } else {
        return <DynamicCheckRoll Component={{isOnlyUser, isAdmin}}>{children}</DynamicCheckRoll>
    }
};

export default AuthProvider;

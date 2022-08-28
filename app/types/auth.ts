import {NextPage} from "next";

export type TypeRoles = {
    isOnlyUser?: boolean
    isAdmin?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = {Component: TypeRoles}
import NextAuth, { NextAuthOptions } from 'next-auth';
// import GitHub from 'next-auth/providers/github';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { sanityClient } from '../../../app/sanity';
import {ClientConfig, createClient} from "next-sanity";
export const config = {
    projectId: 'zrzrh6st',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
}

export const sanityClients = createClient(config)
const options = {
    providers: [
        SanityCredentials(sanityClients)
    ],
    session: {
        strategy: 'jwt'
    },
    secret: 'any-secret-word',
    adapter: SanityAdapter(sanityClients)
};

export default NextAuth(options);
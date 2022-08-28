import { createClient } from 'next-sanity'
import { config } from '../app/sanity'

export const sanityClientServer = createClient(config)
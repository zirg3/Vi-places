import { ClientConfig, createClient, createPreviewSubscriptionHook } from 'next-sanity'

import { PortableText as PortableTextComponent, PortableTextProps} from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'
import {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {
    PortableTextBlock,
    PortableTextMarkDefinition,
    ArbitraryTypedObject,
    PortableTextSpan
} from '@portabletext/types'

export const config: ClientConfig = {
    projectId: 'zrzrh6st',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: '2021-10-21',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
}

// @ts-ignore
export const usePreviewSubscription = createPreviewSubscriptionHook(config)
// @ts-ignore
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source)
export const PortableText = (props: JSX.IntrinsicAttributes & PortableTextProps<PortableTextBlock<PortableTextMarkDefinition, ArbitraryTypedObject | PortableTextSpan, string, string>>) => (
    <PortableTextComponent components={{}} {...props} />
)
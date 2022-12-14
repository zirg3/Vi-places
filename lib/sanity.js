import {
  createClient,
  // createPortableTextComponent,
  // createImageUrlBuilder,
  createPreviewSubscriptionHook
} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'
import React from 'react';
import {PortableText as PortableTextComponent} from '@portabletext/react'
// import ReactTooltip from "react-tooltip";

import { config } from "./config";


if (!config.projectId) {
  throw Error(
      "The Project ID is not set. Check your environment variables."
  );
}
export const urlFor = source =>
    createImageUrlBuilder(config).image(source);

export const imageBuilder = source =>
    createImageUrlBuilder(config).image(source);

export const usePreviewSubscription =
    createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
export const PortableText = (config) => <PortableTextComponent components={{}} {...config}/>;
// {
// ...config,
//     // Serializers passed to @sanity/block-content-to-react
//     // (https://github.com/sanity-io/block-content-to-react)
//     serializers: {
//   types: {
//     code: props => (
//         <pre data-language={props.node.language}>
//           <code>{props.node.code}</code>
//         </pre>
//     )
//   },
// }
// }
export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false
});

export const getClient = usePreview =>
    usePreview ? previewClient : sanityClient;
export default sanityClient;
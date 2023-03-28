import { createClient, createImageUrlBuilder } from "next-sanity"

const config = {
  /**
   .
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  /**
   * Set useCdn to `false` if  application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
}
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in  documents.
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

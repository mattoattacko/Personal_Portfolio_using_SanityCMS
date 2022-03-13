// Here we connect the Sanity client with our React application

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Connects to Sanity 
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// Code needed to build image URLs for the Sanity client
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
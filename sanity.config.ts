'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import * as resolve from '@/sanity/plugins/resolve'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import book from '@/sanity/schemas/documents/book'
import article from '@/sanity/schemas/documents/article'
import downloadable from '@/sanity/schemas/objects/downloadable'
import about from '@/sanity/schemas/singletons/about'
import marketInternational from '@/sanity/schemas/singletons/market-international'
import marketSpanish from '@/sanity/schemas/singletons/market-spanish'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Juan Serrano Finanzas'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      about,
      marketSpanish,
      marketInternational,
      // Documents
      book,
      article,
      // Objects
      downloadable
    ]
  },
  plugins: [
    structureTool({
      structure: pageStructure([about, marketSpanish, marketInternational])
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft'
        }
      }
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([about.name, marketSpanish.name, marketInternational.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    media(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion })
  ]
})

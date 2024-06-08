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
import page from '@/sanity/schemas/documents/page'
import project from '@/sanity/schemas/documents/project'
import downloadable from '@/sanity/schemas/objects/downloadable'
import duration from '@/sanity/schemas/objects/duration'
import milestone from '@/sanity/schemas/objects/milestone'
import timeline from '@/sanity/schemas/objects/timeline'
import about from '@/sanity/schemas/singletons/about'
import finance from '@/sanity/schemas/singletons/finance'
import home from '@/sanity/schemas/singletons/home'
import marketInternational from '@/sanity/schemas/singletons/market-international'
import marketSpanish from '@/sanity/schemas/singletons/market-spanish'
import settings from '@/sanity/schemas/singletons/settings'

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
      home,
      settings,
      about,
      finance,
      marketSpanish,
      marketInternational,
      // Documents
      duration,
      book,
      page,
      project,
      // Objects
      milestone,
      timeline,
      downloadable
    ]
  },
  plugins: [
    structureTool({
      structure: pageStructure([
        home,
        settings,
        about,
        finance,
        marketSpanish,
        marketInternational
      ])
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
    singletonPlugin([
      home.name,
      settings.name,
      about.name,
      finance.name,
      marketSpanish.name,
      marketInternational.name
    ]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    media(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion })
  ]
})

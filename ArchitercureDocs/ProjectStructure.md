# Project Structure Guide

## **Overview**
This document explains the purpose of each folder and file in the project, including database interactions with MongoDB, constants for shared configuration, and Redux Toolkit state management.

---

## **Folder Structure**

src/
├── components/         // Reusable UI components
├── features/           // State management (Redux Toolkit slices)
├── hooks/              // Custom React hooks
├── utils/              // Utility functions
├── constants/          // Shared static options and configurations
│   ├── filterOptions.ts // Filtering configuration
│   ├── sortOptions.ts   // Sorting configuration
│   └── index.ts         // Centralized export for constants
├── pages/              // Page components
├── CSSModules/         // Centralized CSS Modules
├── types/              // Global TypeScript types
├── services/           // API and database interactions
│   ├── api/            // REST/GraphQL API calls
│   └── db/             // MongoDB models, repositories, and client
│       ├── models/     // MongoDB schemas/models
│       ├── repositories/ // Query logic for MongoDB
│       ├── dbClient.ts // MongoDB client configuration
│       └── index.ts    // Centralized export for DB interactions
├── store/              // Redux store setup
│   ├── index.ts        // Redux store configuration
│   └── rootReducer.ts  // Combines all feature reducers
├── styles/             // Global styles and themes
├── App.tsx             // Root React component
└── main.tsx            // Entry point of the application

//Temp/Checks 

this folder add by me where i store all the temporaly checks requests,any possible checks ..
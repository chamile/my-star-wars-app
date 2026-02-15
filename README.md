# Star Wars App

## Video

https://files.fm/u/2guchskduj

## Environment

Create a .env file in the root directory with:

API_URL=https://swapi.info/api

## How to Run

Install dependencies:
npm install

Start the app:
npx expo start

For iOS:
npm run ios

For Android:
npm run android

## Explanation/Reasons

- Used fetch API instead of Axios since this is a simple app with basic API calls
- No Redux or central state management - used local state with useState since the app is small
- Error handling done with toast messages using react-native-toast-message

## Code Structure

- app/ - screens and navigation
  - _layout.tsx - root layout
  - index.tsx - entry point
  - home-screen.tsx - main list with pagination
  - details-screen.tsx - character details

- components/ - reusable components
  - add-person-modal.tsx - modal to create character
  - footer-loader.tsx - loading spinner for pagination
  - person-item.tsx - list item component
  - search-filter.tsx - search input

- services/
  - api.ts - API calls (getPeople, createPerson)

- types/
  - common.ts - TypeScript types

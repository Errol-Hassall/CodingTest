# CodingTest
 React native coding test for the Prince's Theatre challenge

## Setup

- install react native
- install android studio and java
- install node from the version listed in `.nvmrc` or install nvm
- install dependencies `npm i`
- install pods `npx pod-install ios`
- run metro `npm start`
- run ios `npm run ios`
or
- run android `npm run android`

## Testing

There are unit, component and view tests.

## Development

- Follows [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) for component structure
- All tests are located as close to the thing they are testing to encourage better practices and maintenance
- Views contain the screens of the application
- Components are all the sub elements of a view

## Improvements

- Could add view tests with views that have API calls, this would be adding mocks around the api calls of React Query
- Extract out some types into a general types file or folder
- Add relative imports
- Add storybook

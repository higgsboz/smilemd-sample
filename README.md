# SmileMD Sample Project

This project is hosted with Github Pages. It is viewable at this url https://higgsboz.github.io/smilemd-sample/

## Project Structure

Within the `src` file there are a few folders:
* `__tests__`
  * The tests for this projects were created with Jest, react-testing-library and msw. `msw` is a mocking library that is used for the mocks within the test cases.
* `components`
  * Components are separated based on business requirements. `App` is a top level component because it is the entry point to the app. `Pages` only contains `Home` for this project as there is only one page in the app. `Beer` contains the components necessary to create the main table component that holds the beer data.
* `hooks`
  * Data is being fetched using the `react-query` library. For this, a custom hook was created for the purpose of handling the query result. This file is found here.
* `queries`
  * This folder contains the api calls that `react-query` uses to fetch data.
* `styles`
  * This folder contains the styles for the project.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs the test runner in the command line
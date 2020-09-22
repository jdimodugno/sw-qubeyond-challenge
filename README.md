# SW QUBEYOND CHALLENGE by Juan Di Modugno

This solution is realized in order to be compliant with the Code Challenge provided.

The purpose of the following lines is to explain each component and feature of the solution.

## CLIENT

### Running the project

This project was created using React.js and Typescript by using Create React App.

[React.js documentation](https://reactjs.org/)
[Typescript documentation](https://www.typescriptlang.org/)

#### Prerequisites

##### ENV REACT_APP_API_URL

Before you are able to start the client, you'll need to specify an environment variable REACT_APP_API_URL in order to communicate with the Api.
In order to do that, you should create a file called '.env.development' at the root of the client folder and provide that info. Or you can just add "REACT_APP_API_URL=[path/to/api]" before the start command.

#### `yarn start`

Runs the app in the development mode using Nodemon in order to restart the server if it's necessary after made some file change. 
By default, the app will be listening at [http://localhost:3000](http://localhost:3000).

#### Initial Scenario

By default, you'll be redirected to the films list. [/films]

#### HIGHLIGHTS

* Once you've fetched any resource page, it will be stored in the Global Context in order to provide a clean and smooth experience. The data is sorted by Id in order to favor the detail populating process.

* In the DataHelper class we made use of binary search in order to take advantage of our Id sorted list, and that saves us a request.

* If you navigate through a list [for ex: people (82 items)] you can go back and you will notice that the data is not being fetched from the api, it's provided by the context.

* There are two generic views, ListContainer and DetailContainer, both of them receives props in order to access the context dinamically.

* The ListView receives a schema in order to dynamically generate the table. You should put entity valid fields in the "/src/domain/[entityName]" ListSchema.fields in order to make the data visible.

* The DetailView is dynamically generate by iterating through the object properties.

* The field names are being translated by using react-i18next.

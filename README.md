Camel Case should be used to name files.

The "Tests" folder contains individual components tests. Create a folder
in this format "<component-name>Tests" use camel case and put all the
components tests.

The "Components" folder contains the implementation of the components.
Create a folder in this format "<component-name>" and put all the components
code.

Import all your ".scss" files into style-imports.scss file, make sure you use
scss syntax not css.

import all your components defined in the Routes in the
component-imports.js file.

css class name should be written in small letters and words seperated by dashes

#mock db setup
npm install -g json-server
json-server --watch db.json

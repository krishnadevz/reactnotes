**Commands**
* npx create-react-app reactnotes /*creating a app*/ or yarn create react-app my-app
* yarn start or npm start for running the project 
* For adding new dependancies to the project yarn add reactstrap/yarn add bootstrap
* for opening vscode with root permissions `code --user-data-dir="./vscode-root"`

**Notes**


* A few things that you need to note when you create components in React
is that when you define your own components and add them to React,
you should always start the name of the component with a capital letter.
This way the React compiler recognizes that that should be
mapped into a corresponding React.createElement. In react And tags that usually start with a small letter, or
lower case letter, is typically integrated as a DOM tag.

**React state**
* Each component can store its owm local information in its 'state'
- private and fully controlled by the component 
- can be passes as a props to childern 
* only class components can have a local state 

**React props**
* JSX attributes are passed into component as a single object
* Available in component as a props
* can pass in multiple attributes 
* canot modify props within the component


**Event handling**
* just like the way you handle events in the DOM,
you can also handle events similarly in react.
But when you specify the events,
then you use camel case to specify the events.
And when you specify the event you'll pass a function as the event handler in this case. 
in camel case `onClick`

**Keys and lists**
* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

**LifeCycle methods in react**
* React Component goes through the following lifecycle stages:–Mounting–Updating–Unmounting
* Called when an instance of a component is being created and inserted into the DOM:
–constructor()
–getDerivedStateFromProps()
–render()
–componentDidMount()
* called when a component is being re-rendered–Can be caused by changes to props or state–getDerivedStateFromProps()
–shouldComponentUpdate()
–render()
–getSnapshotBeforeUpdate()
–componentDidUpdate()
* Two methods that are now deprecated: componentWillReceiveProps() and componentWillUpdate()
* Is called when the component is being removed from the DOM:–componentWillUnmount()
* Error Handling: called when there is an error during rendering, in a lifecycle method or in the constructor of any child component–componentDidCatch()
* Presentation components in react those are all about the views and UI related stuff.
* container components are used to making things work maintain states and data sources.

**Browser DOM and Virtual DOM concept**
* when change BrowserDOM that changes will be shown in browser `broserDOM is a browser object`.
* VirtualDOM is a react object
  - lightweight representation of the browser DOM.
  - In memory tree data structure of plain JS objects.
  - manipulates very fast compared to modifying the browser DOM 
  - created completely from scracth on every setState 
  - when we change the react code then code rerenders and those changes firstly goes to the virtualDOM(it is a react Object)
  - react uses diffing algorithm to detect those nodes are changed diffing alogorithm detects those componets are being changes and then modfies the react application. updates the entire subtree if diffing detects the two elements of different types.
  - using keys we will show or detect those keys are not changed don't rerender that.
  - diffing algorithm called as a `react-fiber(incremental rendering)`.

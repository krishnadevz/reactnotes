**Commands**
* npx create-react-app reactnotes /*creating a app*/
* yarn start or npm start for running the project 
* For adding new dependancies to the project yarn add reactstrap/yarn add bootstrap

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

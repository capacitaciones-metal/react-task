#COMPONENT COMUNICATION

Parent / Child direct communication

```
const Child = ({fromChildToParentCallback}) => (
  <div onClick={() => fromChildToParentCallback(42)}>
    Click me
  </div>
);

class Parent extends React.Component {
  receiveChildValue = (value) => {
    console.log("Parent received value from child: " + value); // value is 42
  };
  render() {
    return (
      <Child fromChildToParentCallback={this.receiveChildValue}/>
    )
  }
}
```
Here the child component will call a callback provided by the parent with a value, and the parent will be able to get the value provided by the children in the parent.

If you build a feature/page of your app, it's better to have a single parent managing the callbacks/state (also called container or smart component), and all childs to be stateless, only reporting things to the parent. This way you can easily "share" the state of the parent to any child that need it.

###Context
React Context permits to hold state at the root of your component hierarchy, and be able to inject this state easily into very deeply nested components, without the hassle to have to pass down props to every intermediate components.

Until now, context was an experimental feature, but a new API is available in React 16.3.

const AppContext = React.createContext(null)

```
class App extends React.Component {
  render() {
    return (
      <AppContext.Provider value={{language: "en",userId: 42}}>
        <div>
          ...
          <SomeDeeplyNestedComponent/>
          ...
        </div>
      </AppContext.Provider>
    )
  }
};


const SomeDeeplyNestedComponent = () => (
  <AppContext.Consumer>
    {({language}) => <div>App language is currently {language}</div>}
  </AppContext.Consumer>
);
```

The consumer is using the render prop / children function pattern

Check this blog post for more details.

Before React 16.3, I'd recommend using react-broadcast which offer quite similar API, and use former context API.

###Portals
Use a portal when you'd like to keep 2 components close together to make them communicate with simple functions, like in normal parent / child, but you don't want these 2 components to have a parent/child relationship in the DOM, because of visual / CSS constraints it implies (like z-index, opacity...).

In this case you can use a "portal". There are different react libraries using portals, usually used for modals, popups, tooltips...

Consider the following:
```
<div className="a">
    a content
    <Portal target="body">
        <div className="b">
            b content
        </div>
    </Portal>
</div>
```
Could produce the following DOM when rendered inside reactAppContainer:
```
<body>
    <div id="reactAppContainer">
        <div className="a">
             a content
        </div>
    </div>
    <div className="b">
         b content
    </div>
</body>
```
More details here

###Slots
You define a slot somewhere, and then you fill the slot from another place of your render tree.
```
import { Slot, Fill } from 'react-slot-fill';

const Toolbar = (props) =>
  <div>
    <Slot name="ToolbarContent" />
  </div>

export default Toolbar;

export const FillToolbar = ({children}) =>
  <Fill name="ToolbarContent">
    {children}
  </Fill>
```
This is a bit similar to portals except the filled content will be rendered in a slot you define, while portals generally render a new dom node (often a children of document.body)

Check react-slot-fill library

###Event bus
As stated in the React documentation:

For communication between two components that don't have a parent-child relationship, you can set up your own global event system. Subscribe to events in componentDidMount(), unsubscribe in componentWillUnmount(), and call setState() when you receive an event.

There are many things you can use to setup an event bus. You can just create an array of listeners, and on event publish, all listeners would receive the event. Or you can use something like EventEmitter or PostalJs

###Flux
Flux is basically an event bus, except the event receivers are stores. This is similar to the basic event bus system except the state is managed outside of React

Original Flux implementation looks like an attempt to do Event-sourcing in a hacky way.

Redux is for me the Flux implementation that is the closest from event-sourcing, an benefits many of event-sourcing advantages like the ability to time-travel. It is not strictly linked to React and can also be used with other functional view libraries.

Egghead's Redux video tutorial is really nice and explains how it works internally (it really is simple).

###Cursors
Cursors are coming from ClojureScript/Om and widely used in React projects. They permit to manage the state outside of React, and let multiple components have read/write access to the same part of the state, without needing to know anything about the component tree.

Many implementations exists, including ImmutableJS, React-cursors and Omniscient

Edit 2016: it seems that people agree cursors work fine for smaller apps but it does not scale well on complex apps. Om Next does not have cursors anymore (while it's Om that introduced the concept initially)

###Elm architecture
The Elm architecture is an architecture proposed to be used by the Elm language. Even if Elm is not ReactJS, the Elm architecture can be done in React as well.

Dan Abramov, the author of Redux, did an implementation of the Elm architecture using React.

Both Redux and Elm are really great and tend to empower event-sourcing concepts on the frontend, both allowing time-travel debugging, undo/redo, replay...

The main difference between Redux and Elm is that Elm tend to be a lot more strict about state management. In Elm you can't have local component state or mount/unmount hooks and all DOM changes must be triggered by global state changes. Elm architecture propose a scalable approach that permits to handle ALL the state inside a single immutable object, while Redux propose an approach that invites you to handle MOST of the state in a single immutable object.

While the conceptual model of Elm is very elegant and the architecture permits to scale well on large apps, it can in practice be difficult or involve more boilerplate to achieve simple tasks like giving focus to an input after mounting it, or integrating with an existing library with an imperative interface (ie JQuery plugin). Related issue.

Also, Elm architecture involves more code boilerplate. It's not that verbose or complicated to write but I think the Elm architecture is more suited to statically typed languages.

###FRP
Libraries like RxJS, BaconJS or Kefir can be used to produce FRP streams to handle communication between components.

You can try for example Rx-React

I think using these libs is quite similar to using what the ELM language offers with signals.

CycleJS framework does not use ReactJS but uses vdom. It share a lot of similarities with the Elm architecture (but is more easy to use in real life because it allows vdom hooks) and it uses RxJs extensively instead of functions, and can be a good source of inspiration if you want to use FRP with React. CycleJs Egghead videos are nice to understand how it works.

###CSP
CSP (Communicating Sequential Processes) are currently popular (mostly because of Go/goroutines and core.async/ClojureScript) but you can use them also in javascript with JS-CSP.

James Long has done a video explaining how it can be used with React.

###Sagas
A saga is a backend concept that comes from the DDD / EventSourcing / CQRS world, also called "process manager". It is being popularized by the redux-saga project, mostly as a replacement to redux-thunk for handling side-effects (ie API calls etc). Most people currently think it only services for side-effects but it is actually more about decoupling components.

It is more of a compliment to a Flux architecture (or Redux) than a totally new communication system, because the saga emit Flux actions at the end. The idea is that if you have widget1 and widget2, and you want them to be decoupled, you can't fire action targeting widget2 from widget1. So you make widget1 only fire actions that target itself, and the saga is a "background process" that listens for widget1 actions, and may dispatch actions that target widget2. The saga is the coupling point between the 2 widgets but the widgets remain decoupled.

If you are interested take a look at my answer here

##Conclusion
If you want to see an example of the same little app using these different styles, check the branches of this repository.

I don't know what is the best option in the long term but I really like how Flux looks like event-sourcing.

If you don't know event-sourcing concepts, take a look at this very pedagogic blog: Turning the database inside out with apache Samza, it is a must-read to understand why Flux is nice (but this could apply to FRP as well)

I think the community agrees that the most promising Flux implementation is Redux, which will progressively allow very productive developer experience thanks to hot reloading. Impressive livecoding ala Bret Victor's Inventing on Principle video is possible!
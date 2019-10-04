- [ ] Why would you use class component over function components (removing hooks from the question)?

Because if we need a state in our component we will need to create a class component or we lift the state up to the parent component and pass it down the functional component via props.

- [ ] Name three lifecycle methods and their purposes.

1.  The Birth or Mounting Phase. It purposes are:
        -It built out the component from ground up.
        -It defines the initial constructor.
        -It invoke the render method.
        -It calls componentDidMount.
2.  Growth or Updating Phase. It purposes are:
        -It uses setState to change the component’s state data, forcing a call to render.
        -It uses shouldComponentUpdate to stop a component from calling render if necessary.
3.  Death or Un-mounting Phase. It purposes are:
    It removes component from the screen.
    It calls componentWillUnmount and can be used for any clean up you may need to do.

- [ ] What is the purpose of a custom hook?

Custom hooks allow us to apply non-visual behavior and stateful logic throughout our components by reusing the same hook over and over again. We can build a reusable custom hook for uses as varied as handling controlled inputs, managing event listeners, and watching for key presses.

- [ ] Why is it important to test our apps?

Testing our apps help us to:
   1. Surfaces bugs faster.
   2. Reduces the risk of regressions.
   3. Allows us to trust the code.
   4. Acts as a safety net when making changes or refactoring.
   5. Acts as documentation for the code.
   6. Encourages us to write more testable code.
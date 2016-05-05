# react-personal-site

My Personal/Portfolio site using ReactJS.

Uses:
- Webpack, Webpack Dev Server and Webpacks Hot Reload
- Working with forms and form submission
- Working with React Form Events and Handlers
- React Mixins
- React Refs: Gives a handle to refer to some part of the component.
  In this case we use it to get a handle to the modal so that we can
  invoke the modal() method on top of it
- React Router to navigate to different pages
- Implement the following pages:
  Home/Resume/Services/About/Fun Page/Contact
- I'll attempt to add animation to the pages

## Installation

- To install app programs and dependencies command line of project directory run: npm install
- To run: npm run dev
- Open http://localhost:8080
- In packake.json.js under scripts > dev, tells webpack where to find main
javascript file
- A node.js server is not used in this configuration (i.e. no server.js file)
- To build the bundle.js file simply run webpack from project directory
(since webpack has been installed globally, you can run this command)
- To minify the bundle.js file at the command prompt (within the project
directory): set NODE_ENV=production(ampersandampersand)webpack
- This sets the node_env environment variable to 'production' thus kicking
off the minimize process within webpack

## Usage

- A 5 page form app in React
- P1: Choose from variety of books (3 choices, checkboxes)
- P2: Enter Shipping Info (name, number, address)
- P3: Choose normal or next day delivery (radio buttons)
- P4: Confirmation of Info Page
- P5: Successful Order Confirmation Page
- A countdown timer has been added to further simulate a shopping cart
- A Message appears via a Bootstrap Modal when the timer has reached zero

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
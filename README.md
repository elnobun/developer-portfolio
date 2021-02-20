# Developer Portfolio
This is a remake of my portfolio: [ellisenobun.com](https://www.ellisenobun.com), 
which was built using only ReactJS. This remake takes a 
slightly different approach, resulting in a more SEO, 
accessible and performant outcome.

## Technology Used
- NextJS
  - Server Side Rendering
  - Static Generation
  - Image optimization feature
  - Built in typescript, css module & scss support
    

- TypeScript
  - Javascript in the "right" context
    

- Tailwind CSS
  - Intuitive CSS

## Milestones 
- [x] Project Setup
    - [x] Install typescript: `npm i -D typescript @types/react @types/node`
    - [x] Install tailwindcss: ` npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
    - [x] Initialize tailwindcss & postcss config: `npx tailwindcss init -p`
    - [x] Remove unused styles in production (tailwindcss.config.js).
    - [x] Include Tailwind in global styles.
- [x] Setup responsiveness (mobile and desktop)
- [x] Sidebar Component
    - [ ] Theme mode (dark / light)
- [x] Create the Navbar
    -[x] Navbar should have the about, projects, and resume pages 
    -[x] Keep track of the active element of each page. Make sure its a `strong` string type (useState<string>(''))
    -[x] If the selected currentItem is not the activeItem, setActiveItem to current item when it's selected.
    -[x] The current activeItem should be displayed on the left-hand side of the navbar.
    -[x] Ensure that the home route did mount, to ensure the route path is equal to the default current item.
- [x] Setup data service on the root directory to hold all the data.
    - [x] Create a typescript interface in `services/types.ts` to describe the shape of the object data.
- [x] Create an api for the services: `api/services` - For good measure.
    - [x] Implement the `getServerSideProps()` to fetch the service data via the api available to the home page as props.
- [x] Display the interface in the home page.
    - [x] Create a ServiceCard component
    - [x] Create function to format HTML in the strings.
- [ ] Setup filter
    - [ ] Filter should be displayed below the Navbar
    - [ ] Filter should be displayed only when on the projects page.

# Developer Portfolio
This is a remake of my portfolio: [ellisenobun.com](https://www.ellisenobun.com), 
which was built using only ReactJS. This remake takes a 
slightly different approach, resulting in a more SEO, 
accessible and performant outcome.

> Desktop View - Light Mode

<img width="1440" alt="Screenshot 2021-02-20 at 14 45 32" src="https://user-images.githubusercontent.com/15114201/108599649-58f40400-738a-11eb-828d-333f8e19a486.png">

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
    - [x] Navbar should have the about, projects, and resume pages 
    - [x] Keep track of the active element of each page. Make sure its a `strong` string type (useState<string>(''))
    - [x] If the selected currentItem is not the activeItem, setActiveItem to current item when it's selected.
    - [x] The current activeItem should be displayed on the left-hand side of the navbar.
    - [x] Ensure that the home route did mount, to ensure the route path is equal to the default current item.
- [x] Setup data service on the root directory to hold all the data.
    - [x] Create a typescript interface in `services/types.ts` to describe the shape of the object data.
- [x] Create an api for the services: `api/services` - For good measure.
    - [x] Implement the `getServerSideProps()` to fetch the service data via the api available to the home page as props.
- [x] Display the interface in the home page.
    - [x] Create a ServiceCard component
    - [x] Create function to format HTML in the strings.
- [x] Setup Resume Page
    - [x] In `types.ts`, create the interface for the skill bars - Name, Level, Icon.
    - [x] In `data.ts`, create an array for the interface. One for the Lang & Frameworks, and other for Tools.
    - [x] Resume should have Experience, Education, Frameworks & Languages, Tools component.
    - [x] Setup interfaces and components for the resume page.
    - [x] Display information for resume page.
- [ ] Setup filter
    - [ ] Filter should be displayed below the Navbar
    - [ ] Filter should be displayed only when on the projects page.

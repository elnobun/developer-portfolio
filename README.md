# Developer Portfolio
This is a remake of my portfolio: [ellisenobun.com](https://www.ellisenobun.com), 
which was built using only ReactJS. This remake takes a 
slightly different approach, resulting in a more SEO, 
accessible and performant outcome.

> Desktop View - Light Mode

<img width="1240" alt="Screenshot 2021-02-21 at 21 23 12" src="https://user-images.githubusercontent.com/15114201/108639179-2251e280-748b-11eb-9479-4e20fccf8e75.png">

> Desktop View - Dark Mode

<img width="1240" alt="Screenshot 2021-02-21 at 21 25 48" src="https://user-images.githubusercontent.com/15114201/108639240-6fce4f80-748b-11eb-84ab-60d1ec63840c.png">

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
    

- next-themes
    - Allows for dynamically changing theme color
    

- Framer Motion
    - Cool Animations

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
- [x] Implement Dark Mode
    - [x] Change `dark mode` in tailwind.config.js to `class`. This is for manual toggling.
    - [x] Install `next-themes`.
    - [x] Wrap the application in `_app` with the `ThemeProvider`.
    - [x] Add the class attribute to the provider.
    - [x] Keep track of the theme color in Sidebar using hooks.
    - [x] Create function to change theme.
- [ ] Setup filter
    - [ ] Filter should be displayed below the Navbar
    - [ ] Filter should be displayed only when on the projects page.

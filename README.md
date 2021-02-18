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
- [x] Create the Navbar
    -[x] Navbar should have the about, projects, and resume pages 
    -[x] Keep track of the active element of each page. Make sure its a `strong` string type (useState<string>(''))
    -[x] If the selected currentItem is not the activeItem, setActiveItem to current item when it's selected.
    -[x] The current activeItem should be displayed on the left-hand side of the navbar.
    -[x] Ensure that the home route did mount, to ensure the route path is equal to the default current item.
- [ ] Setup filter
    - [ ] Filter should be displayed below the Navbar
    - [ ] Filter should be displayed only when on the projects page.

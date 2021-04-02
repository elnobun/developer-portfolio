# Developer Portfolio
This is a remake of my portfolio: [ellisenobun.com](https://www.ellisenobun.com), 
which was built using only ReactJS. This remake takes a 
slightly different approach, resulting in a more SEO, 
accessible and performant outcome.

> Desktop View - Light Mode

<img width="1200" alt="themelight" src="https://user-images.githubusercontent.com/15114201/113451527-0d595f00-93fa-11eb-8c52-06a60a06c138.png">

> Desktop View - Dark Mode

<img width="1200" alt="themedark" src="https://user-images.githubusercontent.com/15114201/113451567-23ffb600-93fa-11eb-908a-3e19b96fe988.png">

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
- [x] Implement Dark Mode
    - [x] Change `dark mode` in tailwind.config.js to `class`. This is for manual toggling.
    - [x] Install `next-themes`.
    - [x] Wrap the application in `_app` with the `ThemeProvider`.
    - [x] Add the class attribute to the provider.
    - [x] Keep track of the theme color in Sidebar using hooks.
    - [x] Create function to change theme.

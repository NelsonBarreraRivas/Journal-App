# HEROES SPA APP


Es un proyecto de aprendizaje en la ruta de REACT, cabe recalcar que para el uso de la APP se necesitan credenciales de la API de [Marvel](https://developer.marvel.com/).

El login solo es una simulación para poder probar el [useReducer](https://es.reactjs.org/docs/hooks-reference.html#usereducer) y el [useContext](https://es.reactjs.org/docs/hooks-reference.html#usecontext)

## Tools| Hooks | Libreries
[![React][React.js]][React-url]

- [useEffect](https://es.reactjs.org/docs/hooks-reference.html#useeffect)
- [useLayout](https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect)
- [useState](https://es.reactjs.org/docs/hooks-reference.html#usestate)
- [useContext](https://es.reactjs.org/docs/hooks-reference.html#usecontext)
- [useReducer](https://es.reactjs.org/docs/hooks-reference.html#usereducer)
- [useRef](https://es.reactjs.org/docs/hooks-reference.html#useref)
- [React Router](https://reactrouter.com/en/main)
- [query string](https://www.npmjs.com/package/query-string)
- [React Loading](https://www.npmjs.com/package/react-loading)
- [Jest Testing React App](https://jestjs.io/docs/tutorial-react)
- [React Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- [TailwindCSS](https://tailwindcss.com/)

## Getting Started

```bash
yarn install
```
## Getting Started Test
Para que el test se ejecute de manera correcta se necesitaran las variables de entorno en el archivo *environment-variable.js* que debe de estar en la raíz del proyecto.

```javascript
//environment-variable.js
export default (function () {
    process.env.VITE_PUBLIC_API_KEY=*******
    process.env.VITE_PRIVATE_API_KEY=*******
    process.env.VITE_MD5_HASH_KEY=******
}())
```

```bash
yarn test
```

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
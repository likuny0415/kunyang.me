# Doc

### What features I achieved
1. Developed the language switcher feature that allow users to read my site by preference.
2. Designed and implemented features that embed JXS components in Markdown files and enable code highlighting.
3. Builded my site responsive, cross-browser compatible and user-friendly by using bootstrap and nextjs.
4. Continous integration/deployment pipeline integration, automated format code and check errors. 



### How to include CI/CD process (husky)

initialize husky and install packages

```console
npx husky-init && yarn
```

format and check errors of the code

```console
yarn add --dev lint-staged prettier
```

in husky folder, add this

```shell
yarn lint-staged
```

in pageckage.json

```js
"lint-staged": {
    "*.{css,html,md,mdx,js,json}": "prettier --write",
    "*.js": "eslint --fix"
  }
```

### Problems I Met

#### Task1: How to change from en/resume to zn/resume

First I tried to use `useState()` to keep track of the current
language, so when the user click the language switcher, it will change from "en" to "zh". However, every time after I click the button from ENG to 中文, the navbar will change at that moment, but turn back as long as I remove the cursor from the bug. And find out that useState() function will be refresh every time after refresh the page

```js
// state will change back to "en" as user refresh the page
const curlanguage = useState("en");
```

**Soulution**
So my solution to deal with this problem is to keep track of the url. As long as the user is the the resume page, we have its language version and its destination, which "en" is the language, and "resume" is our destination, so "resume" is constant we click the language switcher and it will give me "zh/resume", so we can redirect our page from "en/resume" to "zh/resume" to solve this problem.

```js
// kunyang.me/en/resume
const router = useRouter();
const path = router.pathName(); // it will gives us the pathname
const splitPath = path.split("/");
const destination = path[splitPath.length - 1]; // gives us resume and then we can redirect by join("zh" + destination) to achieve language switcher
```

#### Task2: How to go back to previous page

First I tries to use `window.history()` to help me back to the previous page, but because SSR(server side rendering) render component in the server not in client side(browser), so it doesn't have access to `window` or `document`.

**Solution**
But router can perfectly solve this problem. It helps us manauge our url like file-system. And keep track of all the urls in the page folder

```js
// use router again!
const router = useRouter();
router.back(); // previous page
```

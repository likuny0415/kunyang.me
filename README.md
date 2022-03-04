# Doc

## Nabar

### Design

1. when open the page -> kunyang.me/en
   - Resume -> kunyang.me/en/resume
   - etc..
2. 当你点击 zh 切换成中文界面时，此时 navbar 应该是中文界面 -> kunyang.me/zh
   - 简历 -> kunyang.me/zh/resume
   - etc..
3. when on the English page -> **English** should be highlights, same for **zh**
4. when you on Resume page -> **Resume** in the navbar should be highlights

### Problems

1. Navbar is the in app.js
   - how to change it from en -> zh ?
     - when you click zh, it automates to kunyang.me/zh, and need a state to keep track of the current language in order to set for the navbar
   -

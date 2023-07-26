## What is the next13 Todo List App?
For the time being, the application serves to allow users to simply add any todos onto a list to then be tracked.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Future Plans?`

Will add data a delete funcitonality, dynamic styling, edit to list items, and more.

### `How to run the app locally:`

#### `Navigate to your terminal`
```bash
git clone https://github.com/LongJourney47/next13-todo-list.git
npm run dev
```
#### `Database set-up`
1. npm i prisma --save-dev
2. npx prisma init --datasource-provider sqlite
3. npx prisma mirgate dev --name init //This step will provide db files

#### `Concerning gitignore`
Add the .env file alongside the dev.db files


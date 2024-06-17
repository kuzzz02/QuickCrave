# QuickCrave

## Environments
- React-Native
- yarn
- Android Studio (sdk 34)


## Front-End File Structure
```
|- android
    |- app
|- ios
|- assests
|- src
|   |- common
|   |- components
|   |- middleware
|   |- services
|   |- pages
|   |- App.js
|   |- http.js
|- index.js
|- package.json
|- yarn.lock
|- .gitignore
```

- `android`: android project directory
- `app`: compile and build config
- `ios`: ios project directory
- `assests`: fonts requirement
- `src`: source code
- `common`: static resource
- `components`: components
- `middleware`: middleware
- `services`: interfaces request
- `pages`: views
- `App.js`: root component
- `http.js`: axios root component
- `index.js`: project root component
- `package.json`: dependency config
- `yarn.lock`: dependency --version manager
- `.gitignore`: git ignore unnecessary files

## Start Front-end app
- Access main folder
```
cd client
```

- Package manager
```
npm install -g yarn
yarn
```

- start project
```
yarn android
```


# React Native

## Get Started

- Use React Native CLI to install React Native. It requires Xcode or Android Studio to get started. Instruction and all requires [here](https://reactnative.dev/docs/getting-started.html#installing-dependencies-3)
- Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger) or [Flipper](https://fbflipper.com/docs/features/react-native.html) for ease debug. 
    - React Native Debugger - based on official [Remote Debugger](https://reactnative.dev/docs/debugging.html#chrome-developer-tools) and provide more functionally. Have a lot devtools for debugging (React DevTools, Redux DevTools, Apollo Client DevTools,  Network inspect of Chrome Developer Tools and console).
    - Flipper - is enabled out of the box in React Native version 0.62 and higher. It is more comfortable to use, faster and don't crash. It hasn't Redux DevTools but you can use one of this plugin [flipper-rn-redux-inspector-plugin](https://github.com/zrg-team/flipper-rn-redux-inspector-plugin) or [flipper-plugin-reduxinspector](https://github.com/blankapp/flipper-plugin-reduxinspector). If you want more plugin, flipper gives opportunity write own [JS Plugins](https://fbflipper.com/docs/tutorial/react-native.html)

Create a new project use command:
```
npx react-native init NewProject
```

Create a new project with TypeScript
```
npx react-native init NewProject --template react-native-template-typescript
```

```
# Install dependencies
yarn install && ( cd ios && pod install )
```

#### IOS
```
# Start in the iOS Simulator
npx react-native run-ios --simulator="iPhone 11"
```

#### Android
Before run android you should start the Android Simulator.
- Open Android Studio > Tools > AVD > Run a device
- If you have already created simulator in Android Studio you can use command:
  `~/Library/Android/sdk/tools/emulator -avd SimulatorName`
```
npx react-native run-android
```

## Architecture

- **State managers**
    
    We use [Redux](https://redux.js.org/introduction/getting-started) for manage global store. It has Flux architecture and it allow shared sate between components using global stores.
    Also we recommend [redux-toolkit](https://redux-toolkit.js.org/introduction/quick-start). It helps configure Redux store. Provide utils for create reducers, actions and manage store. Has `createAsyncThunk` func in beta. It allow make async action and call request to API.
    
- **Side effects**

    You can use [Redux-Sage](https://redux-saga.js.org/) or [Redux-Thunk](https://github.com/reduxjs/redux-thunk). Redux-Saga has a lot utils that help you manage you global store with side-effects. Redux-Thunk more simple then redux-saga. Thunks are the middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.
    
- **Routing in app**

    [React-Navigation](https://reactnavigation.org/docs/getting-started) used for manage routing between screen. It docs has a lot example how build navigation structure in app.
    
- **Forms**

    When you have few small forms for all project, you can use `useState` or `useReducer` and don't install any additional libraries.
    For app with more difficult forms you can use one of this libraries:
    
    - [Formik](https://jaredpalmer.com/formik/docs/guides/react-native) - is a component that helps you with building forms. It uses a render props pattern made popular by libraries like React Motion and React Router. 12.7kB. 50% smaller than redux-form
    - [React Hook Form](https://react-hook-form.com/get-started#ReactNative) - performance, flexible and extensible forms with easy-to-use validation. 8.5kB. ~25% faster than Redux Form
    
- **Recomended File structure**
    ```
    my-app
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── index.js
    └── app
        └── assets - assets (image, audio files, ...) used by the application
            ├── fonts
            └── images
        └── components - presentational components
            └── CommonComponent
                └──  __tests__
                    └── CommonComponent-test.js
                ├── index.js
                └── styles.js
        ├── store - redux actions, reducers, selectors + redux config
        ├── navigation - react navigation navigators
        └── screens - the application's screens
            └── SomeScreen
                ├── components
                ├── index.js
                └── styles.js
        ├── theme - base styles for the application
        └── utils - application services, e.g. API clients
    ```
  
- **Styleguide**

    You should use [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native. Style linters with common rules used that all programmers have the same style of code.
    Use linter with precommit hooks like [husky](https://github.com/typicode/husky) with [lint-staged](https://github.com/okonet/lint-staged). It forbid to push files with linter's warnings and errors to repository.
    Recommend use standard rules that react-native have already included.
    
    Example `.prettierrc` with some small changes
    
    ```
    module.exports = {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'all',
        semi: true,
        printWidth: 120
    };
    ```
  
    Example `.eslintrc`
  
    ```
    module.exports = {
        root: true,
        extends: '@react-native-community',
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        rules: {
          'jsx-quotes': ["error", "prefer-single"]
        }
      };
    ```
  
- **Styles**

React Native provide [StyleSheet](https://reactnative.dev/docs/stylesheet) for create style of your component.
If you want write your style as CSS, you can use [style-component](https://styled-components.com/docs/basics#react-native) or [emotion](https://emotion.sh/docs/@emotion/native).
Style-component and Emotion is better if you need make different themes for one app. But StyleSheet has the best performance.

## Recommended
- [axios](https://github.com/axios/axios) - promise based HTTP client for the browser and node.js
- [redux-persist](https://github.com/rt2zz/redux-persist) - used for data caching and make offline mode of app.
- [react-native-firebase](https://invertase.io/oss/react-native-firebase/) - is the officially recommended collection of packages that brings React Native support for all Firebase services on both Android and iOS apps. (Auth, Analytics, Messages, Notification ...)
- [rn-fetch-blob](https://github.com/joltup/rn-fetch-blob) - give access to files and alowe send it as blob.

## Useful documentation

- [Native Base](https://nativebase.io/)
- [React Native Material Design](https://github.com/invertase/react-native-material-design)
- [Lottie for React Native](https://github.com/react-native-community/lottie-react-native)
- [React Native Camera](https://github.com/react-native-community/react-native-camera)
- [React Native Camera Kit by WIX](https://github.com/wix/react-native-camera-kit)
- [React Native Image Picker](https://github.com/react-native-community/react-native-image-picker)
- [Redux-Actions](https://github.com/redux-utilities/redux-actions) as alternative for redux-toolkit
- [react-native-config](https://github.com/luggit/react-native-config) it allows us to set up different configuration files for different environments in as JS as Native code.

## Test
Use [Detox](https://github.com/wix/Detox) for end-to-end testing and automation framework for mobile apps. It tests your app while it's running on device/simulator.

## Deployment
Our recommended is [Fastlane](https://fastlane.tools/). Using Fastlane to automate builds and store deployments (iOS and Android). 
Or you can use guide from [for Android](https://reactnative.dev/docs/signed-apk-android) and [for IOS](https://medium.com/@the_manifest/how-to-publish-your-app-on-apples-app-store-in-2018-f76f22a5c33a)

## Utilities

- convert svg to png [script](svgs2pngs.sh)
- create request to api [script](apiHelpers.js)
- fastfile for deploy IOS [script](Fastfile)

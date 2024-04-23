This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## Additional step-by-step instructions on how to run a React Native project locally:

Install Node.js: Make sure you have Node.js installed on your computer. You can download and install it from the official website:
https://nodejs.org/en

Install React Native CLI: Open your terminal or command prompt and install the React Native CLI globally by running the following command:
java
Copy code
npm install -g react-native-cli
Clone the Project: Clone the React Native project repository from a version control system like GitHub or Bitbucket. Navigate to the directory where you want to store the project and run the following command:
bash
Copy code
git clone <repository-url>
Install Dependencies: Navigate into the project directory using the terminal or command prompt and install the project dependencies by running:
bash
Copy code
cd <project-directory>
npm install
Set Up Environment: Depending on your development environment, you may need to set up additional configurations. For example, if you're developing for iOS, you'll need Xcode installed on a macOS system. If you're developing for Android, you'll need Android Studio installed.
Start the Metro Bundler: The Metro Bundler is a JavaScript bundler that helps bundle and serve your JavaScript code. Start the Metro Bundler by running:
java
Copy code
npx react-native start
Run on iOS: To run the project on an iOS simulator or device, open a new terminal window and run:
arduino
Copy code
npx react-native run-ios
Run on Android: To run the project on an Android emulator or connected device, open a new terminal window and run:
arduino
Copy code
npx react-native run-android
Test the Application: Once the application builds successfully, you should see it running on the simulator or device. You can interact with the app to test its functionality.
Make Changes and Debug: You can make changes to the codebase and see the updates reflected in real-time on the simulator or device. Use the developer tools provided by React Native to debug any issues that arise during development.
By following these steps, you should be able to run the React Native project locally on your development machine and begin working on it.

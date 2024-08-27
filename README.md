# Toast Notification System

A reusable toast notification system built with React. This project provides a global toast notification mechanism with customizable messages, positions, and durations.

## Features

- **Global Accessibility:** The toast notifications can be triggered from anywhere in the application.
- **Default Message Types:** Includes predefined message types (info, warning, error, success) with corresponding icons and styles.
- **Custom Messages:** Allows for custom messages, styles, and icons.
- **Positioning:** Toast notifications can be positioned at various places on the screen (e.g., top-right, bottom-center).
- **Custom Delay:** Supports custom delay for auto-dismissal of the notifications.
- **Responsive Design:** The design is responsive and visually appealing.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn)
- A code editor like Visual Studio Code

### Installation

 **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd toast-app
   ```
### Usage

#### Toast Provider: Wrap your application with ToastProvider to provide context to the toast system.

import { ToastProvider } from './components/ToastProvider';

function App() {
  return (
    <ToastProvider>
      {/* Your application components */}
    </ToastProvider>
  );
}


#### Triggering Toasts: Use the useToast hook to trigger a toast notification.

import { useToast } from './components/ToastProvider';

function SomeComponent() {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast('This is an info toast!', 'info');
  };

  return <button onClick={handleClick}>Show Info Toast</button>;
}

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

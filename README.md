# Madi App
  ของดี

> ทำวันนี้ให้แย่กว่าเมื่อวาน พร่ามมม

This application is purely a kitchen-sink demo of the Ionic Framework and Angular.

**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic components in a real-world application. Please go through the steps in [CONTRIBUTING](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.

## React and Vue Versions

We've built versions of this Conference app in React and Vue for developers that would prefer to use one of those framework options:

[https://github.com/ionic-team/ionic-react-conference-app](https://github.com/ionic-team/ionic-react-conference-app)

[https://github.com/ionic-team/ionic-vue-conference-app](https://github.com/ionic-team/ionic-vue-conference-app)

## Table of Contents
- [Getting Started](#getting-started)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._

## App Preview

| Login  | Setting | Change Password | Logout |
| ------------- | ------------- | ------------- | ------------- |
|  ![preview-1](https://user-images.githubusercontent.com/41660990/211323328-f985ca06-743a-4446-97ac-a55a65e6ccbf.png)  |  ![preview-2](https://user-images.githubusercontent.com/41660990/211323333-3286d47b-ff92-4fa3-8b70-8d0fbe4d125c.png)  | ![preview-3](https://user-images.githubusercontent.com/41660990/211323342-e434a405-7b66-4879-82bd-79fb256f9c5b.png)  | ![preview-4](https://user-images.githubusercontent.com/41660990/211323346-41056f35-f336-4df4-86bd-126d322608e1.png)  |

## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `ionic build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cap run android --prod`

### iOS

1. Run `ionic cap run ios --prod`




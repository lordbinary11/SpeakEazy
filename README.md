SpeakEazy 

Welcome to the SpeakEazy! SpeakEazy is an advanced speech recognition software with three main features: text-to-speech, speech-to-text, and translation. This app is built with React Native and Expo, and it is designed for Android devices.
Features

    Text-to-Speech: Converts written text into spoken words.
    Speech-to-Text: Transcribes spoken words into written text.
    Translation: Translates text or speech from one language to another.

Tech Stack

    React Native: Framework for building native apps using React.
    Expo: A set of tools and services built around React Native to help you build, deploy, and quickly iterate on iOS, Android, and web apps.
    Expo Libraries: Utilized for various functionalities such as speech recognition and text-to-speech.
    Native Libraries: Required for advanced features. Note that some native libraries do not work directly with Expo and require you to run a development build.

Demo Video

Check out our demo video to see SpeakEazy in action:
    https://youtu.be/spDFXpm-DT0

Getting Started
Prerequisites

    Node.js
    npm or yarn
    Expo CLI (npm install -g expo-cli)
    Android Studio (for Android emulator or physical device setup)

Installation

  Clone the repository:

  sh

    git clone https://github.com/lordbinary11/SpeakEazy.git
cd speakeazy

Install dependencies:

sh

npm install
# or
yarn install

Run the app:

sh

    expo start

Running a Development Build

To use native libraries that are not compatible with the standard Expo workflow, you need to create a development build. Follow these steps:

  Install the Expo Development Client:

  sh

    expo install expo-dev-client

Build the development client:

sh

    eas build --profile development --platform android

Install the development build on your device:
After the build completes, you will receive a URL. Open this URL on your Android device to download and install the APK.

Run the app with the development client:

sh

    expo start --dev-client

For a detailed guide on creating a development build with Expo, refer to the official Expo documentation.
Running on a Physical Device or Emulator

   Start the Android emulator or connect your Android device.
    Run the app:

  sh

    npx react-native run-android

Contributing

We welcome contributions! Please read our Contributing Guide to learn how you can help improve SpeakEazy.
License

This project is licensed under the MIT License - see the LICENSE file for details.

# StanzaLivProject

Used Configurations:-
Node Version: 14.15.1
react-native: 0.66.0

dependencies used: -
react-native-linear-gradient:   used to have support of Linear Gradient in Project
react-native-radial-gradient:   used to have support of Radial Gradient in Project
@react-native-community/blur:   used to intoduce blur effect in APp, used its BlurView component
lodash: used its get, isFunction and isEmpty.
@react-native/normalize-color:  was facing issue with colour(something related to normaliz) used this to remove that issue.

Steps to run App
1. npm i (in Project Repo)
2. npx react-native run-android ( to run on Android Simulator)
3. npx react-native run-ios ( to run on Ios Simulator)
4. To Create APK (cd android && ./gradlew clean && ./gradlew assembleRelease)


App's HomeScreen


<img width="347" alt="Screenshot 2022-09-04 at 10 06 36 PM" src="https://user-images.githubusercontent.com/112815537/188323915-19e3129e-ceb1-455d-9d4e-764f841518c8.png">


Solution: 
* This above box is one component which has 2 child component (Blur effect is there)
----1. Carousel Componet: (Easily Reusable just need to add an item to mockData and map image corresponding to it)
----2. DetailsWidget Component: (Easily Reusable jus need to pass different data in details_data)

Note: - if image is taken from API call it will be more reusable, There will be no need for image mapping)

** There Can be any number of componet as like above. **

* Header Componet is customizable based on onClick action and headerText.
(it can be more customizable, like it can support Right Action, can support both left and Right components)

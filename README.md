# angular-webpack-skeleton

## Settings up project
- npm install --save-dev

## Start using project
- npm run start:hmr (run server with hot module replacement)
- npm run start:dev (run server in dev mode)
- npm run start:test (run server in test mode)
- npm run start:prod (run server in production mode)

## Customize fonts
1. Change local storage variable(angularWebpackSkeletonFonts) to #{projectName}Fonts 
    path ./src/assets/fonts/fonts.js
2. Add your base64 fonts to ./src/assets/fonts/fonts.css
3. Add font-family to sass function src/assets/sass/base/functions/fonts.sass
4. Happy use in sass: font-family: font(robotoregular)
 
## Sprite icons 
- Add your icons to ./src/assets/images/sprite
 
## Favicon
- Add your icons to ./src/assets/images/favicon


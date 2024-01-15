1. gh-pages 모듈 설치
```scripts
npm install gh-pages --save-dev
``` 
2. 홈페이지 url 작성
  - package.json에 "homepage": `"https://DS0708.github.io/react-tictactoe-app/",` 추가하기
3. 배포를 위한 script 추가
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
- `predeploy` -> 먼저 리액트 앱을 웹팩으로 빌드해주기
- 그 다음에 빌드 폴더를 이용해서 배포해주기
4. Build
```
npm run predeploy
또는
npm run build
```
5. Deploy
```
npm run deploy
```
6. `https://DS0708.github.io/react-tictactoe-app/` 접속


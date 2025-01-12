# creating a typescript libray


## Step 1. create typescript library

1. Set Up the Project Structure

```bash
mkdir my-library
cd my-library
npm init -y
npm install typescript tsup --save-dev
```
- typescript: For TypeScript support.
- tsup: For bundling the library.
2. Initialize TypeScript Configuration

```bash
npx tsc --init
```

3. Modify tsconfig.json for library settings:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "declaration": true,
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

add scripts to package.json

```bash
"scripts": {
    "build": "tsup",
    "clean": "rm -rf dist",
    "prepare": "npm run build"
}
```

## Step 2: Test Locally Without Publishing to NPM
Build the Library

```bash
npm run build
```
Link the Library

```bash
npm link
```
Use It in Your Backend Service In your backend project:

```bash
npm link my-library
```

## Step 3: Publish the Library on NPM

1. Add Metadata to package.json Update package.json with the following fields:

```json
{
    "name": "my-library",
    "version": "1.0.0",
    "main": "dist/index.js",
    "module": "dist/index.mjs",
    "types": "dist/index.d.ts",
    "files": [
        "dist"
    ],
    "keywords": ["typescript", "library"],
    "author": "Your Name",
    "license": "MIT"
}
```

2. Login to NPM
   
```bash
npm login
```

3. publish the library

```bash
npm publish
```

## Step 4: Install and Test from NPM
Install the Library

```bash
npm install my-library
```
1. Use It in Your Service

```typescript
import { greet } from 'my-library';
console.log(greet("World"));
```
   
Emi Roberti - Happy coding 

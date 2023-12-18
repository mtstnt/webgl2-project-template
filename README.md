# Setup WebGL with Typescript & File Loading.

## Setting Up:
1. `npm/pnpm install`
2. `npm/pnpm start` or `node esbuild.mjs`.
3. Run the Live Server in VSCode or open the file in the browser.
4. Done, every change made in the `src` folder will trigger a refresh.

## Adding Shaders/Files to Load.
1. Create the file somewhere.
2. Add the file extension in esbuild.mjs, in the `loader` object.
3. `import` the file from your ts file.
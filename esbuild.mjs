import * as esbuild from 'esbuild'

async function buildAndWatch() {
  const ctx = await esbuild.context({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    outfile: 'dist/index.js',
    loader: {
      '.glsl': 'text',
      '.obj': 'text',
    },
  });

  await ctx.watch();
  console.log("Watching...");
}

buildAndWatch();

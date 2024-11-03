import { createHash } from 'crypto';
import { readFile, writeFile } from 'fs/promises';

import swc from '@swc/core';
import { rollup } from 'rollup';

const extensions = ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.cts', '.mts'];

/** @type import("rollup").InputPluginOption */
const plugins = [
  swc({
    jsc: {
      target: undefined,
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
    // https://github.com/facebook/hermes/blob/3815fec63d1a6667ca3195160d6e12fee6a0d8d5/doc/Features.md
    // https://github.com/facebook/hermes/issues/696#issuecomment-1396235791
    env: {
      targets: 'fully supports es6',
      include: [
        'transform-block-scoping',
        'transform-classes',
        'transform-async-to-generator',
        'transform-async-generator-functions',
      ],
      exclude: [
        'transform-parameters',
        'transform-template-literals',
        'transform-exponentiation-operator',
        'transform-named-capturing-groups-regex',
        'transform-nullish-coalescing-operator',
        'transform-object-rest-spread',
        'transform-optional-chaining',
        'transform-logical-assignment-operators',
      ],
    },
  }),
  minify(),
  buildLogger(manifest.id),
  manifestWriter(manifest),
];

const manifest = JSON.parse(await readFile(`./manifest.json`));
const outPath = `./dist/index.js`;

try {
  const bundle = await rollup({
    input: `./${manifest.main}`,
    onwarn: () => {},
    plugins,
  });

  await bundle.write({
    file: outPath,
    globals(id) {
      if (id.startsWith('@vendetta'))
        return id.substring(1).replace(/\//g, '.');
      if (id.startsWith('@bunny')) {
        return id.substring(1).replace(/\//g, '.');
      }
      const map = {
        react: 'window.React',
      };

      return map[id] || null;
    },
    format: 'iife',
    compact: true,
    exports: 'default',
    name: 'plugin',
  });
  await bundle.close();

  const toHash = await readFile(outPath);
  manifest.hash = createHash('sha256').update(toHash).digest('hex');
  manifest.main = 'index.js';
  await writeFile(`./dist/manifest.json`, JSON.stringify(manifest));

  console.log(`Successfully built ${manifest.name}!`);
} catch (e) {
  console.error('Failed to build plugin...', e);
  process.exit(1);
}

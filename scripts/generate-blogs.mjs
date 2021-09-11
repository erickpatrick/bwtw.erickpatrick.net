import fs from 'fs';
import globby from 'globby';
import { createCompiler } from '@mdx-js/mdx';
import visit from 'unist-util-visit';

(async () => {
  const files = await globby([
    'pages/blog/**/*.(mdx)',
    '!pages/blog/_*.(js|ts|jsx|tsx|mdx)',
    '!pages/api',
  ]);

  const posts = files.map((file) => {
    const link = file.replace('pages/', '').replace('.mdx', '');
    const finalFile = fs.readFileSync(process.cwd() + '/' + file);

    const extractMeta = () => (tree, file) =>
      visit(tree, 'export', function visitor(node) {
        if (node.value.includes('const meta')) {
          const value = node.value;
          const finalMeta = value
            .replace('export const meta = ', '(() => (')
            .replace('};', '}))()');

          file.data.frontmatter = eval(finalMeta);
        }
      });
    const compiler = createCompiler({
      remarkPlugins: [extractMeta],
    });

    let meta = {};

    compiler.process(finalFile, (_err, file) => {
      meta = file.data.frontmatter;
    });

    return JSON.stringify({
      link,
      ...meta,
    });
  });

  // eslint-disable-next-line no-sync
  fs.writeFile('pages/blog/posts.json', `{"posts":[${posts}]}`, () => ({}));
})();

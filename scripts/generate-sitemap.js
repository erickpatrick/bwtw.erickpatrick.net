import fs from 'fs';
import globby from 'globby';
import prettier from 'prettier';

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');
  const pages = await globby([
    'pages/**/*.(js|ts|jsx|tsx|md|mdx)',
    '!pages/_*.(js|ts|jsx|tsx)',
    '!pages/api',
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace(/\.(jsx|tsx|mdx)/, '');
                const route = path.includes('/index')
                  ? path.replace('/index', '')
                  : path;

                return `
                        <url>
                            <loc>${`http://localhost:3000${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted);
})();

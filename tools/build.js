#!/usr/bin/env node

const html = require('remark-html')
const recommended = require('remark-preset-lint-recommended')
const remark = require('remark')
const rimraf = require('rimraf')
const { join } = require('path')
const { copySync } = require('fs-extra')
const {
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync
} = require('fs')

const ROOT_FOLDER = join(__dirname, '..')
const LAYOUT = join(ROOT_FOLDER, 'src', 'layout.html')
const PAGES_FOLDER = join(ROOT_FOLDER, 'src', 'pages')
const STATIC_FOLDER = join(ROOT_FOLDER, 'src', 'static')
const OUT_FOLDER = join(ROOT_FOLDER, 'out')

run()

function run () {
  // Delete /out folder
  rimraf.sync(OUT_FOLDER)

  // Create /out folder
  mkdirSync(OUT_FOLDER, { recursive: true })

  // layout.html is the template for the whole site
  const layout = readFileSync(LAYOUT, 'utf8')

  // Read in each page, surround it with layout.html, write it to /out
  readdirSync(PAGES_FOLDER)
    .forEach(async pagePath => {
      if (!pagePath.endsWith('.md')) {
        console.log(`Warning: Skipping build of non-markdown file: ${pagePath}`)
        return
      }
      const pageMd = readFileSync(join(PAGES_FOLDER, pagePath), 'utf8')
      const page = await remark()
        .use(recommended)
        .use(html)
        .process(pageMd)

      const outPage = layout.replace(/CONTENT/g, page)

      const outPagePath = join(OUT_FOLDER, pagePath.replace(/\.md$/, '.html'))
      writeFileSync(outPagePath, outPage)
    })

  // Copy static resources into /out
  copySync(
    join(require.resolve('normalize.css')),
    join(OUT_FOLDER, 'normalize.css')
  )

  copySync(STATIC_FOLDER, OUT_FOLDER)
}

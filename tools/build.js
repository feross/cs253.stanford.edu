#!/usr/bin/env node

const {
  copyFileSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync
} = require('fs')
const { join } = require('path')
const rimraf = require('rimraf')

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
    .forEach(pagePath => {
      const page = readFileSync(join(PAGES_FOLDER, pagePath), 'utf8')
      const outPage = layout.replace(/CONTENT/g, page)

      const outPagePath = join(OUT_FOLDER, pagePath)
      writeFileSync(outPagePath, outPage)
    })

  // Copy static resources into /out
  copyFileSync(
    join(require.resolve('normalize.css')),
    join(OUT_FOLDER, 'normalize.css')
  )

  readdirSync(STATIC_FOLDER)
    .forEach(filePath => {
      copyFileSync(
        join(STATIC_FOLDER, filePath),
        join(OUT_FOLDER, filePath)
      )
    })
}

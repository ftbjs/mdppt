const markdownIt = require('markdown-it')
const hljs = require('highlight.js')

const parseSliderRule = /<slide([^>]*?)>([\s\S]+?)<\/slide>/igm
const parseAttrs = /([\w:]+)="([^"]+)"/igm

const mdRender = markdownIt({
  html: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }
    return ''
  }
})

module.exports = (context) => {
  let matchResult
  const result = []
  const htmlResult = []

  while(matchResult = parseSliderRule.exec(context)) {
    result.push({
      slideContect: matchResult[1],
      mdContent: matchResult[2]
    })
  }

  if (result.length <= 0) {
    return '<div>Not Slide Found</div>'
  }

  for (let i = 0; i < result.length; i++) {
    htmlResult.push(`
      <section ${result[i].slideContect.trim()}>
        ${mdRender.render(result[i].mdContent)}
      </section>
    `)
  }
  return `
    <div id="mdppt">
      <div class="mdppt-content">
        ${htmlResult.join('\n')}
      </div>
    </div>
  `
}
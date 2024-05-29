const root = document.getElementById("content")
const parser = new DOMParser()

export function d(classes, ...children) {
  root.appendChild(
    parser.parseFromString(
      `<div class="${classes}">${children}</div>`
      , "text/html").doc.body.firstChild
  )
}

d(`bg-red-500`)
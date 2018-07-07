function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild(n) {
  let nodes = document.querySelectorAll('div#grand-node div')
  return nodes[nodes.length - 1]
}

function increaseRankBy(n) {
  const listItems = document.querySelectorAll('ul.ranked-list li')
  listItems.forEach(li => li.innerHTML = parseInt(li.innerHTML) + n)
}

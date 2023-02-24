const SEARCH_FORM = document.getElementById("searchForm")
const PARAGRAPH = document.getElementById("text")

SEARCH_FORM.addEventListener("submit", (e) => {
  e.preventDefault()

  let search = e.target[0].value
  search = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

  let regex = new RegExp(search, "gi")

  PARAGRAPH.innerHTML = PARAGRAPH.innerText.replace(
    regex,
    (match) => `<mark>${match}</mark>`
  )
})

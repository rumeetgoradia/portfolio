exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (
    page.path.match("/about") ||
    page.path.match("/experience") ||
    page.path.match("/projects")
  ) {
    page.context.layout = "particles"
  }
  createPage(page)
}

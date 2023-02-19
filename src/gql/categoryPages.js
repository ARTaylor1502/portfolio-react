export const categoryPagesQuery = (categoryId) => `
{
  portfolioPageCollection(where: {category: {category: "${categoryId}"}}) {
    items {
      sys {
        id
      }
      title
      bannerImage {
        url
        title
      }
    }
  }
}
`;

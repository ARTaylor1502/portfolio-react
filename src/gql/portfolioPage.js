export const portfolioQuery = (pageId) => `
{
  portfolioPage(id: "${pageId}") {
     title
    bannerImage {
      url
      title
    }
    briefclientRequirements
    techUsed
    development
    projectOutcome
  }
}
`;

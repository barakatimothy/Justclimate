import React, { useState } from 'react';
import './NewsFeed.css';

const NewsFeed = () => {
  // State for managing pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2); // Adjust the number of items per page as needed
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Sample news data
  const newsData = [
    {
      id: 1,
      title: "Climate Action at COP28: Putting Justice at the Heart of Progress",
      content: `Dubai, UAE (Feb 22, 2024): As world leaders gather for COP28, the "Climate Justice Now" movement echoes strong through the halls. While acknowledging the need for ambitious mitigation strategies, activists and representatives from vulnerable nations urge a shift towards solutions that address the historical and ongoing inequalities of the climate crisis.

"We cannot talk about climate action without talking about justice," declared Vanessa Nakate, Ugandan climate activist. "Those who contributed least to the problem are bearing the brunt of the impacts." This sentiment reflects the reality faced by developing nations and marginalized communities, who despite minimal historical emissions, suffer disproportionately from rising sea levels, extreme weather events, and resource scarcity.

A key demand centers on "loss and damage," a contentious clause in international agreements. Developing nations advocate for accessible funding to address the irreversible consequences of climate change they did not cause. This call resonates with the Pacific Island states, whose very existence is threatened by rising waters.

Beyond financial aid, the push for justice extends to representation and decision-making. Indigenous communities and local voices, often the guardians of traditional ecological knowledge, demand a seat at the table. Gender equality also takes center stage, with initiatives like the "Women Powering Change" program amplifying the voices of women leaders in climate solutions.

While challenges remain, COP28 presents an opportunity to move beyond symbolic gestures and translate climate justice into concrete action. From equitable financing and technology transfer to inclusive decision-making structures, the summit aims to pave the way for a future where climate action protects not just the planet, but also its most vulnerable inhabitants.`,
    },
    {
      id: 2,
      title: "Lima, Peru (Feb 22, 2024):",
      content: "Lima, Peru (Feb 22, 2024): As the psychological wounds of climate change deepen, the \"Climate Justice for Mental Health\" campaign shines a light on a hidden dimension of the crisis. While rising sea levels and extreme weather dominate headlines, the emotional burden borne by individuals and communities struggling to adapt is rarely addressed. \"Witnessing your home disappear, fearing for your loved ones, feeling helpless against a global problem - these are realities millions face,\" says Dr. Ana Maria Pérez, a psychologist working with climate-displaced communities in Peru. \"The mental health consequences are profound, ranging from anxiety and depression to post-traumatic stress disorder.\"",

    },
    {
      id: 3,
      title: "Nairobi, Kenya (Feb 22, 2024)",
      content: "Nairobi, Kenya (Feb 22, 2024): As COP28 unfolds, a critical tension emerges: the differing experiences and priorities of urban and rural communities within the climate justice movement. While both face the consequences of a warming planet, their narratives and demands often diverge. For urban dwellers, concerns center around air pollution, access to clean water, and the rising cost of living due to climate-induced food insecurity. Initiatives like \"Green Cities for All\" advocate for sustainable infrastructure, renewable energy grids, and urban agriculture projects, aiming to create livable and equitable spaces. Rural communities, meanwhile, grapple with droughts, floods, and soil degradation that threaten their livelihoods and traditional ways of life. The \"Farmers Fight for the Future\" campaign demands climate-resilient seeds, access to irrigation technologies, and fair compensation for loss and damage. Their focus lies on protecting rural economies and preserving cultural heritage. These divides highlight the need for a nuanced approach to climate justice. \"One-size-fits-all solutions simply won't work,\" emphasizes Amina Hassan, a Kenyan farmer leader. \"We need policies that recognize the unique challenges and contributions of both urban and rural communities.\" This call for inclusivity necessitates bridging the knowledge gap between the two perspectives. Collaborative platforms like the \"Rural-Urban Climate Dialogues\" aim to foster understanding and develop solutions that address the needs of all stakeholders. COP28 presents an opportunity to move beyond siloed narratives and forge a united front. By acknowledging the diverse experiences within the climate justice movement and fostering constructive dialogue, the summit can pave the way for solutions that ensure a just and equitable transition for all, regardless of their location or livelihood.",

    }, 
  ];

  // Calculate the index of the last and first items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current news items for the current page
  const currentNews = newsData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle click on a news article
  const handleArticleClick = (articleId) => {
    const selected = newsData.find((article) => article.id === articleId);
    setSelectedArticle(selected);
  };

  // Function to go back to the list of articles
  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      {selectedArticle ? (
        // Display full content if an article is selected
        <div>
          <h2>{selectedArticle.title}</h2>
          <p>{selectedArticle.content}</p>
          <button onClick={handleBackToList}>Back to List</button>
        </div>
      ) : (
        // Display list of articles
        <div>
          <h2>News Feed</h2>
          <ul>
            {currentNews.map((article) => (
              <li key={article.id} onClick={() => handleArticleClick(article.id)}>
                <h3>{article.title}</h3>
                <p>{article.content.slice(0, 100)}...</p>
              </li>
            ))}
          </ul>
          {/* Pagination controls */}
          <div>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous Page
            </button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= newsData.length}>
              Next Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsFeed;

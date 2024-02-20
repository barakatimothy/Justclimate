import React, { useState } from 'react';
import './NewsFeed.css';


const NewsFeed = () => {
  // State for managing pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2); // Adjust the number of items per page as needed

  // Sample news data
  const newsData = [
    {
      id: 1,
      title: "Climate Change Summit 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Environmental Activists Rally for Change",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      title: "Another Important News Article",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu lorem nec purus finibus dignissim.",
    },
    // Add more news articles as needed
  ];

  // Calculate the index of the last and first items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current news items for the current page
  const currentNews = newsData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h2>News Feed</h2>
      <ul>
        {currentNews.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
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
  );
};

export default NewsFeed;

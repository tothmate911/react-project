import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
`;

const Book = (props) => {
  const { id } = useParams();

  const [book, setBook] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const accessToken = 'fkvjn1Y4mQl3SasgncEO';

  const getBookRequest = (bookUrl) => {
    console.log(`sending HTTP request to ${bookUrl}`);
    return axios
      .get(bookUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setBook(res.data);
      });
  };

  const getChapterRequest = (chapterUrl) => {
    console.log(`sending HTTP request to ${chapterUrl}`);
    return axios
      .get(chapterUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setChapters(res.data.docs);
      });
  };

  const fetchData = () => {
    setIsLoading(true);

    const bookUrl = `https://the-one-api.herokuapp.com/v1/book/${id}`;
    const bookRequest = getBookRequest(bookUrl);

    const chapterUrl = `${bookUrl}/chapter`;
    const chapterRequest = getChapterRequest(chapterUrl);

    axios.all([bookRequest, chapterRequest]).then(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  let content = <h3>loading book...</h3>;

  if (!isLoading) {
    content = (
      <BookContainer>
        <div>
          <img
            style={bookImageStyle}
            src={`/bookImage/${id}.jpg`}
            alt={book.name}
          ></img>
        </div>
        <div>
          <h2>{book.name}</h2>
          <p>Number of chapters: {chapters.length}</p>
        </div>
      </BookContainer>
    );
  }

  return content;
};

const bookImageStyle = {
  maxHeight: '300px',
  width: 'auto',
};

export default Book;

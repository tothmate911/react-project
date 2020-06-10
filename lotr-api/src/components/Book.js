import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Book = (props) => {
  const { id } = useParams();
  console.log(id);

  const [book, setBook] = useState([]);
  const [chapters, setChapters] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

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
    // setIsLoading(true);

    const bookUrl = `https://the-one-api.herokuapp.com/v1/book/${id}`;
    const bookRequest = getBookRequest(bookUrl);

    const chapterUrl = `${bookUrl}/chapter`;
    const chapterRequest = getChapterRequest(chapterUrl);

    // axios.all([bookRequest, chapterRequest]).then(() => setIsLoading(false));
  };

  useEffect(() => {
    console.log(id);
    fetchData();
  }, [id]);

  // let content = <h3>loading book...</h3>;

  // if (!isLoading) {
  let content = (
    <div>
      <h2>{book.name} {id}</h2>
      <p>Number of chapters: {chapters.length}</p>
    </div>
  );
  // }

  return content;
};

export default Book;
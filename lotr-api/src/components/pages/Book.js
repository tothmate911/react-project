import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BookContainer = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
`;

const ChapterList = styled.ol`
  margin: 0;
  padding: 0 0 0 18px;
`;

const ListItem = styled.li`
  margin: 10px;
`;

const Book = () => {
  const { id } = useParams();

  const [book, setBook] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const accessToken = "HVyql6qHzMTbJ1oJNo-5";

  const getBookRequest = (bookUrl) => {
    return axios
      .get(bookUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setBook(res.data.docs[0]);
      });
  };

  const getChapterRequest = (chapterUrl) => {
    return axios
      .get(chapterUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setChapters(res.data.docs);
      });
  };

  let listOfChapters = "";
  listOfChapters = chapters.map((chapter) => (
    <ListItem>{chapter.chapterName}</ListItem>
  ));

  const fetchData = () => {
    setIsLoading(true);

    const bookUrl = `https://the-one-api.dev/v2/book/${id}`;
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
      <React.Fragment>
        <h1>{book.name}</h1>
        <BookContainer>
          <div>
            <img
              style={bookImageStyle}
              src={`/bookImage/${id}.jpg`}
              alt={book.name}
            ></img>
          </div>
          <div>
            <div>
              <b>Chapters:</b>
            </div>
            <ChapterList>{listOfChapters}</ChapterList>
          </div>
        </BookContainer>
      </React.Fragment>
    );
  }

  return content;
};

const bookImageStyle = {
  maxHeight: "300px",
  width: "auto",
};

export default Book;

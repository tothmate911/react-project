import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Border = styled.div`
  display: flex;
  flex-direction: column;
  border-left-style: solid !important;
  border-left: 5px;
  border-color: #555;
  color: #555;
  padding-left: 15px;
`;

const Icon = styled.span`
  font-size: 1.4em;
  margin-right: 10px;
`;

const Movie = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovieRequest = (movieUrl) => {
    const accessToken = "fkvjn1Y4mQl3SasgncEO";
    console.log(`sending HTTP request to ${movieUrl}`);
    return axios
      .get(movieUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setMovie(res.data);
      });
  };

  useEffect(() => {
    const movieUrl = `https://the-one-api.herokuapp.com/v1/movie/${id}`;
    getMovieRequest(movieUrl);
  }, [id]);

  return (
    <React.Fragment>
      <h1>{movie.name}</h1>
      <Border>
        <p>
          <Icon>
            <i className="fas fa-star"></i>
          </Icon>
          Academy Award Nominations: {movie.academyAwardNominations}
        </p>
        <p>
          <Icon>
            <i className="fas fa-trophy"></i>
          </Icon>
          Academy Award Wins: {movie.academyAwardWins}
        </p>
        <p>
          <Icon>
            <i className="fas fa-money-bill"></i>
          </Icon>
          Box Office Revenue: {movie.boxOfficeRevenueInMillions} millions
        </p>
        <p>
          <Icon>
            <i className="fas fa-wallet"></i>
          </Icon>
          Budget: {movie.budgetInMillions} millions
        </p>
        <p>
          <Icon>
            <i className="fas fa-clock"></i>
          </Icon>
          Runtime: {movie.runtimeInMinutes} minutes
        </p>
      </Border>
    </React.Fragment>
  );
};

export default Movie;

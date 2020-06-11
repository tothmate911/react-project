import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import AppTheme from '../layout/Colors';

const Movie = (props) => {
  const [theme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  const Border = styled.div`
    display: flex;
    flex-direction: column;
    border-left-style: solid !important;
    border-left: 5px;
    border-color: ${currentTheme.movieColor};
    color: ${currentTheme.movieColor};
    padding-left: 15px;
  `;

  const Icon = styled.span`
    font-size: 1.4em;
    margin-right: 10px;
  `;

  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState([]);

  const accessToken = 'fkvjn1Y4mQl3SasgncEO';

  const getMovieRequest = (movieUrl) => {
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
    console.log(id);
    const movieUrl = `https://the-one-api.herokuapp.com/v1/movie/${id}`;
    const movieRequest = getMovieRequest(movieUrl);
  }, [id]);

  return (
    <React.Fragment>
      <h1>{movie.name}</h1>
      <Border>
        <p>
          <Icon>
            <i class="fas fa-star"></i>
          </Icon>
          Academy Award Nominations: {movie.academyAwardNominations}
        </p>
        <p>
          <Icon>
            <i class="fas fa-trophy"></i>
          </Icon>
          Academy Award Wins: {movie.academyAwardWins}
        </p>
        <p>
          <Icon>
            <i class="fas fa-money-bill"></i>
          </Icon>
          Box Office Revenue: {movie.boxOfficeRevenueInMillions} millions
        </p>
        <p>
          <Icon>
            <i class="fas fa-wallet"></i>
          </Icon>
          Budget: {movie.budgetInMillions} millions
        </p>
        <p>
          <Icon>
            <i class="fas fa-clock"></i>
          </Icon>
          Runtime: {movie.runtimeInMinutes} minutes
        </p>
      </Border>
    </React.Fragment>
  );
};

export default Movie;

import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectArticlesLoading, selectArticlesError, selectArticles } from "../../store/articles/selectors";
import { getArticles } from "../../store/articles/actions";
import { Header } from '../Header';
import { Footer } from '../Footer';
import "./style.css";

export const News = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectArticlesLoading);
  const error = useSelector(selectArticlesError);
  const articles = useSelector(selectArticles);

  const requestArticles = useCallback(() => {
    dispatch(getArticles());
  }, []);

  useEffect(() => {
    requestArticles();
  }, []);

  if (loading) {
    return (
    <>
    <Header />  
    <section className='News__bord center'>
    <h2>Loading...</h2>
    </section>
    <Footer />
    </>
    )
  }

  if (error) {
    return (
      <>
      <Header />  
      <section className='News__bord center'>
        <h2>Request error</h2>
        <button onClick={requestArticles}>TRY AGAIN</button>
      </section>
      <Footer />
      </>
    );
  }

  if (!articles.length) {
    return (
      <>
      <Header />  
      <section className='News__bord center'>
        <h2>No articles</h2>
      </section>
      <Footer />
      </>
    );
  }

  return (
    <>
    <Header />
    <section className='News__bord center'>
    <ul className='News__ul'>
      {articles.map((a) => (
        <React.Fragment key={a.id}>
          <li className="News__li">{a.title}</li>
        </React.Fragment>
      ))}
    </ul>
    </section>
    <Footer />
    </>
  );
};
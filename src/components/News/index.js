import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../store/articles/actions';
import { selectArticles, selectArticlesError, selectArticlesLoading } from '../../store/articles/selectors';

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
        return <h3>loading...</h3>
    }

    if (error) {
        return (
            <>
            <h3>Request error</h3>
            <button onClick={requestArticles}>Try again</button>
            </>
        )
    }

    if (!articles.length) {
        return <h2>No articles</h2>;
    }
    return (
    <ul>
        {articles.map((a) => (
            <React.Fragment key={a.id}>
                <li>{a.title}</li>
                <span>{a.publishedAt}</span>
            </React.Fragment>
            ))}
            </ul>
        );
}
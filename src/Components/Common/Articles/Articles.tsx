import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ArticleModel } from "../../../Models/ArticleModel";
import dataService from "../../../Service/DataArea";
import Article from "../../Cards/Article/Article";
import "./Articles.scss";

function Articles(): JSX.Element {

    const [feArticles, setFeArticles] = useState<ArticleModel[]>([]);
    const [ArticlesRef, ArticlesInView] = useInView({ triggerOnce: true });

    useEffect(() => {
        dataService.getAllArticlesData()
            .then(beArticles => setFeArticles(beArticles))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className={`Articles ${ArticlesInView ? `visible` : ``}`} ref={ArticlesRef}>
            <h1 className="subHeader">ראו עוד...</h1>
            <div className="articles-content">
                <div className="row-content">
                    {feArticles.map((a, index) => <Article key={index} header={a.header} content={a.content}
                        imageName={a.imageName} redirectPath={a.redirectPath} />)}
                </div>
            </div>
        </div>
    );
}

export default Articles;

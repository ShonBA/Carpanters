import { NavLink } from "react-router-dom";
import { ArticleModel } from "../../../Models/ArticleModel";
import "./Article.scss";

function Article(props: ArticleModel): JSX.Element {
    return (
        <div className='Article'>
            <NavLink to={props.redirectPath} className="row-item" target="_blank">
                <img src={require(`../../../Assets/Images/Articles/${props.imageName}`)} />
                <h2>{props.header}</h2>
                <p>{props.content}</p>
            </NavLink>
        </div>
    );
}

export default Article;

import styledComponents from "styled-components";
import { Link } from "react-router-dom";
const defaultImage = "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169";

const CategoryCard = ({id, urlImagen, titulo, cantidad}) => { 
    return <Parent>
        <Link to={"/productos/categoria/" + id}>
            <img src={urlImagen ?? defaultImage} alt="" />
            <h2>{titulo}</h2>
            <p>{cantidad} {titulo}</p>
        </Link>
    </Parent>
 }

const Parent = styledComponents.div`
    background: #fff;
    border-radius: 10px;
    width: 24%; height: 270px;
    border: 1px solid #F3F1ED;
    box-shadow: 0px 4px 4px 0px #00000040;
    overflow: hidden;
    position: relative;
    transition: all .3s ease-in-out;

    img {
        object-fit: cover;
        background: var(--loading-color);
        top: 0; left: 0;
        width: 110%;
        height: 70%;
    }
    h2 {
        padding: 10px 10px 0;
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        color: #383B58;
        text-align: left;
        margin-left:0px;


    }
    p {
        padding-left: 10px;
        color: #383B58;
        text-align: left;
        height: 76px;
        overflow: hidden;
        background: linear-gradient(black,white);
        -webkit-background-clip: text;
        color: transparent
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px 0px #00000080;
    }

    a,
    a:link,
    a:hover,
    a:visited,
    a:active  {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        width: 49%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
    @media only screen and (max-width: 375px) {
        width: 300px;
        max-width: 300px;
    }

}`



export default CategoryCard;
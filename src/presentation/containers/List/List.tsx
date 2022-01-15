import React from "react";

import { mockAnimeList } from "../../../data/Mock/List/mockAnime";
import {
    Container,
    Item,
    Img,
    Description,
    Title,
    Synopsis,
    Score,
    Episodes,
    Row,
    Button,
    ButtonContainer,
} from "./styles";

const List: React.FC = () => {
    return (
        <Container>
            {mockAnimeList.map((item) => (
                <Item>
                    <Img src={item.image_url} />
                    <Title> {item.title} </Title>
                </Item>
            ))}
        </Container>
    );
};

export default List;

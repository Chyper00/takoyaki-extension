import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: #0a1016;
    color: white;
    font-family: "Montserrat", sans-serif;
    padding: 20px;
    width: 300px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    flex: 50%;
    padding-bottom: 10px;
    width: 120px;
    align-items: center;
`;

export const Img = styled.img`
    border-radius: 10px;
    display: flex;
    width: 120px;
`;
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    width: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const Title = styled.span`
    display: flex;
    padding-top: 5px;
    font-size: 10px;
`;

export const Synopsis = styled.span`
    display: flex;
    padding: 10px;
    font-size: 12px;
`;

export const Score = styled.span`
    display: flex;
    font-size: 12px;
`;
export const Episodes = styled.span`
    display: flex;
    font-size: 12px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
    padding: 10px;
`;

export const Button = styled.div`
    padding: 5px;
    border: solid white 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
`;

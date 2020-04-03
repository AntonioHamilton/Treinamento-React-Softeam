import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const WrapContent = styled.div`
    position: relative;
    place-content: center;
    text-align: center;
    align-items: center;
    left: 0px;
    top: 0;
    display: flex;
    flex-direction: column;
    border: solid #aaa;
    margin: 0px 5px;
    padding: 10px;
    transition: 0.3s all;
    cursor: pointer;
    :hover {
        top: 10px;
    }
`;

export const Title = styled.h1`
    margin-bottom: 10px;
`;

export const Description = styled.p`
    background: #9999ff;
    padding: 10px;
    margin-bottom: 10px;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const Button = styled.a`
    border: red solid;
    cursor: pointer;
`;

export const WrapPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33%);
`;

export const Status = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 5rem;
    background: ${(props) =>
        props.status === 'ABERTO'
            ? 'green'
            : props.status === 'EM_PROGRESSO'
            ? 'yellow'
            : 'red'};
`;

export const Date = styled.p`
    margin-bottom: 10px;
`;

export const Responsible = styled.p`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
`;

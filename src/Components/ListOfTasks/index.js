import React, { useState, useEffect } from 'react';

import { api } from '../../Services/api';

import {
    Title,
    Description,
    Image,
    Container,
    WrapContent,
    WrapPosts,
    Responsible,
    Date,
    Status,
} from './style';

const ListOfTasks = (props) => {
    let [display, setDisplay] = useState(true);
    let [dados, setDados] = useState([]);

    const getApi = () => {
        api.get('/task')
            .then((response) => {
                setDados(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getApi();
    }, []);

    return (
        <Container>
            <WrapPosts>
                {dados.map((item, index) => {
                    return (
                        <WrapContent
                            onClick={() =>
                                props.setStatus('Eu mudei o nome do status')
                            }
                            key={index}
                        >
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Responsible>{item.responsible}</Responsible>
                            <Date>{item.date}</Date>
                            <p style={{ fontSize: '20px', fontWeight: 600 }}>
                                Status
                            </p>
                            <Status status={item.status}></Status>
                        </WrapContent>
                    );
                })}
            </WrapPosts>
        </Container>
    );
};

export default ListOfTasks;

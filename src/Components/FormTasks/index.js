import React, { useState } from 'react';

import { Container, Description } from '../ListOfTasks/style';
import { InputText, WrapForm } from './style';
import { api } from '../../Services/api';

const FormTasks = (props) => {
    let [formData, setFormData] = useState({});

    const handleChange = (e) => {
        formData[e.target.name] = e.target.value;
        setFormData(formData);
    };

    const handleSubmit = async () => {
        let keys = Object.keys(formData);
        if (!formData.title) {
            alert('Título não foi preenchido');
        } else if (!formData.description) {
            alert('Descricao não foi preenchido');
        } else if (!formData.responsible) {
            alert('Responsavel não foi preenchido');
        } else {
            formData.date = '2000-10-10';
            await api
                .post('/task', formData)
                .then((res) => alert(res))
                .catch((err) => alert(err));
        }
    };

    return (
        <Container
            style={{
                background: '#EAEAFF',
                marginTop: '50px',
                padding: '200px',
                alignItems: 'center',
            }}
        >
            <WrapForm>
                Título:{' '}
                <InputText
                    type="text"
                    placeholder="Título da tarefa"
                    onChange={handleChange}
                    name={'title'}
                />
                Descrição:{' '}
                <InputText
                    type="text"
                    placeholder="Descrição da tarefa"
                    onChange={handleChange}
                    name={'description'}
                />
                Responsável:{' '}
                <InputText
                    type="text"
                    placeholder="Responsável por realizar a tarefa"
                    onChange={handleChange}
                    name={'responsible'}
                />
                <a
                    style={{ background: 'red', borderRadius: '1rem' }}
                    onClick={handleSubmit}
                >
                    Enviar
                </a>
            </WrapForm>
        </Container>
    );
};

export default FormTasks;

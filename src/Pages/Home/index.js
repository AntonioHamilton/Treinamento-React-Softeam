import React, { useState } from 'react';

import ListOfTasks from '../../Components/ListOfTasks';
import FormTasks from '../../Components/FormTasks';

const Home = () => {
    let [status, setStatus] = useState('Teste');

    return (
        <>
            <ListOfTasks status={status} setStatus={setStatus} />
            <FormTasks status={status} setStatus={setStatus} />
        </>
    );
};

export default Home;

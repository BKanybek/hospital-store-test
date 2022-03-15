
import { Button } from '@mui/material';
import React from 'react';

const AdminCreate = () => {
    return (
        <div style={{ width: '100%', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'between', flexDirection: 'column'}}>
                <div>
                    <Button style={{margin: '20px', color: 'blue', fontSize: '20px', border: 'solid 2px'}}>Добавить новых сотрудников</Button>
                </div>
                <div>
                    <Button style={{margin: '20px', color: 'blue', fontSize: '20px', border: 'solid 2px'}}>Добавить новое оборудование</Button>
                </div>
            </div>
        </div>
    );
};

export default AdminCreate;
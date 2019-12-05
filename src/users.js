import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

const Title =  <span> OP Users </span>

export const UserList = props => (
    <List title={Title} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);
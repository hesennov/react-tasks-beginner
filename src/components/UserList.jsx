import React, {useEffect} from 'react';
import {Button, Table, Input, Space} from 'antd';
// import type {ColumnsType, TableProps} from 'antd/es/table';
import {useState} from "react";
import {Spin} from 'antd';
import { Link } from 'react-router-dom';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import axios from "axios";


const columns = [
    {
        title: 'Name',
        dataIndex: 'first_name',
        sorter: (a, b) => a.first_name.localeCompare(b.first_name),
        width: '20%',
        filterSearch: true
    },

    {
        title: 'Last name',
        dataIndex: 'last_name',
        sorter: (a, b) => a.last_name.localeCompare(b.last_name),
        width: '20%',

    },
    {
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.first_name.localeCompare(b.first_name),
        width: '20%',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
            {
                text: 'Female',
                value: 'Female',
            },
            {
                text: 'Male',
                value: 'Male',
            },
          
        ],
        onFilter: (value ) => record.gender.startsWith(value),
        filterSearch: true,
        width: '20%',
    },
    {
        key: "5",
        title: "Actions",
        render: (user) => {
            return (
                <>
                    <Link to={`/user-form/${user.id}`}>
                        <EditOutlined style={{ color: "blue", marginLeft: 12 }} />
                    </Link>
                    <DeleteOutlined
                        onClick={() => {
                            console.log("delete");
                            
                        }}
                        style={{ color: "red", marginLeft: 12 }}
                    />
                </>
            );
        },
        width: '20%',
    },
];

const onChange= (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const fetchUsers = async () => {
        setLoading(true);
        const params = search ? { q: search } : {};
        const result = await axios.get("/users", { params });
        console.log(params);
        console.log(result.data);
        setUsers(result.data);
        setLoading(false);
    };
 

    useEffect(() => {
        fetchUsers();
    }, [search]);

    const handleSearch = (value) => {
        setSearch(value);
    };

    return (
        <div>
            <Space>
                <Button type="primary">
                    <Link to="/user-form">Add user</Link>
                </Button>

                <Input.Search
                    placeholder="Search user"
                    allowClear
                    enterButton="Search"
                    onSearch={handleSearch}
                    style={{ width: 300, margin: "16px 0" }}
                />

            </Space>
            <Spin spinning={loading}>
                <Table
                    columns={columns}
                    dataSource={users.map(user => ({...user, key: user.id}))}
                    onChange={onChange}
                />
            </Spin>
        </div>
    );
};



export default UserList;
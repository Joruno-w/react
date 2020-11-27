import React from 'react';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Aside from '../components/Aside';

function Index(props) {
    if (props.location.pathname === '/login'){
        return props.children;
    }else{
        return <Layout header={<Header/>} aside={<Aside/>} content={props.children}/>
    }

}

export default Index;
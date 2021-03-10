import React from 'react';
import 'antd/dist/antd.css';
import Proptypes from "prop-types";
import Head from 'next/head';
const NodeBird = ({Component}) => {
    console.log("components::{}", Component);
    return (
        <>
            <Head>
                <meta charSet={"utf-8"}/>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    )
};

NodeBird.propTypes = {
    Component: Proptypes.elementType.isRequired
}

export default NodeBird;
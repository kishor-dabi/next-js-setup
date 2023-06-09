import React, { Component } from 'react';
import Header from './common/header';

export default function Layout({children}:any) {

    return (
      <div className='layout'>
        <Header />
        {children}
      </div>
    );
}
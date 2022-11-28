import React from 'react'
import Banner from "../components/banner";
import Header from "../components/header";
import Popular from "../components/popular";

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Popular />
        </div>
    )
}

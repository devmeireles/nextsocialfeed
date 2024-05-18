"use client";
import React from "react";
import {FeedContext, FeedProvider, useFeedContext} from "@/context/FeedContext";

const HomeScreen = () => {
    const {news} = useFeedContext();

    return (
        <div className="home">
            <h1>Home</h1>
            <pre>
                {JSON.stringify(news, null, 2)}
            </pre>
        </div>
    )
}

const Home = () => {
    return (
        <FeedProvider>
            <HomeScreen/>
        </FeedProvider>
    )
}

export default Home;
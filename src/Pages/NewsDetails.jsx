import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const {id} = useParams();
    const newsData = useLoaderData();

    const [news, setNews] = useState({})

    // console.log(newsData, id, news);

    useEffect(()=>{
        const newsDetails = newsData.find(singleNews=>singleNews.id == id)
        setNews(newsDetails)
    },[newsData, id])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='container mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;
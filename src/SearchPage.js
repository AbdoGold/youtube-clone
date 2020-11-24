import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
                image="https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355__340.jpg"
                channel="New Ideas"
                verified
                subs="688K"
                noOfVideos= {100} 
                description = "Learn everyday a new idea you haven't known before and expand your knowledge.And share it with others so they can benefit too..."
            />
            <hr/>

            <VideoRow
                views="2.9M"
                subs="590K"
                description="Do you want to make money online, check this video!!....."
                timestamp="1 hour ago"
                channel="Yes Make It "
                title="Make Money Online With Simple Ways"
                image="https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481__340.jpg"
            />

            <VideoRow
                views="6.7M"
                subs="190K"
                description="Enjoy watching these videoclips and try not to laugh a lot....."
                timestamp="1 day ago"
                channel="Funny Videos "
                title="Funny Moments Will Make You Laugh"
                image="https://cdn.pixabay.com/photo/2018/05/31/15/06/not-hear-3444212__340.jpg"
            />

            <VideoRow
                views="2.9M"
                subs="567K"
                description="In this video, I have collect the most inspiring moments on the football history....."
                timestamp="10 days ago"
                channel="Foot-ball Mome"
                title="Football Inspiring Moments "
                image="https://cdn.pixabay.com/photo/2014/10/14/20/24/ball-488700__340.jpg"
            />

            <VideoRow
                views="150K"
                subs="1M"
                description="Nature is where we find comfort and these places will shock you with the beauty of nature....."
                timestamp="1 hour ago"
                channel="Nature Nature "
                title="Our Nature is Worthy"
                image="https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317__340.jpg"
            />

            <VideoRow
                views="7M"
                subs="990K"
                description="This video shows some beautiful and savage animals on the planet....."
                timestamp="23 hours ago"
                channel="Animality "
                title="Animal In The Wood"
                image="https://cdn.pixabay.com/photo/2018/08/12/16/59/ara-3601194__340.jpg"
            />

            <VideoRow
                views="145KM"
                subs="340K"
                description="Watches are made to managa time, but the watches you gonna see in this video will blow your mind....."
                timestamp="17 hour ago"
                channel="Timey Timey "
                title="Inspiring And Blowing Watches Ever"
                image="https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689__340.jpg"
            />
        </div>
    )
}

export default SearchPage;

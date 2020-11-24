import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
                <VideoCard
                    title="Audi Super Car Challenge New Edition"
                    views="4.8M Views"
                    timestamp="10 days ago"
                    channelImage="https://images.pexels.com/photos/971522/pexels-photo-971522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    channel="Audi Offical"
                    image="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />

                <VideoCard
                    title="BMW Germa Elegance And Performance"
                    views="3.8M Views"
                    timestamp="19 days ago"
                    channelImage="https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    channel="BMW Official"
                    image="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />

                <VideoCard
                    title="Range Rover New Car With More Features"
                    views="999K Views"
                    timestamp="25 days ago"
                    channelImage="https://images.pexels.com/photos/2811501/pexels-photo-2811501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    channel="Range Rover Official"
                    image="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />

                 <VideoCard
                    title="Porshe High Speed And Performace"
                    views="8.2M Views"
                    timestamp="1 week ago"
                    channelImage="https://cdn.pixabay.com/photo/2015/06/30/11/33/porsche-826385__340.jpg"
                    channel="Porshe Official"
                    image="https://cdn.pixabay.com/photo/2016/05/23/18/18/porsche-targa-1410900__340.jpg"
                />

                 <VideoCard
                    title="Maserati Test High Speed and Performance"
                    views="1M Views"
                    timestamp="2 monthss ago"
                    channelImage="https://cdn.pixabay.com/photo/2014/10/14/16/34/maserati-488394__340.jpg"
                    channel="Maserati Official"
                    image="https://cdn.pixabay.com/photo/2018/01/15/23/44/maserati-granturismo-3085051__340.jpg"
                />

                 <VideoCard
                    title="Ferrari Elegance and Speed New Car"
                    views="5.7M Views"
                    timestamp="2 days ago"
                    channelImage="https://cdn.pixabay.com/photo/2016/03/26/22/51/car-1281698__340.jpg"
                    channel="Ferrari Official"
                    image="https://cdn.pixabay.com/photo/2019/04/14/14/21/car-4126869__340.jpg"
                />

                 <VideoCard
                    title="Lamborghini"
                    views="11.3M Views"
                    timestamp="8 days ago"
                    channelImage="https://cdn.pixabay.com/photo/2020/02/22/17/45/wheel-4871228__340.jpg"
                    channel="Lamborghini Official"
                    image="https://cdn.pixabay.com/photo/2016/11/12/16/39/lamborghini-1819204__340.jpg"
                />

                 <VideoCard
                    title="Mustang American Muscles And Power"
                    views="8.8M Views"
                    timestamp="33 days ago"
                    channelImage="https://cdn.pixabay.com/photo/2014/03/19/14/50/ford-290615__340.jpg"
                    channel="Mustang Official"
                    image="https://cdn.pixabay.com/photo/2015/12/08/00/28/car-1081742__340.jpg"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos;

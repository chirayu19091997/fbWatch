import React from 'react';
import Footer from '../common/footer.js';

const Watch = () => {
    return (
        <div>

            <br/><br/>

            <div><h1>Movie Name</h1>
            <iframe width="640" height="360" src="/sample-mp4-file.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>Movie Description</h3></div>

            <Footer/>
        </div>
    )
}

export default Watch;

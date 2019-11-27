import React from 'react';
import PictureContainer from './components/PictureContainer';

export async function fetchPhotos (pageNum) {
    console.log("fetching images for page " + pageNum);
    let response = await fetch(`http://jsonplaceholder.typicode.com/photos?_limit=${pageNum}`);
    const json = await response.json();

    const fetchedPics = 
        json.map((pic, i) => {

                const props = {
                    pic: pic,
                }

                return <PictureContainer {...props}/>;
            }
        )

    return fetchedPics;
}

export default fetchPhotos;
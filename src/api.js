import React from 'react';
import PictureContainer from './components/PictureContainer';

const url = "https://jsonplaceholder.typicode.com"

async function fetchPhotos (pageNum) {
    console.log("fetching images for page " + pageNum);
    let response = await fetch(`${url}/photos?_limit=${pageNum}`);
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

async function fetchSinglePhoto (id) {
    console.log("fetching image " + id);
    let response = await fetch(`${url}/photos/${id}`);
    if(response.ok) {
        const json = await response.json();
        return json;
    } else {
        throw new Error("failed to fetch image");
    }
}

export default {
    photos: fetchPhotos,
    photo: fetchSinglePhoto,
};
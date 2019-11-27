import React from 'react';
import PictureContainer from './components/PictureContainer';

const url = "https://jsonplaceholder.typicode.com"

async function fetchPhotos (limit) {
    let response = await fetch(`${url}/photos?_limit=${limit}`);
    const json = await response.json();

    const fetchedPics = 
        json.map((pic, i) => {

                const props = {
                    pic: pic,
                }

                return <PictureContainer {...props} key={pic.id}/>;
            }
        )

    return fetchedPics;
}

async function fetchSinglePhoto (id) {
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
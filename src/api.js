import React from 'react';
import PictureContainer from './components/PictureContainer';

export async function fetchPhotos (pageNum) {
    console.log("fetching images for page " + pageNum);
    let response = await fetch('http://jsonplaceholder.typicode.com/photos?_page=${pageNum}');
    const json = await response.json();

    const fetchedPics = 
        json.map((pic, i) => {
                // a new row should start after every fifth picture for regular screens
                const mdParams = i % 5 === 0 
                ? {span: 2, offset: 1} 
                : {span: 2, offset: 0};

                let props = {
                    pic: pic,
                    mdParams: mdParams,
                }

                return <PictureContainer {...props}/>;
            }
        )

    return fetchedPics;
  }

export default fetchPhotos;
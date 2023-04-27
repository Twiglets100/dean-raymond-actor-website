import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../imgs/gallery/', false, /\.(png|jpe?g|svg)$/));

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList() {
    return (
        <ImageList
            sx={{ width: "50%", margin: "auto" }}
            variant="quilted"
            cols={4}
            rowHeight={221}
            style={{margin: "60px auto"}}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: images["1.jpg"],
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: images["2.jpg"],
        title: 'Burger',
    },
    {
        img: images["3.jpg"],
        title: 'Camera',
    },
    {
        img: images["4.jpg"],
        title: 'Coffee',
        cols: 2,
    },
    {
        img: images["5.jpg"],
        title: 'Hats',
        cols: 2,
    },
    {
        img: images["6.jpg"],
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: images["7.jpg"],
        title: 'Basketball',
    },
    {
        img: images["8.jpg"],
        title: 'Fern',
    },
    {
        img: images["9.jpg"],
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: images["10.jpg"],
        title: 'Tomato basil',
    },
    {
        img: images["11.jpg"],
        title: 'Sea star',
    },
    {
        img: images["12.jpg"],
        title: 'Bike',
        cols: 2,
    },
];
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: "80%", height: "80%", marginTop: "10%" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">February, 2023</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                href={item.link}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ165KUmZGV7eK-qWnP4BpFZDvcInmvPBakMQ&usqp=CAU',
    title: 'Menstruation matters: Ending period shame',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
    link: "https://www.ourbetterworld.org/story/menstruation-matters-ending-period-shame?gclid=CjwKCAiA3pugBhAwEiwAWFzwdZPSNJhMe2ZBIJ-zIl0aFz-bh_ta2zg3cxmqfan6efZlLnNvJq_AhxoC0TMQAvD_BwE"
  },
  {
    img: 'https://www.ourbetterworld.org/sites/default/files/styles/thumbnail_350x200/public/story-images/2022-01/Screenshot%202022-01-10%20at%205.01.27%20PM_0.png?itok=-i6nCL4H',
    title: 'Bringing the fight for women’s rights to Indonesia’s villages',
    author: '@rollelflex_graphy726',
    link: "https://www.ourbetterworld.org/story/KPS2K-fights-for-womens-rights"
  },
  {
    img: 'https://www.ourbetterworld.org/sites/default/files/styles/thumbnail_350x200/public/story-images/2019-04/ROH_StoryImage.jpg?itok=KX5gV3L_',
    title: 'Baby, let’s talk family planning',
    author: '@helloimnik',
    link: "https://www.ourbetterworld.org/story/baby-lets-talk-family-planning"
  },
  {
    img: 'https://www.ourbetterworld.org/sites/default/files/styles/thumbnail_350x200/public/story-images/2020-10/Screenshot%202020-10-14%20at%203.23.31%20PM.png?itok=vCAWVEFb',
    title: 'Care for people with mental health issues - and their carers',
    author: '@nolanissac',
    cols: 2,
    link: "https://www.ourbetterworld.org/series/mental-health/story/manav-care-for-carers"
  },
  {
    img: 'https://emmanuelosemotafoundation.org/wp-content/uploads/2021/02/AdobeStock_371677120_Editorial_Use_Only-scaled-1-1536x1152.jpeg',
    title: 'Sanitary Pads, A Health And Social Justice Issue',
    author: '@hjrc33',
    cols: 2,
    link: "https://emmanuelosemotafoundation.org/sanitary-pads/?gclid=CjwKCAiA3pugBhAwEiwAWFzwdTNJ1EEsnRbeKfjJJfclhsQA5xchbtq8oIfhXrl9DQyIAeEoBYrzIRoCzX8QAvD_BwE"
  },
  {
    img: 'https://www.menstrual-matters.com/wp-content/uploads/2020/07/Endometriosis-844x300.jpg',
    title: 'REFRAMING THE ENDOMETRIOSIS ‘DIAGNOSTIC PROBLEM’',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
    link: "https://www.menstrual-matters.com/reframe-endo/"
  },
  {
    img: 'https://www.menstrual-matters.com/wp-content/uploads/2020/04/Autism-RS-844x300.jpg',
    title: 'MANAGING YOUR PERIODS WHEN YOU HAVE AUTISM',
    author: '@tjdragotta',
    link: "https://www.menstrual-matters.com/autism/"
  },
  {
    img: 'https://www.menstrual-matters.com/wp-content/uploads/2020/05/Mood-changes-844x300.jpg',
    title: 'PREMENSTRUAL MOOD CHANGES… WHAT’S NORMAL?',
    author: '@katie_wasserman',
    link: "https://www.menstrual-matters.com/mood-changes/"
  },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//     cols: 2,
//   },
];
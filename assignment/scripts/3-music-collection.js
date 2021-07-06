console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } //end object
  collection.push(album);
  return album;
} //end function

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

//Test for addToCollection function

//Test for same artist
console.log(addToCollection('Thriller', 'Michael Jackson', 1982));
console.log(addToCollection('Bad', 'Michael Jackson', 1987));

//Test for same year
console.log(addToCollection('The Marshall Mathers LP', 'Eminem', 2000));
console.log(addToCollection('Hybrid Theory', 'Linkin Park', 2000));

//Test for not matching
console.log(addToCollection('The Dark Side of the Moon', 'Pink Floyd', 1973));
console.log(addToCollection('Nevermind', 'Nirvana', 1991));
console.log(collection);

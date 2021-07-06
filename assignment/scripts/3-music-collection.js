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

function showCollection(array){
  console.log('The length of this array is:', array.length)
  for (let i = 0; i < array.length; i++){
    console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}.`)
  } //end for loop
} //end function

function findByArtist(artist){
  let array = [];
  for (let i = 0; i < collection.length; i++ ){
    if (collection[i].artist === artist){
      array.push(artist);
    }
  } //end for loop
  return array;
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

//Test for showCollection
showCollection(collection);

//Test for findByArtist
console.log(findByArtist('Eminem'));
console.log(findByArtist(''));
console.log(findByArtist('Michael Jackson'));

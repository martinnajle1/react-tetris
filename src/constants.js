var constants = {
    WidthBoard: 9,
    HeightBoard: 20,
    // pixels 
    SizeSquare: 20,
    SizePiece: 4,
    InitialSpeed: 500,
    ArrowLeft: 39,
    ArrowRight: 37,
    LetterR: 82,
    LetterT: 84,
    LetterP: 80,
    Enter: 13,
    MaxSpeed: 10,
    Pieces: [
        {
            name:"Stick", 
            pieces: [{squares:[0, 4, 8, 12], size: 1, height: 4}, {squares: [0, 1, 2, 3], size: 4, height: 1}], 
            aColor: 'red' 
        },{
        	name:"Gun", 
        	pieces: [{squares: [0, 1, 4, 8], size: 2, height: 3}, {squares: [0, 4, 5, 6], size: 3, height: 2}, {squares: [1, 5, 8, 9], size: 2, height: 3}, {squares: [0, 1, 2, 6], size: 3, height: 2}], 
            aColor: 'yellow'
        },{
        	name:"GunI", 
        	pieces: [{squares: [0, 1, 5, 9], size: 2, height: 3}, {squares: [0, 1, 2, 4], size: 3, height: 2}, {squares: [0, 4, 8, 9], size: 2, height: 3}, {squares: [4, 5, 6, 2], size: 3, height: 2}],
            aColor: 'violet'
        },{
        	name:"Zheta", 
        	pieces: [{squares: [8, 1, 4, 5], size: 2, height: 3},  {squares: [0, 1, 5, 6], size: 3, height: 2}], 
            aColor: 'orange'
        },{
        	name:"ZhetaI", 
        	pieces: [{squares: [0, 4, 5, 9], size: 2, height: 3},  {squares: [1, 2, 4, 5], size: 3, height: 2}], 
            aColor: 'lightblue'
        },{
        	name:"BigSquare", 
        	pieces: [{squares: [0, 1, 4, 5], size: 2, height: 2}], 
            aColor: 'blue'
        },{
        	name:"The", 
        	pieces:[{squares: [0, 1, 2, 5], size: 3,  height: 2}, {squares: [0, 4, 8, 5], size: 2, height: 3}, {squares: [1, 4, 5, 6], size: 3, height: 2},{squares: [1, 4, 5, 9], size: 2, height: 3}],
            aColor: 'green'
        }
    ]
}
module.exports = constants;
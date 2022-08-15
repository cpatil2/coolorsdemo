function getNewColor(){

     let symbols, color;
     symbols = '0123456789ABCDEF';
     color = '#';

     for (let i = 0; i < 6; i++){

        color = color + symbols[Math.floor(Math.random() * 16)];
     }
    
     return color;
}

let colorPallete = [];

function getColorPallete(){

    console.log('Inside getColorPallete');

   while (colorPallete.length < 5){

        color = getNewColor();

        console.log("color = " + color);
        const found = colorPallete.includes(color); 

        if(!found){

            colorPallete.push(color);
        }

        
    }

}

let count = 0;

function displayColorPallete(){

    ++count;

    colorPallete = [];
    
    console.log('Inside dispaly');
    getColorPallete();

    console.log(colorPallete);

    for(let i = 0; i < colorPallete.length; i++){

    const bid = i + 1;

    console.log('b' + bid);

    document.getElementById('b' + bid).style.backgroundColor = colorPallete[i];

    document.getElementById('count').innerHTML = count;
        
    }
    

}

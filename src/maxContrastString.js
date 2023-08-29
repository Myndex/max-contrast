      // ANDY'S DOWN & DIRTY FONT FLIPPER™ 0.1.0 - returns black or white per BG
     // **  Copyright (c) 2023 by Andrew Somers  **  License: modified AGPL 3 **
    // Rs Gs Bs are 0-255 (or 00 - ff hex) sRGB values, const are SAPC 0.98G 4g
   // For purists: Yes, not the IEC piecewise, but it's fast and APCA compatible
  // exponentiator '**' works with recent browsers, Math.pow() is more supported
 // TO USE: send the background color, returns black or white as the text color
// This version takes 3 ints in the parameters, returns color as string

export function maxContrast (Rs = 0xa4, Gs = 0xa4, Bs = 0xa4) {
  
  const flipYs = 0.342; // based on APCA™ 0.98G middle contrast BG color

  const trc = 2.4, Rco = 0.2126729, Gco = 0.7151522, Bco = 0.0721750; // 0.98G
  let Ys = (Rs/255.0)**trc*Rco + (Gs/255.0)**trc*Gco + (Bs/255.0)**trc*Bco; 

  return Ys < flipYs ? 'white' : 'black'
  // return Ys < flipYs ? [255,255,255] : [0,0,0]  // return rgb array
  // return Ys < flipYs ? '#ffffff' : '#000000'   // return string hex value
  // return Ys < flipYs ? 0xffffff : 0x000000    // return hex value
}


///// TEST maxContrast ()

/*  // Begin switch - remove first slash to disable

console.log(maxContrast(0xce,0x96,0x99)); //black
console.log(maxContrast(0x77,0x7f,0xce)); //white

//  */  // End Switch

///// END maxContrast ()


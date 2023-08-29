      // ANDY'S DOWN & DIRTY FONT FLIPPER™ 0.1.0 - returns black or white per BG
     // **  Copyright (c) 2023 by Andrew Somers  **  License: modified AGPL 3 **
    // Rs Gs Bs are 0-255 (or 00 - ff hex) sRGB values, const are SAPC 0.98G 4g
   // For purists: Yes, not the IEC piecewise, but it's fast and APCA compatible
  // exponentiator '**' works with recent browsers, Math.pow() is more supported
 // TO USE: send the background color, returns black or white as the text color
// This version takes/returns an sRGB array, as parsed by colorParsley()

export function maxContrast (rgb = [164,164,164]) {
  
  const flipYs = 0.342; // based on APCA™ 0.98G middle contrast BG color

  const trc = 2.4, Rco = 0.2126729, Gco = 0.7151522, Bco = 0.0721750; // 0.98G
  let Ys = (rgb[0]/255.0)**trc*Rco +
           (rgb[1]/255.0)**trc*Gco +
           (rgb[2]/255.0)**trc*Bco ; 

  return Ys < flipYs ? [255,255,255] : [0,0,0]  // return rgb array
  // return Ys < flipYs ? 'white' : 'black'     // return string color name 
  // return Ys < flipYs ? '#ffffff' : '#000000' // return string hex value
  // return Ys < flipYs ? 0xffffff : 0x000000   // return hex value
}

///// TEST maxContrast ()

/*  // Begin switch - remove first slash to disable

console.log(maxContrast([0xce,0x96,0x99])); // [0,0,0]
console.log(maxContrast([0x77,0x7f,0xce])); // [255,255,255]

//  */  // End Switch

///// END maxContrast ()



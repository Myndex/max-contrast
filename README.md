<p align="left" class="por" style="margin: -36px 0 12px">
<b></b>maxContrast() Badges</b> <br>
<a href="https://github.com/Myndex/max-contrast/blob/main/LICENSE.md"><img src="https://badgen.net/badge/license/AGPL 3?icon=github&color=BB5FD1" alt="license" /></a>&nbsp;
<a href="https://github.com/Myndex/max-contrast"><img src="https://badgen.net/github/last-commit/Myndex/max-contrast/?icon=github" alt="last commit" /></a>&nbsp;
<a href="https://github.com/Myndex/max-contrast/src/"><img src="https://badgen.net/badge/JS/Vanilla/889900" alt="plain vanilla JS" /></a>&nbsp;
<a href="https://twitter.com/MyndexResearch"><img src="https://badgen.net/badge/@/MyndexResearch?icon=twitter" alt="twitter" /></a>&nbsp;

<b>APCA Project Badges</b> <br>
<a href="https://www.myndex.com/CVD/"><img src="https://badgen.net/badge/Color Vision/Simulator/cc0044" alt="CVD Simulator" /></a>&nbsp;
<a href="https://git.myndex.com"><img src="https://badgen.net/badge/APCA/Resources/3300aa" alt="APCA Resources" /></a>&nbsp;
<a href="https://github.com/Myndex/SAPC-APCA"><img src="https://badgen.net/badge/SAPC-APCA/Main Repo/db6b0b" alt="SAPC/Main Repo" /></a>&nbsp;
<a href="https://www.myndex.com/APCA/"><img src="https://badgen.net/badge/APCA/Live Tool/db6b0b" alt="APCA/Live Tool/" /></a>&nbsp;
</p>

# maxContrast()
Send it the <b>background</b> color, it returns a black or white <b>text</b> color, whichever is maximum APCA Lc value

```JS
        // Version in maxContrastArray.js
    let color = maxContrast([0xce,0x96,0x99])
console.log(color); // [0,0,0]

```
```JS

        // Version in maxContrastString.js
    let color = maxContrast(119,127,206) 
console.log(color); // 'white'

```

This is part of the [APCA contrast project](https://github.com/Myndex/SAPC-APCA).

## Files
- `/src/maxContrastArray.js` send an RGB array, it returns an RGB array, suitable for use with [ColorParsley](https://github.com/Myndex/colorparsley)

- `/src/maxContrastString.js` send R G and B ints, it returns a color string.

### Related Resources
- [Fancy Font Flipping](https://github.com/Myndex/fancyfontflipping) experimental demonstrator showing the ideas behind this.
- [APCA Linktree](https://linktr.ee/Myndex) Curated quick-start documentation for APCA 
- [APCA Documentation Repo](https://github.com/Myndex/SAPC-APCA) Main APCA docs
- [APCA Readability Criterion](https://readtech.org/ARC/) public working draft
- [apca-w3](https://github.com/Myndex/apca-w3) public APCA for W3 and WCAG 3
- [ColorParsley](https://github.com/Myndex/colorparsley) lightweight micro-library for parsing colors


License is modified GNU 3.


<img alt=" an image of mad max racing through the desert and behind them are the letters MAX and under that is the word contrast" src="img/generaltitles_MAX_CONTRAST_2.png">
Copyright © 2023 by Andrew Somers. All Rights Reserved.

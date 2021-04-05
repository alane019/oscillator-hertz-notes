## Oscillator Hertz Notes

Hosted: <https://alane019.github.io/oscillator-hertz-notes/>

This uses zero outside libraries. The mtu.edu link below is the source for notes/hertz crosswalk. 

This uses the standard web browser API function to instantiate a new audio oscillator using the JS API function that's used in this project. This script in this file runs through a loop that increments hertz/note values from the lowest to highest frequency in the set, then decrements the values until the lowest note in the set is reached, and then restarting the loop by incrementing the values towards the highest value once again. Each audio value is displayed in musical notation in a log on the page as the audio is played. 

The web audio API invokes audio synthesis technology built into all modern web browsers, so this is how you can make a beep sound without linking to media files: <https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode>

Learn more here: <https://pages.mtu.edu/~suits/NoteFreqCalcs.html>



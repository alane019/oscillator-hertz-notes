//this is the function that runs when the "Hertz Note Test" button is pressed. 
let hzNoteTest = function () {
    
    document.getElementById("stopButton").disabled = false;
    
    let resultText = " - - - ";

    let vanillaJsDateTimeObject = new Date;
        // "June 01, 2019, 2 AM"
  /*  vanillaJsDateTimeObject.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
       timeZone: 'America/New_York' 
        }); */
    
  
    let results = document.getElementById("results");
   if(results.innerHTML == "audio synthesizer results will display here"){
    results.innerHTML = ""
   } 

   resultText = ' [ Starting new osc-hertz-note test:  ' +   vanillaJsDateTimeObject  + ' ]' + ('\n'); //eval??????
   console.log(resultText); 
   results.insertAdjacentHTML('afterbegin', resultText);


   
  
    //declare hertz Notes object
    let jsonStr1 = '{"c0":16.35,"csDb0":17.32,"d0":18.35,"dsEb0":19.45,"e0":20.6,"f0":21.83,"fsGb0":23.12,"g0":24.5,"gsAb0":25.96,"a0":27.5,"asBb0":29.14,"b0":30.87,"c1":32.7,"csDb1":34.65,"d1":36.71,"dsEb1":38.89,"e1":41.2,"f1":43.65,"fsGb1":46.25,"g1":49,"gsAb1":51.91,"a1":55,"asBb1":58.27,"b1":61.74,"c2":65.41,"csDb2":69.3,"d2":73.42,"dsEb2":77.78,"e2":82.41,"f2":87.31,"fsGb2":92.5,"g2":98,"gsAb2":103.83,"a2":110,"asBb2":116.54,"b2":123.47,"c3":130.81,"csDb3":138.59,"d3":146.83,"dsEb3":155.56,"e3":164.81,"f3":174.61,"fsGb3":185,"g3":196,"gsAb3":207.65,"a3":220,"asBb3":233.08,"b3":246.94,"c4":261.63,"csDb4":277.18,"d4":293.66,"dsEb4":311.13,"e4":329.63,"f4":349.23,"fsGb4":369.99,"g4":392,"gsAb4":415.3,"a4":440,"asBb4":466.16,"b4":493.88,"c5":523.25,"csDb5":554.37,"d5":587.33,"dsEb5":622.25,"e5":659.26,"f5":698.46,"fsGb5":739.99,"g5":783.99,"gsAb5":830.61,"a5":880,"asBb5":932.33,"b5":987.77,"c6":1046.5,"csDb6":1108.73,"d6":1174.66,"dsEb6":1244.51,"e6":1318.51,"f6":1396.91,"fsGb6":1479.98,"g6":1567.98,"gsAb6":1661.22,"a6":1760,"asBb6":1864.66,"b6":1975.53,"c7":2093,"csDb7":2217.46,"d7":2349.32,"dsEb7":2489.02,"e7":2637.02,"f7":2793.83,"fsGb7":2959.96,"g7":3135.96,"gsAb7":3322.44,"a7":3520,"asBb7":3729.31,"b7":3951.07,"c8":4186.01,"csDb8":4434.92,"d8":4698.64,"dsEb8":4978.03}';
    let nh = JSON.parse(jsonStr1);
    let nn = [16.35, 17.32, 18.35, 19.45, 20.6, 21.83, 23.12, 24.5, 25.96, 27.5, 29.14, 30.87, 32.7, 34.65, 36.71, 38.89, 41.2, 43.65, 46.25, 49, 51.91, 55, 58.27, 61.74, 65.41, 69.3, 73.42, 77.78, 82.41, 87.31, 92.5, 98, 103.83, 110, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185, 196, 207.65, 220, 233.08, 246.94, 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392, 415.3, 440, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.26, 698.46, 739.99, 783.99, 830.61, 880, 932.33, 987.77, 1046.5, 1108.73, 1174.66, 1244.51, 1318.51, 1396.91, 1479.98, 1567.98, 1661.22, 1760, 1864.66, 1975.53, 2093, 2217.46, 2349.32, 2489.02, 2637.02, 2793.83, 2959.96, 3135.96, 3322.44, 3520, 3729.31, 3951.07, 4186.01, 4434.92, 4698.64, 4978.03];
    
  //  let jsonStr2 = '17.32: "C#0", 18.35: "D0", 19.45: "D#0", 20.6: "E0", 21.83: "F0", 23.12: "F#0", 24.5: "G0", 25.96: "G#0", 27.5: "A0", 29.14: "A#0", 30.87: "B0", 32.7: "C1", 34.65: "C#1", 36.71: "D1", 38.89: "D#1", 41.2: "E1", 43.65: "F1", 46.25: "F#1", 49: "G1", 51.91: "G#1", 55: "A1", 58.27: "A#1", 61.74: "B1", 65.41: "C2", 69.3: "C#2", 73.42: "D2", 77.78: "D#2", 82.41: "E2", 87.31: "F2", 92.5: "F#2", 98: "G2", 103.83: "G#2", 110: "A2", 116.54: "A#2", 123.47: "B2", 130.81: "C3", 138.59: "C#3", 146.83: "D3", 155.56: "D#3", 164.81: "E3", 174.61: "F3", 185: "F#3", 196: "G3", 207.65: "G#3", 220: "A3", 233.08: "A#3", 246.94: "B3", 261.63: "C4", 277.18: "C#4", 293.66: "D4", 311.13: "D#4", 329.63: "E4", 349.23: "F4", 369.99: "F#4", 392: "G4", 415.3: "G#4", 440: "A4", 466.16: "A#4", 493.88: "B4", 523.25: "C5", 554.37: "C#5", 587.33: "D5", 622.25: "D#5", 659.26: "E5", 698.46: "F5", 739.99: "F#5", 783.99: "G5", 830.61: "G#5", 880: "A5", 932.33: "A#5", 987.77: "B5", 1046.5: "C6", 1108.73: "C#6", 1174.66: "D6", 1244.51: "D#6", 1318.51: "E6", 1396.91: "F6", 1479.98: "F#6", 1567.98: "G6", 1661.22: "G#6", 1760: "A6", 1864.66: "A#6", 1975.53: "B6", 2093: "C7", 2217.46: "C#7", 2349.32: "D7", 2489.02: "D#7", 2637.02: "E7", 2793.83: "F7", 2959.96: "F#7", 3135.96: "G7", 3322.44: "G#7", 3520: "A7", 3729.31: "A#7", 3951.07: "B7", 4186.01: "C8", 4434.92: "C#8", 4698.64: "D8", 4978.03: "D#8", 5274.04: "E8", 5587.65: "F8", 5919.91: "F#8", 6271.93: "G8", 6644.88: "G#8", 7040: "A8", 7458.62: "A#8", 7902.13: "B8"';
  let jsonStr2 = '{"16.35":"C0", "17.32":"C#0", "18.35":"D0", "19.45":"D#0", "20.6":"E0", "21.83":"F0", "23.12":"F#0", "24.5":"G0", "25.96":"G#0", "27.5":"A0", "29.14":"A#0", "30.87":"B0", "32.7":"C1", "34.65":"C#1", "36.71":"D1", "38.89":"D#1", "41.2":"E1", "43.65":"F1", "46.25":"F#1", "49":"G1", "51.91":"G#1", "55":"A1", "58.27":"A#1", "61.74":"B1", "65.41":"C2", "69.3":"C#2", "73.42":"D2", "77.78":"D#2", "82.41":"E2", "87.31":"F2", "92.5":"F#2", "98":"G2", "103.83":"G#2", "110":"A2", "116.54":"A#2", "123.47":"B2", "130.81":"C3", "138.59":"C#3", "146.83":"D3", "155.56":"D#3", "164.81":"E3", "174.61":"F3", "185":"F#3", "196":"G3", "207.65":"G#3", "220":"A3", "233.08":"A#3", "246.94":"B3", "261.63":"C4", "277.18":"C#4", "293.66":"D4", "311.13":"D#4", "329.63":"E4", "349.23":"F4", "369.99":"F#4", "392":"G4", "415.3":"G#4", "440":"A4", "466.16":"A#4", "493.88":"B4", "523.25":"C5", "554.37":"C#5", "587.33":"D5", "622.25":"D#5", "659.26":"E5", "698.46":"F5", "739.99":"F#5", "783.99":"G5", "830.61":"G#5", "880":"A5", "932.33":"A#5", "987.77":"B5", "1046.5":"C6", "1108.73":"C#6", "1174.66":"D6", "1244.51":"D#6", "1318.51":"E6", "1396.91":"F6", "1479.98":"F#6", "1567.98":"G6", "1661.22":"G#6", "1760":"A6", "1864.66":"A#6", "1975.53":"B6", "2093":"C7", "2217.46":"C#7", "2349.32":"D7", "2489.02":"D#7", "2637.02":"E7", "2793.83":"F7", "2959.96":"F#7", "3135.96":"G7", "3322.44":"G#7", "3520":"A7", "3729.31":"A#7", "3951.07":"B7", "4186.01":"C8", "4434.92":"C#8", "4698.64":"D8", "4978.03":"D#8", "5274.04":"E8", "5587.65":"F8", "5919.91":"F#8", "6271.93":"G8", "6644.88":"G#8", "7040":"A8", "7458.62":"A#8", "7902.13":"B8"}';  

  let freqNote = JSON.parse(jsonStr2);
   console.log(freqNote);
    
    // gain, frequency, duration
    // See MDN "Web Audio API" https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
    a = new AudioContext()
    function k(w, x, y) {
        console.log(w + x + y)
        v = a.createOscillator()
        u = a.createGain()
        v.connect(u)
        v.frequency.value = x
        v.type = "square"
        u.connect(a.destination)
        u.gain.value = w * 0.01
        v.start(a.currentTime)
        v.stop(a.currentTime + y * 0.001)
    } // gain, frequency, duration


     // SYNTH-PLAY FUNCTIONS
    let playNote = function (note) {
       noteVal = eval(note);
        k(1, noteVal, 202); console.log("noteVal: " + noteVal);
        /* [Layered mode] k(1, (noteVal - 100), 202);  k(1, (noteVal - 200), 202);  */
        resultText = ' Frequency:' + ( ' ' + nn[q] + ' ')  + 'hz   ' + ('\n'); //eval??????
        console.log(resultText); 
        results.insertAdjacentHTML('afterbegin', resultText);
    }

 
    let i = 0; let j = 0; let q = 0;
    let qdir = 1;
    //make a sound  regardless: 
    playNote(nn[35]);
   

   

    //Slide Interval [ Old >> done within  slide interval >> // let switchQdir = function () {  if (q == 1) { q = 2 } else if (q == 2) { q = 1 }  }
    let slideInterval = setInterval(function () {
        //run next line/function/command...
        console.log(" [ slide interval ran ]");
        console.log("log: [ i: " + i + " ] [ j: " + j + " ] [ q: " + q + " ] ");
        // let slideScale //= function // (q, qdir) //{
        console.log("(q: " + q + " )  (qdir: " + qdir + ") ");
       
         // result print was here - - - 
        if(qdir == 1  && q < 100) { q++;}
        if(qdir == 1  && q >= 100) { qdir = 2;} // 2 means down
        if(qdir == 2  && q > 0) { q--;}
        if(qdir == 2  && q <= 0) { qdir = 1;} // 2 means up
        playNote(nn[q]);

    }, 50);

    
    let stopSound = function (note) {
        noteVal = eval(note);
         k(190, noteVal, 100); k(190, noteVal-1, 100); k(190, noteVal+1, 100);
         console.log("stop sound - noteValue: " + noteVal); }

    let stopButton = document.getElementById("stopButton");
   
    stopButton.addEventListener('click', function () {  playNote(nn[18]); playNote(nn[22]); playNote(nn[12]);clearInterval(slideInterval); stopButton.disabled = true; }, false);
  
} // end of hzNoteTest
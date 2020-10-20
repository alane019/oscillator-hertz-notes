//this is the function that runs when the "Hertz Note Test" button is pressed. 
let hzNoteTest = function () {
    
    document.getElementById("stopButton").disabled = false;
    
    let resultText = " - - - ";

    let vanillaJsDateTimeObject = new Date;
        // 
   vanillaJsDateTimeObject.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', timeZone: 'America/New_York'}); 
    
  
    let results = document.getElementById("results");
   if(results.innerHTML == "audio synthesizer results will display here"){
    results.innerHTML = ""
   } 

   resultText = '<span> [ Starting new osc-hertz-note test:  ' +   vanillaJsDateTimeObject  + ' ] </span> <br>'; //
   console.log(resultText); 
   results.insertAdjacentHTML('afterbegin', resultText);


   
  
    //declare hertz Notes object
    let jsonStr1 = '{"c0":16.35,"csDb0":17.32,"d0":18.35,"dsEb0":19.45,"e0":20.6,"f0":21.83,"fsGb0":23.12,"g0":24.5,"gsAb0":25.96,"a0":27.5,"asBb0":29.14,"b0":30.87,"c1":32.7,"csDb1":34.65,"d1":36.71,"dsEb1":38.89,"e1":41.2,"f1":43.65,"fsGb1":46.25,"g1":49,"gsAb1":51.91,"a1":55,"asBb1":58.27,"b1":61.74,"c2":65.41,"csDb2":69.3,"d2":73.42,"dsEb2":77.78,"e2":82.41,"f2":87.31,"fsGb2":92.5,"g2":98,"gsAb2":103.83,"a2":110.00,"asBb2":116.54,"b2":123.47,"c3":130.81,"csDb3":138.59,"d3":146.83,"dsEb3":155.56,"e3":164.81,"f3":174.61,"fsGb3":185,"g3":196,"gsAb3":207.65,"a3":220.00,"asBb3":233.08,"b3":246.94,"c4":261.63,"csDb4":277.18,"d4":293.66,"dsEb4":311.13,"e4":329.63,"f4":349.23,"fsGb4":369.99,"g4":392,"gsAb4":415.3,"a4":440.00,"asBb4":466.16,"b4":493.88,"c5":523.25,"csDb5":554.37,"d5":587.33,"dsEb5":622.25,"e5":659.26,"f5":698.46,"fsGb5":739.99,"g5":783.99,"gsAb5":830.61,"a5":880.00,"asBb5":932.33,"b5":987.77,"c6":1046.5,"csDb6":1108.73,"d6":1174.66,"dsEb6":1244.51,"e6":1318.51,"f6":1396.91,"fsGb6":1479.98,"g6":1567.98,"gsAb6":1661.22,"a6":1760.00,"asBb6":1864.66,"b6":1975.53,"c7":2093,"csDb7":2217.46,"d7":2349.32,"dsEb7":2489.02,"e7":2637.02,"f7":2793.83,"fsGb7":2959.96,"g7":3135.96,"gsAb7":3322.44,"a7":3520.00,"asBb7":3729.31,"b7":3951.07,"c8":4186.01,"csDb8":4434.92,"d8":4698.64,"dsEb8":4978.03}';
    let noteFreq = JSON.parse(jsonStr1);
    let nn = [16.35, 17.32, 18.35, 19.45, 20.6, 21.83, 23.12, 24.5, 25.96, 27.5, 29.14, 30.87, 32.7, 34.65, 36.71, 38.89, 41.2, 43.65, 46.25, 49, 51.91, 55, 58.27, 61.74, 65.41, 69.3, 73.42, 77.78, 82.41, 87.31, 92.5, 98, 103.83, 110, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185, 196, 207.65, 220, 233.08, 246.94, 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392, 415.3, 440, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659.26, 698.46, 739.99, 783.99, 830.61, 880, 932.33, 987.77, 1046.5, 1108.73, 1174.66, 1244.51, 1318.51, 1396.91, 1479.98, 1567.98, 1661.22, 1760, 1864.66, 1975.53, 2093, 2217.46, 2349.32, 2489.02, 2637.02, 2793.83, 2959.96, 3135.96, 3322.44, 3520, 3729.31, 3951.07, 4186.01, 4434.92, 4698.64, 4978.03];
    
 


  let jsonStr3 = '{"17.32":" C<sup>#</sup><sub>0</sub>/D<sup>b</sup><sub>0</sub> ", "18.35":" D<sub>0</sub> ", "19.45":" D<sup>#</sup><sub>0</sub>/E<sup>b</sup><sub>0</sub> ", "20.6":" E<sub>0</sub> ", "21.83":" F<sub>0</sub> ", "23.12":" F<sup>#</sup><sub>0</sub>/G<sup>b</sup><sub>0</sub> ", "24.5":" G<sub>0</sub> ", "25.96":" G<sup>#</sup><sub>0</sub>/A<sup>b</sup><sub>0</sub> ", "27.5":" A<sub>0</sub> ", "29.14":" A<sup>#</sup><sub>0</sub>/B<sup>b</sup><sub>0</sub> ", "30.87":" B<sub>0</sub> ", "32.7":" C<sub>1</sub> ", "34.65":" C<sup>#</sup><sub>1</sub>/D<sup>b</sup><sub>1</sub> ", "36.71":" D<sub>1</sub> ", "38.89":" D<sup>#</sup><sub>1</sub>/E<sup>b</sup><sub>1</sub> ", "41.2":" E<sub>1</sub> ", "43.65":" F<sub>1</sub> ", "46.25":" F<sup>#</sup><sub>1</sub>/G<sup>b</sup><sub>1</sub> ", "49":" G<sub>1</sub> ", "51.91":" G<sup>#</sup><sub>1</sub>/A<sup>b</sup><sub>1</sub> ", "55":" A<sub>1</sub> ", "58.27":" A<sup>#</sup><sub>1</sub>/B<sup>b</sup><sub>1</sub> ", "61.74":" B<sub>1</sub> ", "65.41":" C<sub>2</sub> ", "69.3":" C<sup>#</sup><sub>2</sub>/D<sup>b</sup><sub>2</sub> ", "73.42":" D<sub>2</sub> ", "77.78":" D<sup>#</sup><sub>2</sub>/E<sup>b</sup><sub>2</sub> ", "82.41":" E<sub>2</sub> ", "87.31":" F<sub>2</sub> ", "92.5":" F<sup>#</sup><sub>2</sub>/G<sup>b</sup><sub>2</sub> ", "98":" G<sub>2</sub> ", "103.83":" G<sup>#</sup><sub>2</sub>/A<sup>b</sup><sub>2</sub> ", "110":" A<sub>2</sub> ", "116.54":" A<sup>#</sup><sub>2</sub>/B<sup>b</sup><sub>2</sub> ", "123.47":" B<sub>2</sub> ", "130.81":" C<sub>3</sub> ", "138.59":" C<sup>#</sup><sub>3</sub>/D<sup>b</sup><sub>3</sub> ", "146.83":" D<sub>3</sub> ", "155.56":" D<sup>#</sup><sub>3</sub>/E<sup>b</sup><sub>3</sub> ", "164.81":" E<sub>3</sub> ", "174.61":" F<sub>3</sub> ", "185":" F<sup>#</sup><sub>3</sub>/G<sup>b</sup><sub>3</sub> ", "196":" G<sub>3</sub> ", "207.65":" G<sup>#</sup><sub>3</sub>/A<sup>b</sup><sub>3</sub> ", "220":" A<sub>3</sub> ", "233.08":" A<sup>#</sup><sub>3</sub>/B<sup>b</sup><sub>3</sub> ", "246.94":" B<sub>3</sub> ", "261.63":" C<sub>4</sub> ", "277.18":" C<sup>#</sup><sub>4</sub>/D<sup>b</sup><sub>4</sub> ", "293.66":" D<sub>4</sub> ", "311.13":" D<sup>#</sup><sub>4</sub>/E<sup>b</sup><sub>4</sub> ", "329.63":" E<sub>4</sub> ", "349.23":" F<sub>4</sub> ", "369.99":" F<sup>#</sup><sub>4</sub>/G<sup>b</sup><sub>4</sub> ", "392":" G<sub>4</sub> ", "415.3":" G<sup>#</sup><sub>4</sub>/A<sup>b</sup><sub>4</sub> ", "440":" A<sub>4</sub> ", "466.16":" A<sup>#</sup><sub>4</sub>/B<sup>b</sup><sub>4</sub> ", "493.88":" B<sub>4</sub> ", "523.25":" C<sub>5</sub> ", "554.37":" C<sup>#</sup><sub>5</sub>/D<sup>b</sup><sub>5</sub> ", "587.33":" D<sub>5</sub> ", "622.25":" D<sup>#</sup><sub>5</sub>/E<sup>b</sup><sub>5</sub> ", "659.26":" E<sub>5</sub> ", "698.46":" F<sub>5</sub> ", "739.99":" F<sup>#</sup><sub>5</sub>/G<sup>b</sup><sub>5</sub> ", "783.99":" G<sub>5</sub> ", "830.61":" G<sup>#</sup><sub>5</sub>/A<sup>b</sup><sub>5</sub> ", "880":" A<sub>5</sub> ", "932.33":" A<sup>#</sup><sub>5</sub>/B<sup>b</sup><sub>5</sub> ", "987.77":" B<sub>5</sub> ", "1046.5":" C<sub>6</sub> ", "1108.73":" C<sup>#</sup><sub>6</sub>/D<sup>b</sup><sub>6</sub> ", "1174.66":" D<sub>6</sub> ", "1244.51":" D<sup>#</sup><sub>6</sub>/E<sup>b</sup><sub>6</sub> ", "1318.51":" E<sub>6</sub> ", "1396.91":" F<sub>6</sub> ", "1479.98":" F<sup>#</sup><sub>6</sub>/G<sup>b</sup><sub>6</sub> ", "1567.98":" G<sub>6</sub> ", "1661.22":" G<sup>#</sup><sub>6</sub>/A<sup>b</sup><sub>6</sub> ", "1760":" A<sub>6</sub> ", "1864.66":" A<sup>#</sup><sub>6</sub>/B<sup>b</sup><sub>6</sub> ", "1975.53":" B<sub>6</sub> ", "2093":" C<sub>7</sub> ", "2217.46":" C<sup>#</sup><sub>7</sub>/D<sup>b</sup><sub>7</sub> ", "2349.32":" D<sub>7</sub> ", "2489.02":" D<sup>#</sup><sub>7</sub>/E<sup>b</sup><sub>7</sub> ", "2637.02":" E<sub>7</sub> ", "2793.83":" F<sub>7</sub> ", "2959.96":" F<sup>#</sup><sub>7</sub>/G<sup>b</sup><sub>7</sub> ", "3135.96":" G<sub>7</sub> ", "3322.44":" G<sup>#</sup><sub>7</sub>/A<sup>b</sup><sub>7</sub> ", "3520":" A<sub>7</sub> ", "3729.31":" A<sup>#</sup><sub>7</sub>/B<sup>b</sup><sub>7</sub> ", "3951.07":" B<sub>7</sub> ", "4186.01":" C<sub>8</sub> ", "4434.92":" C<sup>#</sup><sub>8</sub>/D<sup>b</sup><sub>8</sub> ", "4698.64":" D<sub>8</sub> ", "4978.03":" D<sup>#</sup><sub>8</sub>/E<sup>b</sup><sub>8</sub> ", "5274.04":" E<sub>8</sub> ", "5587.65":" F<sub>8</sub> ", "5919.91":" F<sup>#</sup><sub>8</sub>/G<sup>b</sup><sub>8</sub> ", "6271.93":" G<sub>8</sub> ", "6644.88":" G<sup>#</sup><sub>8</sub>/A<sup>b</sup><sub>8</sub> ", "7040":" A<sub>8</sub> ", "7458.62":" A<sup>#</sup><sub>8</sub>/B<sup>b</sup><sub>8</sub> ", "7902.13":" B<sub>8</sub> "}';





let freqNoteHTML = JSON.parse(jsonStr3);
   console.log(freqNoteHTML);
    
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

       // .includes(word)
         if(!(' ' + nn[q]).includes(".")){ 
            resultText = '<div class="colLeft">' + ( ' ' + nn[q])  + '.00 hz </div> ' + '<div class="colRight"> ' + (freqNoteHTML[note]) + ' </div> ' + '<br> <hr> <br>';   
            console.log(resultText); 
            results.insertAdjacentHTML('afterbegin', resultText); 
         }
         else{
            resultText = '<div class="colLeft">' + ( ' ' + nn[q])  + ' hz </div> ' + '<div class="colRight"> ' + (freqNoteHTML[note]) + ' </div> ' + '<br> <hr> <br>';
            console.log(resultText); 
            results.insertAdjacentHTML('afterbegin', resultText);
         }
        
       
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
        if(qdir == 1  && q >= 100) { qdir = 2;} // 2 represents the state of the loop, note values decreasing. 
        if(qdir == 2  && q > 0) { q--;}
        if(qdir == 2  && q <= 0) { qdir = 1;} // 1 represents the state of the loop, note values increasing. 
        playNote(nn[q]);

    }, 50);

    
    let stopSound = function (note) {
        noteVal = eval(note);
         k(190, noteVal, 100); k(190, noteVal-1, 100); k(190, noteVal+1, 100);
         console.log("stop sound - noteValue: " + noteVal); }

    let stopButton = document.getElementById("stopButton");
   
    stopButton.addEventListener('click', function () {  playNote(nn[18]); playNote(nn[22]); playNote(nn[12]);clearInterval(slideInterval); stopButton.disabled = true; }, false);
  
} // end of hzNoteTest

import mgnTab from './mgn-tab';

let tab = new mgnTab('.j-tab');

//

let tab2 = new mgnTab(
    '.j-tab2',
    {
        fadeSpeed: 600
    }
);

tab2.Open( ".open" );

tab2.OpenEnd = function(){
    console.log("OpenEnd");
};

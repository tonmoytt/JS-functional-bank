document.getElementById('click-btn').addEventListener('click', function () {

    let seenvalues = document.getElementById('seen-value');
    let saw = seenvalues.value;
    let newadded = parseFloat(saw);

    let previous = document.getElementById('addes-value');
    let previous2 = previous.innerText;
    let previoufinal = parseFloat(previous2);
    let add = previoufinal + newadded;
    previous.innerText = add;


    //  secend///

    let addes1 = document.getElementById('addes-all');
    let addse = addes1.innerText;
    let alltotal = parseFloat(addse);
    let alltotal1 = alltotal + newadded;
    addes1.innerText = alltotal1;


    seenvalues.value = '';
})


//  withdrow//
 document.getElementById('withdrow-id').addEventListener('click',function(){

   let secend1 = document.getElementById('secend-input');
   let secend2= secend1.value;
  let secend3= parseFloat(secend2);

  let previous = document.getElementById('withdrow-one');
  let previous2 = previous.innerText;
  let previoufinal = parseFloat(previous2);
  let add = previoufinal + secend3;
  previous.innerText = add;

  let addes1 = document.getElementById('addes-all');
  let addse = addes1.innerText;
  let alltotal = parseFloat(addse);
  let alltotal1 = alltotal - secend3;
  addes1.innerText = alltotal1;


secend1.value = '';

    
 })
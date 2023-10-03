fetch('https://fakestoreapi.com/products/')
.then((res)=>{
    return res.json();
}).then((complate)=>{
    console.log(complate);
    let save='';
    complate.map((data)=>{
        save=`<div class='style'>
        <h3>${data.title}</h3>
        <img width='40%' src='${data.image}'>
        <p>120.5</p>
        <hr>
        <h3>${data.title}</h3>
        <img width='40%' src='${data.image}'>
        <p>120.5</p>
        <hr>
        <h3>${data.title}</h3>
        <img width='40%' src='${data.image}'>
        <p>120.5</p>
        <hr>
        <h3>${data.title}</h3>
        <img width='40%' src='${data.image}'>
        <p>120.5</p>
        <hr>
        </div>`
    })
    document.querySelector(".root").innerHTML=save;
})
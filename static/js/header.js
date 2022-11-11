search = document.getElementById('search_val')
onsearch = document.getElementById('onsearch')
search.addEventListener('input',async function() {
    await fetch("../../data/loop.json").then((response1) => response1.json()).then((data)=>{
        data.data.forEach((ele)=>{
            // console.log(artistsName,songName);
            cardtxt = ele.songName.toLowerCase();
            cardart = ele.artistsName.toLowerCase();
            if(cardtxt.includes(search.value.toLowerCase())){
                console.log(ele.id);
                let item = `<li href="player/${ele.id}">${ele.songName}</li>`
                onsearch.innerHTML +=item;
                console.log(item);
            }
            else{
                onsearch.innerHTML ="";  
            }
        })
    })
})



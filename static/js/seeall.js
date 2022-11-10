// console.log(title);
// let type = `<%=id%>`
// console.log('<%=id%>')
lis = []


async function seeall(type){
    const seeall_id = document.getElementById('seeall_id');
    let html_data = '';
    
    await fetch(`../../data/${type}.json`)
         .then((response1) => response1.json()
         ).then((data)=>{
            for(let i=0;i<data.data.length;i++){
              lis.push(data.data[i])

              let id = `likedColor-${i}`;
                      let item = `
                      <tr>
                      <th scope="row">${i+1}.</th>
                      <td><img src=${data.data[i].Image_s} width="50" height="50" alt=""></td>
                      <td>${data.data[i].songName}</td>
                      <td>${data.data[i].artistsName}</td>
                      <td>add to playlist</td>
                      <td><a class="${id}" onclick="changeColor(this.className)"> <i class="fa fa-heart-o" style="font-size:26px;color:white"></i></a></td>
                      <td>${Math.floor((data.data[i].time)/60000)}:${Math.floor(((data.data[i].time)/1000)%60)}</td>
                    
                    </tr>` 
        
                      html_data+=item;
                      
                    }
                    seeall_id.innerHTML = html_data;
         })
  
  }

function changeColor(x) {
    console.log(x);
    var liked = document.getElementsByClassName("fa-heart-o");
    var likedColor = document.getElementsByClassName(`${x}`);
    // likedColor[0].innerHTML = `<i class="fa fa-heart-o" style="font-size:26px;color:red"></i>`;
    // console.log(likedColor[0]);

    console.log(liked[0].outerHTML.match('white'));
    // console.log(liked[0].innerHTML.match('white'));
    if(liked[0].outerHTML.match('white')!=null) {
      
      likedColor[0].innerHTML = `<i class="fa fa-heart-o" style="font-size:26px;color:red"></i>`;
    }
    else {
      likedColor[0].innerHTML = `<i class="fa fa-heart-o" style="font-size:26px;color:white"></i>`;
    }
}


// changeColor(1)
// seeall();

  
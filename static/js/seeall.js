
async function seeall(){
    const seeall_id = document.getElementById('seeall_id');
    let html_data = '';
    
    await fetch("../../data/loop.json")
         .then((response1) => response1.json()
         ).then((data)=>{
           console.log(data.data);
            for(let i=0;i<data.data.length;i++){
                      let item = `
                      <tr>
                      <th scope="row">${i+1}.</th>
                      <td><img src=${data.data[i].Image_s} width="50" height="50" alt=""></td>
                      <td>${data.data[i].songName}</td>
                      <td>${data.data[i].artistsName}</td>
                      <td></td>
                      <td>${(data.data[i].time)/60000}:${((data.data[i].time)/1000)%60}</td>
                    </tr>` 
        
                      html_data+=item;
                      
                    }
                    seeall_id.innerHTML = html_data;
         })
  
  }seeall();
  
  
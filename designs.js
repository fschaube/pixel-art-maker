document.getElementById('sizePicker').onsubmit = function(){
    submitting();
}

function submitting(){
    event.preventDefault();
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    makeGrid(height,width);
    };


function makeGrid(height,width){
    const table = document.getElementById("pixel_canvas");
    let field = '';

    for(let i = 0;i<height;i++){
        field+='<tr>';
        for(let j = 0;j<width;j++){
            field+='<td class="cell"></td>';
        }
    field+='</tr>';
    }
    table.innerHTML = field;

    trigger();
}

function trigger(){
  const picker = document.getElementById("colorPicker");
  const cell = document.getElementsByClassName("cell");
  for(let r = 0;r<cell.length;r++){
      cell[r].addEventListener("click", function(event){
          let click = event.target;
          click.style.backgroundColor = picker.value;
        });
    }
}

makeGrid(5,5);

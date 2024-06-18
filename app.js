function add_skill()
{
    var x =document.getElementById('task').value
    const node= document.createElement('div')
    node.className="list-group-item list-group-item-warning mb-2"
    const textnode=document.createTextNode(x)
    node.appendChild(textnode)
    var b=document.createElement('button')
    b.className="btn btn-danger"
    b.textContent="Remove"
    b.style="float:right;"
    b.onclick = delete_skill
    node.appendChild(b)
    var e=document.createElement('button')
    e.className="btn btn-light"
    e.textContent="Edit"
    e.style="float:right;"
    e.onclick = edit_skill
    node.appendChild(e)
    document.getElementById('result').appendChild(node)
    document.getElementById('task').value=""
}

function clear_skill()
{
  document.getElementById('result').innerHTML=""  
}

function delete_skill(e)
{
e.target.parentElement.remove()
}

function edit_skill(e)
{

 const newdiv=document.createElement('div')
 newdiv.className="conatiner text-center mt-3"
 var i =document.createElement('input')
 i.className="form-control"
 i.setAttribute("type","text")
 newdiv.appendChild(i)   
 var b1 =document.createElement('button')
 b1.className="btn btn-warning"
 b1.textContent="Update"
 b1.onclick= edit_text
 newdiv.appendChild(b1)
 var b2 =document.createElement('button')
 b2.className="btn btn-secondary"
 b2.textContent="Close"
 b2.onclick= close_box
 newdiv.appendChild(b2)
 e.target.parentElement.appendChild(newdiv)

}
 
function edit_text(e)
{
   y=e.target.parentElement.firstChild.value 
   const textnode1 =document.createTextNode(y)
   e.target.parentElement.parentElement.replaceChild(textnode1,e.target.parentElement.parentElement.firstChild)
   e.target.parentElement.remove()
}
function close_box(e)
{
    e.target.parentElement.remove()
}
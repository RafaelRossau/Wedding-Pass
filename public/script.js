const form = document.getElementById('form')

let id = 0
function show_list(){
    fetch(`http://localhost:3000/guests`)
    .then((response) => {
      return response.json();
    })

    .then((g) => {
        const div = document.createElement('div')
        div.classList.add('row', 'border', 'd-flex')
        form.appendChild(div)

        const name = document.createElement('div')
        name.textContent = g[id].guest_name
        name.classList.add('col-2')
        div.appendChild(name)

        const email = document.createElement('div')
        email.textContent = g[id].guest_email
        email.classList.add('col-2')
        div.appendChild(email)

        const phone = document.createElement('div')
        phone.textContent = g[id].guest_phone
        const phone2 = g[id].guest_phone
        phone.classList.add('col-2')
        div.appendChild(phone)

        const table = document.createElement('div')
        table.textContent = g[id].guest_table
        table.classList.add('col-2')
        div.appendChild(table)

        const status = document.createElement('div')
        status.textContent = g[id].guest_status
        if(status.textContent === "Checked In"){
          status.classList.add('col-2', 'rounded-pill', 'checked-in')
        }
        else{
          status.classList.add('col-2', 'rounded-pill', 'pending')
        }
        div.appendChild(status)

        const actions = document.createElement('div')
        actions.classList.add('col-2', 'justify-content-end', 'd-flex')
        div.appendChild(actions)

        const update = document.createElement('button')
        update.classList.add('bi', 'bi-pencil-square', 'button')
        actions.appendChild(update)

        const trash = document.createElement('button')
        trash.classList.add('bi', 'bi-trash', 'red', 'button')
        actions.appendChild(trash)
        trash.addEventListener('click', function(){
           fetch(`http://localhost:3000/guests/${phone2}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
          });
        })

        if(g.length < id){
          console.log(`All guests added sucessfully! ${id} total guests.`)
        }
        else{
          id = id + 1
          show_list();
        }
})
}
function delete_guest(){

}
show_list();
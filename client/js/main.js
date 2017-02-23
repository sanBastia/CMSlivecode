$(document).ready(function () {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal()
})

$('#formdata').click(function (e) {
  e.preventDefault()
  $.ajax({
    url: 'http://localhost:3000/cms/data',
    type: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    success: function (msg) {
      if (msg.success) {
        $('#modal1').modal('close')
        let table = `<tr>
          <td>1</td>
          <td>${msg.success.letter}</td>
          <td>${msg.success.frequency}</td>
          <td rowspan="2">
            <button class="btn waves-effect waves-light teal accent-2"  name="action">edit
            <i class="material-icons right">mode_edit</i>
           </button>
           <button class="btn waves-effect waves-light red darken-4"  name="action">Delete
             <i class="material-icons right">delete</i>
            </button>
         </td>
        </tr>`

        $('#formbody').append(table)
      }

      if (msg.err) {
        console.log(err)
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
})

$('#formbody').ready(function () {
  $.ajax({
    url: 'http://localhost:3000/cms/data',
    type: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    success: function (msg) {
      if (msg.success) {
        $('#modal1').modal('close')
        let table = `<tr>
          <td>1</td>
          <td>${msg.success.letter}</td>
          <td>${msg.success.frequency}</td>
          <td rowspan="2">
            <button class="btn waves-effect waves-light teal accent-2"  name="action">edit
            <i class="material-icons right">mode_edit</i>
           </button>
           <button class="btn waves-effect waves-light red darken-4"  name="action">Delete
             <i class="material-icons right">delete</i>
            </button>
         </td>
        </tr>`

        $('#formbody').append(table)
      }

      if (msg.err) {
        console.log(err)
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
})

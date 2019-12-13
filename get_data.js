
$(document).ready(function() {

    /*////////////////////////////////get json file data into the dynamic table///////////////////*/

    $("#GET_TABLE").click(function () {
        $.getJSON("Employees.json", function (data) {
            var employee_data = '';
            $.each(data, function (key, value) {
                employee_data += '<tr>';
                employee_data += '<td>' + value.id + '</td>';
                employee_data += '<td>' + value.name + '</td>';
                employee_data += '<td>' + value.type + '</td>';
                employee_data += '<td>' + value.dob + '</td>';
                employee_data += '<td>' + value.experience + '</td>';
                employee_data += '<td>' + value.dateOfJoining + '</td>';
                employee_data += "<td>  <i class='rmv  fa fa-trash'></i></td>";
                employee_data += '</tr>';

            });

            $("#emp_table").append(employee_data);
        });
    });

    /*/////////////////////// display the form on clicking add new row button /////////*/

    $("#form_show").hide();
    $("#add_row").click(function () {
        $("#form_show").show();
    });

    /*////////////////////////add new row in the table////////////////////////////////*/

            $("#add").click(function () {
              $("#emp_table").append(
                  "<tr><td>" + $("#eid").val() + '</td>'
                  + '<td>' + $("#name").val() + '</td>'
                  + '<td>' + $("#type").val() + '</td>'
                  + '<td>' + $("#dob").val() + '</td>'
                  + '<td>' + $("#experience").val() + '</td>'
                  + '<td>' + $("#dateOfJoining").val() + '</td>'
                  + "<td>  <i class='rmv  fa fa-trash'></i></td></tr>"
                  );
          });

   /*////////////////////////// delete row ///////////////////////////////////////////////////////////*/

    $(document).on('click', '.rmv', function () {
        $(this).parents('tr').remove();
    });

    /*////////////////////////////////////// hide form after submission ///////////////////////*/

    $('#add').click( function () {
       $("#form_show").hide();
      });

})


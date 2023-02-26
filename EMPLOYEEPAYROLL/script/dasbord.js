var empPageUrl = "../templates/employeeform.html"
$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3000/employee',
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            var employeeData = "";
            $.each(data, function (key, value) {
                employeeData += '<tr>';
                employeeData += '<td>';
                employeeData += '<img src="' + value.profileUrl + '">';
                employeeData += '<div>' + value.name + '</div>';
                employeeData += '</td>';
                employeeData += '<td>' + value.gender + '</td>';
                employeeData += '<td>' + value.departMent + '</td>';
                employeeData += '<td>' + value.salary + '</td>';
                employeeData += '<td>' + value.startDate + '</td>';
                employeeData += '<td>';
                employeeData += '<img onclick="deleteRow(' + value.id + ')" src="../assets/delete-black-18dp.svg">';
                employeeData += '<img onclick="editRow(' + value.id + ')" src="../assets/create-black-18dp.svg">';
                employeeData += '</td>';
                employeeData += '</tr>';
            });
            $('#employee_table').append(employeeData);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }

    });
});
function deleteRow(id) {
    $.ajax({
        url: 'http://localhost:3000/employee/' + id,
        type: 'DELETE',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            console.log(data)
            alert("Record Deleted")
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log("Error in Operation");
        }
    });
}
function editRow(id) {
    $(document).ready(function () {
        $.ajax({
            url: 'http://localhost:3000/employee/' + id,
            type: 'GET',
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                console.log(data)
                var name = $('#name').val(data.name);
                console.log(name)
                // $('#name').val()=data.name;
                // $('input[name="profile"]:checked').val(data.profileUrl);
                // $('input[name="gender"]:checked').val(data.gender);
                // $('input[name="department"]:checked').val(data.departMent);
                // $('#salary').val(data.salary);
                // $('#day').val()+" "+$('#month').val()+" "+$('#year').val();
                // $('#note').val(data.notes);
                // window.location.href = empPageUrl;
                // console.log(data)
                // alert("Record Deleted")
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log("Error in Operation");
            }
        });
    });
}

$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:3000/employee',
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            var employeeData = "";
            $.each(data,function(key,value){
                console.log(value.departMent)
                employeeData += '<tr>';
                employeeData += '<td>';
                employeeData += '<img src="'+value.profileUrl+'">';
                employeeData += '<div>'+value.name+'</div>';
                employeeData += '</td>';
                employeeData += '<td>'+value.gender+'</td>';
                employeeData += '<td>'+value.departMent+'</td>';
                employeeData += '<td>'+value.salary+'</td>';
                employeeData += '<td>'+value.startDate+'</td>';
                employeeData += '<td>';
                employeeData += '<img onclik = "deleteRecord()" src="../assets/delete-black-18dp.svg">';
                employeeData += '<img src="../assets/create-black-18dp.svg">';
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
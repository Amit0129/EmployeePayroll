function submitForm() {
    var name = $('#name').val();
    var profile = $('input[name="profile"]:checked').val();
    var gender = $('input[name="gender"]:checked').val();
    // var department = $('input[name=department]:checked').val();
    var department = new Array();
    $('input[name="department"]:checked').each(function(){
        department.push($(this).val())
    })


    var salary = $('#salary').val();
    var day = $('#day').val();
    var month = $('#month').val();
    var year = $('#year').val();
    var note = $('#note').val();

    let reqPayload = {
        "name": name,
        "profileUrl": profile,
        "gender": gender,
        "departMent": department,
        "salary": salary,
        "day": day,
        "month": month,
        "year": year,
        "notes": note
    }
    console.log(reqPayload);

    $.ajax({
        url: 'http://localhost:3000/employee',
        type: 'POST',
        dataType: 'json',
        data: reqPayload,
        success: function (data, textStatus, xhr) {
            console.log(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    });

}
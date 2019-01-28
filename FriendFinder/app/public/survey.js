$(document).ready(function(){
    $("#submit").on("click", function(){
        var newFriend = {
            name: $("#name").val(), 
            pic: $("#photo").val(),
            q1: parseInt($('#q1 option:selected').val()),
            q2: parseInt($('#q2 option:selected').val()),
            q3: parseInt($('#q3 option:selected').val()),
            q4: parseInt($('#q4 option:selected').val()),
            q5: parseInt($('#q5 option:selected').val()),
            q6: parseInt($('#q6 option:selected').val()),
            q7: parseInt($('#q7 option:selected').val()),
            q8: parseInt($('#q8 option:selected').val()),
            q9: parseInt($('#q9 option:selected').val()),
            q10: parseInt($('#q10 option:selected').val()),


        }
        console.log("hi you click my dirty buttonss", newFriend);
        
    })

    console.log('helllo js file loaded!!')
})


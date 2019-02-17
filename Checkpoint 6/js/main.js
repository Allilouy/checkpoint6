
$('#submit').click(function () { 
   window.open('form.html');
   window.close(this)
   });

if (confirm('You can only proceed if you have an ADA account')) {
} else {
    window.close();
}


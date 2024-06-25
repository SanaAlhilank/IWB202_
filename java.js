<script>
    window.addEventListener('scroll', function() ){
        var nav = document.querySelector('.nav');
        if (window.pageYOffset > 0) {
            nav.classList.add('fixed')
        } else {
            nav.classList.remove('fixed')
        }
    });
$(document).ready(function(){
  $("#myForm").on("submit", function(event){
    event.preventDefault();

    
  });
});

<script> function showForm() 
    { document.getElementById("form-modal").style.display = "block"; } 
    function hideForm() { document.getElementById("form-modal").style.display = "none"; } 
    function validateForm() 
    { var nameInput = document.getElementById("name");
     var idInput = document.getElementById("id");
    var phoneInput = document.getElementById("phone"); 
    if (!nameInput.checkValidity() || !idInput.checkValidity() || !phoneInput.checkValidity()) 
    { alert("الرجاء تصحيح المدخلات غير الصحيحة"); return false; } return true; } 
</script>
</script>
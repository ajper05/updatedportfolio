$(".emailBtn").click(function(){
    let contactName = $("#contactName").val()
    let contactEmail = $("#contactEmail").val()
    let contactMessage = $("#userMessage").val()
    let myEmail = "anthony.perez0105@gmail.com"
    
    window.open(`mailto:${myEmail}?subject=Inquiry from ${contactEmail} - ${contactName}&body=${contactMessage}`);
})
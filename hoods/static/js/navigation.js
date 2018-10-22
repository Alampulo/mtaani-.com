navigate=(event)=>{
    let url = event.currentTarget.attributes['route'].value;
    let old = location.pathname;
<<<<<<< HEAD
    $('#sidebar').toggleClass('side',25);
=======
    $('#sidebar').toggleClass('side',250);
>>>>>>> c47743de6bfeee36b5cc1a723a14035e1c7334e2
    $("[route='"+old+"']").removeClass("active");
    $("[route='"+url+"']").addClass("active");
    history.pushState('','',url);
    $.get(url,'',(data)=>{
        $("body" ).empty();
        $("body" ).append(data);
        rebind()
    })
};
rebind=()=>{
    $('.navigation').unbind('click',navigate);
    $('.navigation').click(navigate);
    $("#id_description").attr('rows','1');
    $("form").attr('autocomplete','off');
};
$(document).ready(rebind);
// Create buttons using a $fc
//everitging inside the () will run unpon the page loaded
$(function(){
    //add bottons to the page, these are lnked to the search/submit fc
    populateButtons(searchArray,'searchButton','#buttonsArea');
    // inspect --> console -->if "page loaded" = OK
    console.log("Page Loaded");  
})
//create a fc to populate buttonsArea w buttons
    //1 create a variable hounsing str to populate our reach
    var searchArray = ['Ballet','Jazz','Tap'];
    //2 fc that will take in searchArray a classToAdd and an areaToAdd
    function populateButtons(searchArray,classToAdd,areaToAddTo){
        //use $ to use the previous fc to additional buttons
        //.empty to avoid copies of buttons
        $(areaToAddTo).empty();

        for (var i=0; i < searchArray.lenght;i++){
            var a = $('<button>'); //modify button element
            a.addClass(classToAdd);
            a.attr('data-type', searchArray[i]);
            a.text(searchArray[i]);
            $(areaToAddTo).append(a);
        }
    }
    $(document).on('click','.searchButton', function(){
        var type = $(this).data('type');
        console.log(type);
    })
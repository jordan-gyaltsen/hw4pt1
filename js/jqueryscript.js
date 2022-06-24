// global variables
var slidemin = -50, slidemax = 50;

function newFunction() {
    // store the integer values of inputted entries into variables
    const colmin = parseInt(document.getElementById("colmin").value);
    const colmax = parseInt(document.getElementById("colmax").value);
    const rowmin = parseInt(document.getElementById("rowmin").value);
    const rowmax = parseInt(document.getElementById("rowmax").value);

    /* if a min value is greater than it's corresponding max value
    then update the errormessage element with the error message. */
    if (colmin >= colmax || rowmin >= rowmax) {
        const container = document.getElementById('errmsg');
        container.innerHTML = "Max value should be greater than Min value";
        // otherwise, with no input errors, proceed with table generation
    } else {
    // reset the table and error message elements for a new submssion.
    var table = document.getElementById('mytable');
    document.getElementById('errmsg').innerHTML = "";
    table.innerHTML = "";

    // starting index is rowmin - 1 for the first row
    // first row of the table is created for column hearders at row before rowmin. 
    for (var j = rowmin - 1; j <= rowmax; j++) {
        // for column header row:
        if (j == rowmin - 1) {
            // thead for gropuing th elements for a row            
            var tr = document.createElement("thead");
            /* create an empty td element to append to the row.
            first cell of each row is reserved for blank cell */
            var cell = document.createElement("td");
            cell.innerHTML = '';
            tr.appendChild(cell);
            /* loop, adding each column number from colmin-colmax
            as th elements to the very first (header) row */
            for (i = colmin; i <= colmax; i++) {
                var cell = document.createElement("th");
                cell.innerHTML = i;
                tr.appendChild(cell);
            }
        // now this is for all rows below top column header row
        } else {
            /* set the first/left cell of row to row header
            by creating a <th> to append to a newly made tr element*/
            var tr = document.createElement("tr");
            var cell = document.createElement("th");
            cell.innerHTML = j;
            tr.appendChild(cell);
            // all other td elements are the multiplied cells
            /* simply make a td element, set it's html value
            the product of the current col index and row index,
            then append it. */
            for (i = colmin; i <= colmax; i++) {
                var cell = document.createElement("td");
                cell.innerHTML = i*j;
                tr.appendChild(cell);
            }
        }
        /* after making each row element,
        append it to the table element in
        our html file*/
        table.appendChild(tr);
    }
}
}

$(document).ready(function(){
    $("#myform").validate({
        //constraints for each input must match range given above
        rules : {
            colmin : {
                required: true,
                number: true,
                range: [slidemin, slidemax]
            },
            colmax : {
                required: true,
                number: true,
                range: [slidemin, slidemax]
            },
            rowmin : {
                required: true,
                number: true,
                range: [slidemin, slidemax]
            },
            rowmax : {
                required: true,
                number: true,
                range: [slidemin, slidemax]
            }
        },
        placeError : function(error, element){
            $(error).appendTo($("#myform"));
        }
    });
});
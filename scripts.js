// Get the innerHTML of the first <div> element and convert it to a string
var str = document.getElementsByTagName('div')[0].innerHTML.toString();

// Initialize a counter variable
var i = 0;

// Clear the innerHTML of the first <div> element
document.getElementsByTagName('div')[0].innerHTML = "";

// Set a timeout to delay the execution by 0 milliseconds
setTimeout(function() {
    // Set an interval to gradually display characters
    var se = setInterval(function() {
        // Increment the counter
        i++;
        // Update the innerHTML of the first <div> with a substring up to index 'i' and add a "|"
        document.getElementsByTagName('div')[0].innerHTML = str.slice(0, i) + "|";
        // Check if we have displayed all characters
        if (i == str.length) {
            // If all characters are displayed, clear the interval
            clearInterval(se);
            // Remove the "|" and display the complete string
            document.getElementsByTagName('div')[0].innerHTML = str;
        }
    }, 10); // Interval time in milliseconds
}, 0); // Timeout delay in milliseconds

document.getElementById("enterBtn").addEventListener("click", function() {
	// Get the reference to the <p> tag 
	var statusParagraph = document.getElementById("status");
	
	// Change its text content
	statusParagraph.textContent = "Entered Metaverse";

	// Display the text in an <h1> tag 
	document.getElementById("status").textContent = statusParagraph.textContent;
});
//your JS code here. If required.
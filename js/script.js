const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
//Declare an async function called getImage.
//Inside the function body, declare a variable called res.
//In the value of res, use the await keyword with fetch() to enable asynchronous communication between your program and the Imgflip API.
//Provide the fetch() function with the API URL: https://picsum.photos/v2/list?limit=100. On the next line, declare a variable called images.
//In the value of images, parse the data captured in the res variable using the .json(). Hint: Don’t forget to use the await keyword.
//Log out the result of images in the console. Outside the function, make sure to call the getImage() function to see the results.
const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
};
//Below the async function, declare a function expression called selectRandomImage. Use the images as a parameter.
//In the body of the function, declare a variable called randomIndex. In the value, use the Math.floor() method to round the number down. 
//Inside the Math.floor() method, multiply the Math.random() method by the length of the images: Math.floor(Math.random() * images.length). 
//In the getImage() async function, call the selectRandomImage() function, and pass it images as an argument. 
//Delete or comment out the line of code once you’ve confirmed there’s a number. Below your randomIndex variable, create a variable 
//called randomImage. In the value, use randomIndex to grab a single image from your images array. Log out your randomImage variable to the console. 
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex);
    const randomImage = images[randomIndex];
    console.log(randomImage);
    displayImage(randomImage);
};
//Below the selectRandomImage function, create a new function expression called displayImage. Give it a parameter called randomImage
//Inside the body of the function, declare a variable called author. In the value, access the author property from the randomImage object. 
//On the next line, declare a variable called imageAddress. In the value, access the download_url property from the randomImage object. 
//Finally, declare a variable named imageUrl. In the value, access the url property from the randomImage object.
//Next, you’ll be modifying the DOM elements that you declared at the top of the file, with information you’ve captured from our random 
//image. While still in the displayImage function, change innerText of the authorSpan element to the value of the author variable.
//Set the src attribute of the img variable to the value of the imageAddress variable.
//For accessibility, set the alt text attribute of the img variable to a template literal that includes the author’s name and the url 
//to see the image on Unsplash (not the download_url.) Remove the "hide" class from the imgDiv element.
//Call the displayImage function inside the body of selectRandomImage, and pass it the randomImage variable as an argument.
const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    const imageUrl = randomImage.url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    img.alt = `Image by ${author}, ${imageUrl}`;
    imgDiv.classList.remove("hide");
};
//Add a click event listener to the button.
//Cut the getImage() call (located between the getImage() and selectRandomImage() functions) 
//and paste it into the body of the event listener.
button.addEventListener("click", function () {
    getImage();
});    

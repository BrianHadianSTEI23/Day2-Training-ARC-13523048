// Get main section
const section = document.querySelector("#main-section");

// Fetch the data
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    // making the auxiliary bar
    const containerColumn = document.createElement("div");
    const titleColumn = document.createElement("div");
    const descriptionColumn = document.createElement("div");
    const priceColumn = document.createElement("div");
    const ratingColumn = document.createElement("div");
    const imageColumn = document.createElement("div");

    // filling each column title
    titleColumn.textContent = "Title";
    descriptionColumn.textContent = "Description";
    priceColumn.textContent = "Price";
    ratingColumn.textContent = "Rating";
    imageColumn.textContent = "Image";
    
    // styling each column title
    containerColumn.style.display = "flex";
    containerColumn.style.fontFamily = "arial";
    containerColumn.style.justifyContent = "center";
    containerColumn.style.alignItems = "center";    
    containerColumn.style.border = "0.2vw solid black";
    
    titleColumn.style.display = "flex";
    titleColumn.style.justifyContent = "center";
    titleColumn.style.alignItems = "center";
    titleColumn.style.width = "10%";
    titleColumn.style.borderRight = "0.2vw solid black";
    
    descriptionColumn.style.display = "flex";
    descriptionColumn.style.justifyContent = "center";
    descriptionColumn.style.alignItems = "center";
    descriptionColumn.style.width = "30%";
    descriptionColumn.style.borderRight = "0.2vw solid black";
    
    priceColumn.style.display = "flex";
    priceColumn.style.justifyContent = "center";
    priceColumn.style.alignItems = "center";
    priceColumn.style.width = "10%";
    priceColumn.style.borderRight = "0.2vw solid black";
    
    
    ratingColumn.style.display = "flex";
    ratingColumn.style.justifyContent = "center";
    ratingColumn.style.alignItems = "center";
    ratingColumn.style.width = "10%";
    ratingColumn.style.borderRight = "0.2vw solid black";
    
    imageColumn.style.display = "flex";
    imageColumn.style.justifyContent = "center";
    imageColumn.style.alignItems = "center";
    imageColumn.style.width = "40%";
    imageColumn.style.borderRight = "0.2vw solid black";
    
    // adding all into container column
    containerColumn.appendChild(titleColumn);
    containerColumn.appendChild(descriptionColumn);
    containerColumn.appendChild(priceColumn);
    containerColumn.appendChild(ratingColumn);
    containerColumn.appendChild(imageColumn);

    // add to the main section
    section.appendChild(containerColumn);

    const products = data.products; // an array
    for (let i = 0; i < 20; i++) {
        const object = products[i];
        const objectContainer = document.createElement("div");
        const title = document.createElement("div");
        const description = document.createElement("div");
        const price = document.createElement("div");
        const rating = document.createElement("div");
        const image = document.createElement("img"); // an image

        // filling each div
        title.textContent = object.title;
        description.textContent = object.description;
        price.textContent = object.price;
        rating.textContent = object.rating;
        image.src = object.images[0];
    
        // Add elements to the container
        objectContainer.appendChild(title);
        objectContainer.appendChild(description);
        objectContainer.appendChild(price);
        objectContainer.appendChild(rating);
        objectContainer.appendChild(image);
    
        // styling the container
        objectContainer.style.display = "flex";
        objectContainer.style.fontFamily = "arial";
        objectContainer.style.justifyContent = "center";
        objectContainer.style.alignItems = "center";    
        objectContainer.style.border = "0.2vw solid black";
        // objectContainer.style.maxHeight = "30vh";
        
        // styling the title
        title.style.padding = "0.5vw 0.5vh";
        title.style.display = "flex";
        title.style.justifyContent = "center";
        title.style.alignItems = "center";    
        title.style.alignItems = "center";  
        title.style.height = "100%";
        title.style.width = "10%";
        title.style.borderRight = "0.2vw solid black";
        
        // styling the description
        description.style.padding = "0.5vw 0.5vh";
        description.style.display = "flex";
        description.style.justifyContent = "center";
        description.style.textAlign = "center";  
        description.style.textAlign = "center";  
        description.style.borderRight = "0.2vw solid black";
        description.style.height = "100%";
        description.style.width = "30%";
        
        // styling the price
        price.style.padding = "0.5vw 0.5vh";
        price.style.display = "flex";
        price.style.justifyContent = "center";
        price.style.textAlign = "center";  
        price.style.textAlign = "center";  
        price.style.borderRight = "0.2vw solid black";
        price.style.height = "100%";
        price.style.width = "10%";
        
        // styling the rating
        rating.style.padding = "0.5vw 0.5vh";
        rating.style.display = "flex";
        rating.style.justifyContent = "center";
        rating.style.textAlign = "center";  
        price.style.textAlign = "center";  
        rating.style.borderRight = "0.2vw solid black";
        rating.style.height = "100%";
        rating.style.width = "10%";
        
        // styling the image
        image.style.padding = "0.5vw 0.5vh";
        image.style.display = "flex";
        image.style.justifyContent = "center";
        image.style.alignItems = "center";  
        image.style.width = "40%";
        image.style.height = "100%";
        // image.style.objectFit = "cover";
        // image.style.maxHeight = "30%";
        // image.style.maxWidth = "auto";
        
        // Append the container to the section
        section.appendChild(objectContainer); 
        
        
    }
});

/*
padding-bottom: 100%- nak az elmagyarázása


padding-bottom: 100%; is commonly used in the context of creating responsive design for elements, 
especially when dealing with aspect ratios for images or containers. 
This property sets the bottom padding of an element to be 100% of its width.!!!!!
*/
.container {
    position: relative;
    width: 50%; /* Or any other width you want */
    padding-bottom: 100%;
  }
  
  .inner-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Additional styling for the inner content */
  }
/*
In this example, the outer container (<div class="container">) has a bottom padding set to 100% of its width. 
This creates a container with a height that is always equal to its width. 

Inside this container, there's an inner content (<div class="inner-content">) that is absolutely positioned 
to cover the entire area of the container. 

This technique is often used to create responsive square or fixed aspect ratio containers.
*******************************************************************************************************************************
*/   

/*
Meg lehet-e határozni a grid-template-rows-t máshogy mint pixelben? -> Igen 
*/
.grid-container {
  display: grid;
  /* Using different units for row heights */
  grid-template-rows: 1fr 2fr 3fr; /* Fractional units */
  /* grid-template-rows: 20% 30% 50%; */ /* Percentages */
  /* grid-template-rows: auto auto auto; */ /* Auto sizing */
}
/*
1fr, 2fr, and 3fr represent fractional units, 
where each row gets a portion of the available space. 
For example, in 1fr 2fr 3fr, the second row will get twice as much height as the first, 
and the third will get three times as much as the first.

20%, 30%, and 50% are specified in percentages, 
indicating the percentage of the grid container's height each row should occupy.

auto means that the row will automatically adjust its height based on its content. 
If there is no content, it will take up minimal space.
*/

function generateBlob(blobOpts){
  // new svg
  const svg = generateSVG(); 
  // create path
  const numberOfPoints = blobOpts && blobOpts.numberOfPoints || Math.floor(Math.random() * 12) + 3; 
  const color = blobOpts && blobOpts.color || randomHexColor();
  const newPath = generatePath(numberOfPoints, color);
  // assign the path 
  svg.appendChild(newPath);
  // return the SVG
  return svg;
}

function generateSVG(){
  const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgEl.setAttribute('width', '100%');
  svgEl.setAttribute('height', '100%');
  svgEl.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  
  return svgEl;
}

function getRandomPoint(maxDim){
  //generate a number between 1 and 100. 
  return Math.floor(Math.random() * maxDim); 
}

function randomHexColor(){
  /* courtesy of Paul Irish, https://www.paulirish.com/2009/random-hex-color-code-snippets/ */
  var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  return randomColor;
}


function generatePath(numberOfPoints, color){
  //get viewport width and height
  const pathWidth = document.documentElement.clientWidth;
  const pathHeight = document.documentElement.clientHeight;
  // create basic path
  const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let pathCoords = "M1 2 ";
  const isCurvy = true;
  if (!isCurvy){
    // assign full list of points
    for (let i = 0; i < numberOfPoints; i++){
      pathCoords += ("L" + getRandomPoint(pathWidth) + " " + getRandomPoint(pathHeight)); 
    }
  } else {
    for (let i = 0; i < 5; i++){
      pathCoords += ("C ");
      for (let j = 0; j < 3; j++){
        pathCoords += (getRandomPoint(pathWidth) + "," + getRandomPoint(pathHeight) + " ");
      }
    }   
  }
  pathCoords += "Z";
  newPath.setAttributeNS(null, "d", pathCoords);
  newPath.setAttributeNS(null, "style", `fill: none; stroke: ${color}; stroke-width: 12px`);
  return newPath; 
}


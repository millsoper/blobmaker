function generateBlob(blobOpts){
  console.log(blobOpts);
  // new svg
  const svg = generateSVG(); 
  // create path
  const newPath = generatePath(4);
  // assign the path 
  svg.appendChild(newPath);
  // return the SVG
  return svg;
}

function generateSVG(){
  const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgEl.setAttribute('style', 'border: 1px solid red');
  svgEl.setAttribute('width', '600');
  svgEl.setAttribute('height', '250');
  svgEl.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  
  return svgEl;
}

function getRandomPoint(){
  //generate a number between 1 and 100. 
  return Math.floor(Math.random() * 100); 
}


function generatePath(numberOfPoints){
  // create basic path
  const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  let pathCoords = "M1 2 Q ";
  // assign full list of points
  for (let i = 0; i < numberOfPoints; i++){
    let randomPoint = getRandomPoint();
    pathCoords += (" " + randomPoint); 
  }

  pathCoords += "Z";
  newPath.setAttributeNS(null, "d", pathCoords);
  return newPath; 
}


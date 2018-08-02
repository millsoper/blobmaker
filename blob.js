function generateBlob(blobOpts){
  console.log(blobOpts);
  // create an svg
  const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  
  svgEl.setAttribute('style', 'border: 1px solid red');
  svgEl.setAttribute('width', '600');
  svgEl.setAttribute('height', '250');
  svgEl.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  
  // create path
  const newPath = generatePath();
  // assign the path 
  svgEl.appendChild(newPath);
  // return the SVG
  return svgEl;
}

function generatePath(){
  // create basic path
  const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  // assign full list of points
  newPath.setAttributeNS(null, "d", "M 1,97.857143 C 19.285714,96.428571 24.016862,131.64801 90.714286,132.85714 140.78762,133.7649 202.79376,66.16041 202.79376,66.16041");
  return newPath; 
}

function generateRandomPoint(){
}

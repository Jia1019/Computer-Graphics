//part 1
var canvas1 = document.getElementById("c1");  
var gl1 = canvas1.getContext("webgl"); 
gl1.clearColor(0.3921,0.5843,0.9294,1.0);
gl1.clear(gl1.COLOR_BUFFER_BIT); 

//part 2
var canvas2 = document.getElementById("c2");  
var gl2 = canvas2.getContext("webgl"); 
gl2.clearColor(0.3921,0.5843,0.9294,1.0);
gl2.clear(gl2.COLOR_BUFFER_BIT);

var program = initShaders(gl2, "vertex-shader", "fragment-shader");
gl2.useProgram(program);

var vertices = [[0,0,1,0,0,0,1],
                [0,1,1,0,0,0,1],
                [1,1,1,0,0,0,1],
];
var vBuffer = gl2.createBuffer();
gl2.bindBuffer(gl2.ARRAY_BUFFER, vBuffer);
gl2.bufferData(gl2.ARRAY_BUFFER, flatten(vertices), gl2.STATIC_DRAW);

var vPosition = gl2.getAttribLocation(program, "a_Position");
gl2.vertexAttribPointer(vPosition, 2, gl2.FLOAT, false, 7*Float32Array.BYTES_PER_ELEMENT, 0);
gl2.enableVertexAttribArray(vPosition);

//part 3
var canvas3 = document.getElementById("c3");  
var gl3 = canvas3.getContext("webgl");
gl3.clearColor(0.3921,0.5843,0.9294,1.0);
gl3.clear(gl3.COLOR_BUFFER_BIT);

//part 4
var canvas4 = document.getElementById("c4");  
var gl4 = canvas4.getContext("webgl"); 
gl4.clearColor(0.3921,0.5843,0.9294,1.0);
gl4.clear(gl4.COLOR_BUFFER_BIT);

//part 5
var canvas5 = document.getElementById("c5");  
var gl5 = canvas5.getContext("webgl"); 
gl5.clearColor(0.3921,0.5843,0.9294,1.0);
gl5.clear(gl5.COLOR_BUFFER_BIT);
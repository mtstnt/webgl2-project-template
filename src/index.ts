let timer = 0;

import { buildShader } from "./shaders";

function main() {
    const canvas = document.querySelector('canvas')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gl = canvas.getContext('webgl2');
    if (!gl) {
        alert("Failed to initialize WebGL!");
        return;
    }

    console.log("WebGL initialized!");

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const vbo = gl.createBuffer();
    const data = new Float32Array([
        -0.5, -0.5, 0.0,
        0.5, -0.5, 0.0,
        0.0, 0.5, 0.0,
    ]);

    const program = buildShader(gl);
    gl.useProgram(program);

    gl.viewport(0, 0, canvas.width, canvas.height);

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    renderLoop(gl);
}

function renderLoop(gl: WebGL2RenderingContext) {
    requestAnimationFrame(() => renderLoop(gl));
    render(gl);
}

function render(gl: WebGL2RenderingContext) {
    timer = (timer + 1) % 360;
    gl.clearColor(Math.sin(timer / 300), 0, Math.sin(timer / 300), 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
}

main();
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";

export function buildShader(gl: WebGL2RenderingContext): WebGLProgram {
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;

    console.log("OBJ: " + sofaObj);

    gl.shaderSource(vs, vertexShader);
    gl.shaderSource(fs, fragmentShader);

    gl.compileShader(vs);
    console.log(gl.getShaderInfoLog(vs));
    gl.compileShader(fs);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);

    gl.linkProgram(program);

    return program;
}
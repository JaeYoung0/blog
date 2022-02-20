/**
 * https://www.youtube.com/watch?v=vM8M4QloVL0 참고
 * shader = vertex + fragment
 * GLSL = openGL Shading Language. openGL의 쉐이더를 컨트롤하는 언어. c와 매우 비슷.
 * three.js의 WebGLProgram - https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
 */


// varying 키워드를 사용하여 fragment shader로 transfer
varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv;
    vertexNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
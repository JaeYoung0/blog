/**
 * glsl이라고 퉁치긴 하지만, 아래와 같이 쓰기도함.
 * .vert - a vertex shader
 * .tesc - a tessellation control shader
 * .tese - a tessellation evaluation shader
 * .geom - a geometry shader
 * .frag - a fragment shader
 * .comp - a compute shader
 */

declare module "*.glsl" {
  const value: string;
  export default value;
}

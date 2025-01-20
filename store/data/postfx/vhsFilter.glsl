/*
 * VHS Shader
 * this is a shader conversion from shadertoy to Range Engine 1.4.
 * original creator is FMS_Cat, you can see the original here: https://www.shadertoy.com/view/XtBXDt.
 * conversion to Range by Gabriel Dornelles.
*/

#define PI 3.14159265

uniform sampler2D bgl_RenderedTexture;

/*
 * the object that will activate the filter
 * should have a timer property called also 'timer'.
*/
uniform float timer;

vec3 tex2D(sampler2D tex, vec2 p){
    vec3 col = texture(tex, p).xyz;
    if (.5 < abs(p.x - .5)){
        col = vec3(.1);
    }
    return col;
}

float hash(vec2 v){
    return fract(sin(dot(v, vec2(89.44, 19.36))) * 22189.22);
}

float iHash(vec2 v, vec2 r){
    float h00 = hash(vec2(floor(v * r + vec2(.0, .0)) / r));
    float h10 = hash(vec2(floor(v * r + vec2(1., .0)) / r));
    float h01 = hash(vec2(floor(v * r + vec2(.0, 1.)) / r));
    float h11 = hash(vec2(floor(v * r + vec2(1., 1.)) / r));
    vec2 ip = vec2(smoothstep(vec2(.0,.0), vec2(1.,1.), mod(v*r, 1.)));
    return (h00 * (1. - ip.x) + h10 * ip.x) * (1. - ip.y) + (h01 * (1. - ip.x) + h11 * ip.x) * ip.y;
}

float noise(vec2 v){
    float sum = 0.;
    for (int i = 1; i < 9; ++i){
        sum += iHash(v + vec2(i), vec2(2. * pow(2., float(i)))) / pow(2., float(i));
    }
    return sum;
}

void main(){
    vec2 uv = gl_TexCoord[0].st;
    vec2 uvn = uv;
    vec3 col = vec3(.0);

    // tape wave
    uvn.x += (noise(vec2(uvn.y, timer)) - .5) * .005;
    uvn.y += (noise(vec2(uvn.y * 100., timer * 10.)) - .5) * .01;

    // tape crease
    float tcPhase = clamp((sin(uvn.y * 8. - timer * PI * 1.2) - .92) * noise(vec2(timer)), .0, .01) * 10.;
    float tcNoise = max(noise(vec2(uvn.y * 100., timer * 10.)) - .5, .0);
    uvn.x = uvn.x - tcNoise * tcPhase;

    // switching noise
    float snPhase = smoothstep(.03, .0, uvn.y);
    uvn.y += snPhase * .3;
    uvn.x += snPhase * ((noise(vec2(uv.y * 100., timer * 10.)) - .5) * .2);

    col = tex2D(bgl_RenderedTexture, uvn);
    col *= 1. - tcPhase;
    col = mix(col, col.yzx, snPhase);

    // bloom
    for (float x = -4.; x < 2.5; x+=1.){        
        col.xyz += vec3(
            tex2D(bgl_RenderedTexture, uvn + vec2(x - .0, .0) * 7E-3).x,
            tex2D(bgl_RenderedTexture, uvn + vec2(x - 2., .0) * 7E-3).y,
            tex2D(bgl_RenderedTexture, uvn + vec2(x - 4., .0) * 7E-3).z
        ) * .1;
    }
    col *= .6;

    // ac beat
    col *= 1. + clamp(noise(vec2(.0, uv.y + timer * .2)) * .6 - .25, .0, .1);

    gl_FragColor = vec4(col, 1.);
}

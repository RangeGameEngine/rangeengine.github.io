
uniform float bgl_RenderedTextureWidth;
uniform float bgl_RenderedTextureHeight;

uniform sampler2D bgl_RenderedTexture;
uniform sampler2D bgl_DepthTexture;

float width = bgl_RenderedTextureWidth;
float height = bgl_RenderedTextureHeight;

const float pixel = 2.0;
const float threshold = 1000.0 / (pixel / 5.0);
const float intensity = 1.0;

vec2 texCoord = gl_TexCoord[0].xy;

void main(){
	vec2 size = pixel * 1.0 / vec2(width, height);

	float depth = texture2D(bgl_DepthTexture, texCoord).r;

	float depth2 = texture2D(bgl_DepthTexture, texCoord + vec2(0.0, size.y)).r;
	float depth3 = texture2D(bgl_DepthTexture, texCoord + vec2(size.x, 0.0)).r;

	float fac = abs(depth - depth2) + abs(depth - depth3);

	vec3 image = texture2D(bgl_RenderedTexture, texCoord).rgb;

	gl_FragColor.rgb = image - step(1.0, fac * threshold * depth) * intensity;
	gl_FragColor.a = 0.0;
}

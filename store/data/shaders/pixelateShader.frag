
const int res = 256;

void fragment() {

    vec2 coord = floor(UV * res) / res;

    ALBEDO = pow(texture(samp0, coord).rgb, vec3(2.2));
}

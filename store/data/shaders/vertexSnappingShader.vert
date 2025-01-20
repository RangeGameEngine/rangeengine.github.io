
const int size = 10; // snap size vertex

void vertex() {
    vec4 vert = VIEW_MATRIX * MODEL_MATRIX * vec4(VERTEX, 1.0);

    vert = floor(size * vert) / size;
    vert = inverse(VIEW_MATRIX * MODEL_MATRIX) * vert;

    VERTEX += vert.xyz;
    VERTEX /= 2.0;
}

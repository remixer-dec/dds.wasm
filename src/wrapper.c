#include <stdio.h>
#include "emscripten.h"
#include <stdlib.h>
#include <stdint.h>
#include "../lib/dds/dds.h"

int result[5];
dds_image_t img;

EMSCRIPTEN_KEEPALIVE
void call_load_wrapper(const char* data, long data_length)
{
    dds_image_t image = dds_load_from_memory(data + 8, data_length);
    int size = image->header.width * image->header.height * 4;
    // printf("w %d h %d d %d s %d\n", image->header.width, image->header.height, image->header.depth, size);
    result[0] = (int) image->pixels;
    result[1] = size;
    result[2] = image->header.width;
    result[3] = image->header.height;
    result[4] = image->header.pixel_format.flags;
    img = image;

}

EMSCRIPTEN_KEEPALIVE
char* create_buffer(int size) {
    return malloc(size);
}

EMSCRIPTEN_KEEPALIVE
void destroy_buffer(char* p) {
    free(p);
    free(img);
}

EMSCRIPTEN_KEEPALIVE
int get_pointer() {
    return result[0];
}

EMSCRIPTEN_KEEPALIVE
int get_size() {
    return result[1];
}

EMSCRIPTEN_KEEPALIVE
int get_width() {
    return result[2];
}

EMSCRIPTEN_KEEPALIVE
int get_height() {
    return result[3];
}

EMSCRIPTEN_KEEPALIVE
int get_format_flags() {
    return result[4];
}
all : 
	em++ \
		main.cpp \
		-std=c++17 \
		--emrun \
		-o index.html \
		--shell-file index-shell.html

clean : 
	rm index.html index.data index.js index.wasm

run :
	emrun --browser chrome index.html


# 	--preload-file sprites \
# -s USE_WEBGL2=1 \
# -s USE_SDL=2 \
# -s USE_SDL_IMAGE=2 \
# -s SDL2_IMAGE_FORMATS=["png"] \
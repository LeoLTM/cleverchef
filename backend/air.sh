#!/bin/bash

# Set root directory and other configurations
ROOT="./"
TESTDATA_DIR="testdata"
TMP_DIR="tmp"

# Build configurations
BIN="main"
CMD="make build"
DELAY=1000
EXCLUDE_DIR=("assets" "tmp" "vendor" "testdata")
EXCLUDE_REGEX=("_test.go")
INCLUDE_EXT=("go" "tpl" "tmpl" "html")
LOG_FILE="build-errors.log"
RERUN_DELAY=500

# Colors
COLOR_BUILD="yellow"
COLOR_MAIN="magenta"
COLOR_RUNNER="green"
COLOR_WATCHER="cyan"

# Generate the air command using environment variables or flags
air --build.bin="$BIN" \
    --build.cmd="$CMD" \
    --build.delay="$DELAY" \
    --build.exclude_dir="${EXCLUDE_DIR[*]}" \
    --build.exclude_regex="${EXCLUDE_REGEX[*]}" \
    --build.include_ext="${INCLUDE_EXT[*]}" \
    --build.log="$LOG_FILE" \
    --build.rerun_delay="$RERUN_DELAY" \
    --color.build="$COLOR_BUILD" \
    --color.main="$COLOR_MAIN" \
    --color.runner="$COLOR_RUNNER" \
    --color.watcher="$COLOR_WATCHER"

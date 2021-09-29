#!/bin/bash

npm run build

rsync -avz /home/matt/matt-programming-ui/build matt@mattprogramming.com:/home/matt/ui
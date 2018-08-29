#Image used for Creating the Docker images
FROM httpd:latest

#Coping file into the docker containers
COPY . /website_files

#need to run the script neccessary to fetch the enviroment variables
ONBUILD RUN sh $(pwd)/website_files/env.sh
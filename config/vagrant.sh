#!/usr/bin/env bash

###
# Install Nginx NodeJS MongoDB Redis Ajenti
###
# Remove Apache2 if installed
sudo apt-get remove apache2
# Install helpers
sudo apt-get update && sudo apt-get install -y curl build-essential git-core imagemagick
# Nginx
wget -O key http://nginx.org/keys/nginx_signing.key && sudo apt-key add key && sudo rm -f key
echo "deb http://nginx.org/packages/debian/ wheezy nginx" | sudo tee /etc/apt/sources.list.d/nginx.list
echo "deb-src http://nginx.org/packages/debian/ wheezy nginx" | sudo tee -a /etc/apt/sources.list.d/nginx.list
# NodeJS
sudo curl -sL https://deb.nodesource.com/setup | sudo bash -
# MongoDB
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
# Install Nginx NodeJS MongoDB
sudo apt-get update && sudo apt-get install -y nginx nodejs mongodb-org
# Install Redis
sudo wget http://download.redis.io/redis-stable.tar.gz
sudo tar xvzf redis-stable.tar.gz
cd redis-stable
sudo make && sudo make install
sudo mkdir /etc/redis
sudo mkdir /var/redis
sudo cp utils/redis_init_script /etc/init.d/redis_6379
sudo vi /etc/init.d/redis_6379
sudo cp redis.conf /etc/redis/6379.conf
sudo mkdir /var/redis/6379
sudo update-rc.d redis_6379 defaults
cd
# Install PHP
#sudo apt-get install -y php5-cli php5-common php5-suhosin php5-cgi php5-fpm fcgiwrap php5-mysql php5-gd php5-apc memcached php5-memcached
# Install Ajenti
wget -O- https://raw.github.com/Eugeny/ajenti/master/scripts/install-debian.sh | sudo sh
#sudo apt-get install -y ajenti-v ajenti-v-mail ajenti-v-nginx ajenti-v-nodejs ajenti-v-ftp-pureftpd # ajenti-v-mysql ajenti-v-php-fpm php5-mysql
sudo apt-get install -y python-setuptools
sudo easy_install pymongo
#sudo service ajenti restart
# Config vagrant folder
sudo rm -rf /var/www
sudo ln -fs /vagrant /var/www
echo 'Open and edit Redis init script /etc/init.d/redis_6379'
echo '	Make sure to modify REDIS_PORT accordingly to the port you are using.'
echo '	Both the pid file path and the configuration file name depend on the port number.'
echo 'Open and edit Redis config file at path /etc/redis/6379.conf'
echo '	Set daemonize to yes (by default it is set to no).'
echo '	Set the pidfile to /var/run/redis_6379.pid (modify the port if needed).'
echo '	Change the port accordingly. In our example it is not needed as the default port is already 6379.'
echo '	Set your preferred loglevel.'
echo '	Set the logfile to /var/log/redis_6379.log'
echo '	Set the dir to /var/redis/6379 (very important step!)'
echo '	At the edn of configuration run "/etc/init.d/redis_6379 start" to start Redis'
echo 'To property install npm packages add "--no-bin-links" flag.'
echo '	Example: npm i -production --no-bin-links'
echo 'All sites stored in "/var/www" folder'
echo 'Ajenti will listen on HTTPS port https://localhost:8000 by default.'
echo '	Default username: root'
echo '	Default password: admin'
echo 'Websites will be available at port 8080 instead of 80'

# Check if package is installed
# dpkg -s [PACKAGE NAME]
#!/bin/bash

echo "*****************************************"
echo " Installing PostgreSQL"
echo "*****************************************"

sudo yum -y install postgresql postgresql-server postgresql-devel postgresql-contrib postgresql-docs
sudo postgresql-setup initdb
# Use MD5 Authentication
sudo sed -i.bak -e 's/ident$/md5/' -e 's/peer$/md5/' /var/lib/pgsql9/data/pg_hba.conf
#start
sudo /sbin/chkconfig --levels 235 postgresql on
sudo service postgresql start

# credit
# https://gist.github.com/dstroot/2920991
# http://imperialwicket.com/aws-install-postgresql-on-amazon-linux-quick-and-dirty

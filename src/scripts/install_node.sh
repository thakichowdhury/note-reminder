# Updating updates on instance
sudo yum -y update

echo "Getting root priveleges"
sudo -i

# node version: https://github.com/nodesource/distributions/tree/master/rpm
node_version=12

echo "Getting node version $node_version"
curl --silent --location "https://rpm.nodesource.com/setup_$node_version.x" | sudo bash -

echo "Installing node version $node_version"
sudo yum -y install nodejs

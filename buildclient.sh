clientDir="$PWD/Client";
serverDir="$PWD/Server";
# Build Client
rm -r $serverDir/client;
cd $clientDir;
if [[ ! -d node_modules ]]; then
    npm install
fi
npm run build;
#Copy Client files to Server folder
mkdir $serverDir/client;
cp -r ./build/* $serverDir/client/;
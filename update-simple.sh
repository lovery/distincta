#!/bin/bash

echo ""
echo "start transfering to test environment ..."

echo ""
echo "start transfering index"
ncftpput -u username -p 'password' ftp.host /public_html/test /home/lovery/workspace/distincta/index.html
echo "end transfering index"

echo ""
echo "=========================================================="
echo "start transfering .htaccess"
ncftpput -u username -p 'password' ftp.host /public_html/test /home/lovery/workspace/distincta/.htaccess
echo "end transfering .htaccess"

echo ""
echo "=========================================================="
echo "start transfering robots.txt"
ncftpput -u username -p 'password' ftp.host /public_html/test /home/lovery/workspace/distincta/robots.txt
echo "end transfering robots.txt"

echo ""
echo "=========================================================="
echo "start transfering sitemap.xml"
ncftpput -u username -p 'password' ftp.host /public_html/test /home/lovery/workspace/distincta/sitemap.xml
echo "end transfering sitemap.xml"

echo ""
echo "=========================================================="
echo "start transfering source files"
ncftpput -u username -p 'password' -R ftp.host /public_html/test /home/lovery/workspace/distincta/dist
echo "end transfering data_files"

echo ""
echo "=========================================================="
echo "start transfering data_files"
ncftpput -u username -p 'password' -R ftp.host /public_html/test /home/lovery/workspace/distincta/data_files
echo "end transfering data_files"

echo ""
echo "=========================================================="
echo "start transfering templates"
ncftpput -u username -p 'password' -R ftp.host /public_html/test /home/lovery/workspace/distincta/templates
echo "end transfering templates"

echo ""
echo "... end ot transfering to test environment"

echo ""
echo "=========================================================="
echo "generating snapshots:"
rm -fr ./snapshots
node ./test-generate-snapshots.js
echo "end generating snapshots"

echo ""
echo "=========================================================="
echo "start transfering snapshots"
ncftpput -u username -p 'password' -R ftp.host /public_html/test /home/lovery/workspace/distincta/snapshots/
echo "end transfering snapshots"

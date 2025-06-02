Install apache2.

Create symlink: `ln -s ~/workspace/distincta/build /var/www/html/distincta`
Enable rewrite module of apache2: `sudo a2enmod rewrite`
Enable headers module of apache2: `sudo a2enmod headers`

Create self-signed certificates and put them in `/etc/apache2/ca/distinctaCA.crt(pem)` or change the comfiguration below
..

Create `/etc/apache2/sites-available/distincta.conf` with the following content:
```
<VirtualHost *:80>
	ServerName distincta.localhost
	ServerAlias www.distincta.localhost
	ServerAdmin webmaster@localhost
	DocumentRoot /var/www/html/distincta
	<Directory "/var/www/html/distincta">
		Require all granted
		AllowOverride All
	</Directory>

	RewriteMap lc int:tolower

	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
<IfModule mod_ssl.c>
        <VirtualHost *:443>
                ServerName distincta.localhost
                ServerAlias www.distincta.localhost
                ServerAdmin webmaster@localhost
                DocumentRoot /var/www/html/distincta
                <Directory "/var/www/html/distincta">
                        Require all granted
                        AllowOverride All
                        Header set Cache-Control "max-age=31536000"
                </Directory>

                RewriteMap lc int:tolower

                ErrorLog ${APACHE_LOG_DIR}/error.log
                CustomLog ${APACHE_LOG_DIR}/access.log combined

                SSLEngine on
                SSLCertificateFile /etc/apache2/ca/distinctaCA.crt
                SSLCertificateKeyFile /etc/apache2/ca/distinctaCA.key
                <FilesMatch “.(cgi|shtml|phtml|php)$”>
                        SSLOptions +StdEnvVars
                </FilesMatch>
                <Directory /usr/lib/cgi-bin>
                        SSLOptions +StdEnvVars
                </Directory>
                BrowserMatch “MSIE [2-6]” nokeepalive ssl-unclean-shutdown downgrade-1.0 force-response-1.0
                BrowserMatch “MSIE [17-9]” ssl-unclean-shutdown
        </VirtualHost>
</IfModule>
```

Create symlink to `sites-available`: `ln -s /etc/apache2/sites-available/distincta.conf /etc/apache2/sites-enabled/distincta.conf`

Restart apache: `sudo systemctl restart apache2`
In case you need only to reload the conf files use: `sudo /etc/init.d/apache2 reload`

Add to `/etc/hosts`:
```
::1 distincta.localhost
127.0.0.1 distincta.localhost
::1 www.distincta.localhost
127.0.0.1 www.distincta.localhost
```

When you change the css or js files run the minifications with `yui-compressor app.css > app.min.css`
Build project for distincta.localhost and prod with:
```harp ./src ./build```

To run development server use ```harp ./src```

You can either install harp globaly of install it with `npm install harp` and run server `./node_modules/harp... ./src`


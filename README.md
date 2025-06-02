Install apache2.

Create symlink: `ln -s ~/workspace/distincta/build /var/www/html/distincta`
Enable rewrite module of apache2: `sudo a2enmod rewrite`

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
Build project for distincta.localhost and prod with:
```harp ./src ./build```

To run development server use ```harp ./src```

You can either install harp globaly of install it with `npm install harp` and run server `./node_modules/harp... ./src`


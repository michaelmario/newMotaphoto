<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}


define('AUTH_KEY',         'tdjEDDBpcyxVZ8brpsyUCSQwdi4njzi6L9A8VGrFr0PkBS1MdhIh61hfXscbr5HGz+fSVjOSnbgG+YkL/8E8yg==');
define('SECURE_AUTH_KEY',  'FgwOxLZs89T1h7issWaktHsM8ZQGSC4Dq+y7ZoSBSG8FwkvpFgdsuuAq5eah0699Ki+mPjYPKgtFhi5OZNm/IQ==');
define('LOGGED_IN_KEY',    'NyXB14xxoVM7y2JMHdnO6lMOTRM6KM7K1MCVAvRdJZayYjVEbJFrotfhywLimMNHaAG398HAkLQtU9f6KBgItg==');
define('NONCE_KEY',        'cQiSIiescJ1xCPpT8v/ungleXxdQ4SdB4CsknJEQh0QvJhB2ClRPHGAUMO+ePEpSTOAWRMIOQRtxR6r6eMlw1g==');
define('AUTH_SALT',        '7212S024KuETnhyl7AjuDRy8OhxQ9saQtn7raHo+jtGx81TrlQKVFniVlP2La03C+eXRjdv80f1QMVEM9wcgeg==');
define('SECURE_AUTH_SALT', 'k6HZtadGGyDbi37hWX1+gSq6cdl2z20UphsLrmt+kKO3Hv36ACwTahtGJj/TBKBgASYopf11Y5e6nfLTOQO3Bw==');
define('LOGGED_IN_SALT',   'LVylDrQhBqIU+8BZ166XOX6Wqu7Jrlucc80UPABDgrxuSKgVAvQEQUD5Q0KRRCPcIx1mgo7GVlbK5xbQTMcTVw==');
define('NONCE_SALT',       'DolM6wOsuW8mvtyxYHi6UdQfURmqQY+DFs6d0XH4BFaTx+lIcEqUHSOdRihL1eAjtcIk7LkTuNcveg1OUy0EeA==');
define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

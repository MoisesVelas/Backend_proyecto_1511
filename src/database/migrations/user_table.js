
const conn = require('../conections')



const query = `CREATE table if not exists users (
    id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	email VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	email_verified_at TIMESTAMP NULL DEFAULT NULL,
	password VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	is_admin TINYINT(1) NOT NULL DEFAULT '0',
	remember_token VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	created_at TIMESTAMP NULL DEFAULT NULL,
	updated_at TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY (id),
	UNIQUE INDEX users_email_unique (email)


    )`;



    const result = conn(query, [])
    if (result != null ) {
        console.log(result[0])
    }



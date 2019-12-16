CREATE TABLE users(
    id serial NOT NULL,
    user_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(355) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT users_user_name_key UNIQUE (user_name)
);

INSERT INTO users(user_name, email) VALUES ('marco', 'gdmarav374@gmail.com');
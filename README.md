# VeEZ

## How to run

* download and install node and npm https://nodejs.org/en/download/
* download and install postgres, default user postgres https://get.enterprisedb.com/postgresql/postgresql-13.3-2-windows-x64.exe
* Modify the pg_hba.conf file and change 127.0.0.1/32 to 0.0.0.0/0 if you dont know where the pg_hba.conf file is run a query: SHOW hba_file;

* download and install pgAdmin https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v5.4/windows/pgadmin4-5.4-x64.exe

Once all is installed open a terminal in the project root directory and run "npm install" which will install all the dependencies for the project.

Open pgAdmin and run the sql inside db.sql in a query tool which will create the required database and tables (First select the statement that creates the database and press f5 to execute, then open a query tool in the newly created database then select all the table creations from the script and press f5 to create them all at once)

Open postgresDB.js and replace your database credentials and database ip (localhost)

once all is done open a terminal in the root directory and run npm start

# VeEZ

## How to run

* download and install node and npm https://nodejs.org/en/download/
* download and install postgres, default user postgres https://get.enterprisedb.com/postgresql/postgresql-13.3-2-windows-x64.exe
* download and install pgAdmin https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v5.4/windows/pgadmin4-5.4-x64.exe

Once all is installed open a terminal in the project root directory and run "npm install" which will install all the dependencies for the project.

Open pgAdmin and run the sql inside db.sql which will create the required database and tables (First select the statement that creates the database and press f5 to execute, then select all the table creations and press f5 to create them all at once)

Open postgresDB.js and replace your database credentials and database ip (localhost)

once all is done open a terminal in the root directory and run npm start

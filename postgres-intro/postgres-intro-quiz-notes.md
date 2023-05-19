# postgres-into-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we use databases in Web development?

  - to store data for the web app and provide client their requests more efficiently

- What is PostgreSQL and what are some alternative relational databases?

  - PostgreSQL is a relational database managing system that is useful for managing organized, structured data;
  - some alternative relational databases are MySQL, SQL Server by Microsoft, and Oracle by Oracle

- What are some advantages of learning a relational database?

  - SQLite is a relational database that is in majority of devices and applications so having familiarity with relational database would help as a web developer

- What is one way to see if PostgreSQL is running?
  - 'sudo service postgresql status'

## Notes

- forking: process of creating a new copy of existing codebase/project to make changes to codebase without affecting original version

#### Why Databases?

Applications are typically backed by some form of data store. It is possible for data to be stored directly in files that are managed by the application, but when the application needs to quickly retrieve or store complex data in an organized fashion, a database fills that need nicely. Databases also can be shared by many users and thus provide a centralized location for application data. Most enterprise businesses will keep their business data in one or more databases, which can manage many Gigabytes or even Terabytes of data.

#### What is PostgreSQL?

PostgreSQL is a powerful, free, open source Relational Database Management System (RDBMS). It is often cited as the most advanced open source database of its kind and is well-liked by the developer community for its robust feature set, standards compliance, and reliability. PostgreSQL has been in development for over 30 years and it still gets cutting-edge improvements on an annual basis! Other popular relational databases include MySQL (also free), SQL Server by Microsoft, and Oracle by Oracle Corporation.

#### Why a Relational Database?

Not all databases are relational like PostgreSQL or the above mentioned. For example: MongoDB is a JSON document store, Redis is an in-memory key-value store, Neo4j is a graph database, and DynamoDb is a popular persistent key-value store available in Amazon Web Services (AWS). These non-relational databases, although vastly different from one another, are often categorized together under the term "NoSQL" (pronounced "No Sequel"). This simply means that you do not work with them using the SQL language (pronounced "Sequel" or "Ess Queue El"). Relational databases are commonly referred to as "SQL databases" because you usually do work with them using some variation of the SQL language. You will learn more about SQL in the coming lessons.

Many problem domains can be modeled well using a relational database. If you are storing related data, then a relational database is probably a good first choice! For example, you may be storing data about students, teachers, courses, and classrooms. You can imagine that there are relationships between these things. Teachers teach the courses, students enroll in the courses, and the courses are conducted in classrooms. Teachers can teach many courses and students can attend many courses.

A quality of many relational databases is that they support good guarantees about data integrity. They can store and modify data in a way that makes data corruption as unlikely as possible. This means that developers can set up their database to reject "bad" data and not worry about data being "half written". For more information, read about ACID.

These qualities and guarantees come with a price. When the amount of data gets very high, traffic gets very heavy, or many users are trying to make simultaneous updates, a relational database can slow down considerably. It is also challenging and expensive to distribute a relational database across multiple servers. NoSql databases like DynamoDb overcome these limitations. However, a NoSql schema can be difficult to design so that it is flexible and can adapt as the application evolves. A database designer familiar with relational concepts will usually be more successful with a NoSql design.

For these reasons, and because relational databases are arguably the most widely used kind of database, in this class we will study relational databases and the SQL language. SQLite is an embedded relational database that is deployed in a staggeringly high number of devices and applications. Many web developers work with a relational database at least a little bit during their career. And knowing the SQL language is a very portable skill given that there are so many relational databases driven by almost the same language.

### Architectural Fundamentals

Before we proceed, you should understand the basic PostgreSQL system architecture. Understanding how the parts of PostgreSQL interact will make this chapter somewhat clearer.

In database jargon, PostgreSQL uses a client/server model. A PostgreSQL session consists of the following cooperating processes (programs):

A server process, which manages the database files, accepts connections to the database from client applications, and performs database actions on behalf of the clients. The database server program is called postgres.

The user's client (frontend) application that wants to perform database operations. Client applications can be very diverse in nature: a client could be a text-oriented tool, a graphical application, a web server that accesses the database to display web pages, or a specialized database maintenance tool. Some client applications are supplied with the PostgreSQL distribution; most are developed by users.

As is typical of client/server applications, the client and the server can be on different hosts. In that case they communicate over a TCP/IP network connection. You should keep this in mind, because the files that can be accessed on a client machine might not be accessible (or might only be accessible using a different file name) on the database server machine.

The PostgreSQL server can handle multiple concurrent connections from clients. To achieve this it starts (“forks”) a new process for each connection. From that point on, the client and the new server process communicate without intervention by the original postgres process. Thus, the supervisor server process is always running, waiting for client connections, whereas client and associated server processes come and go. (All of this is of course invisible to the user. We only mention it here for completeness.)

#### Relational database vs. noSQL database

Relational databases (RDBMS) and NoSQL databases are two broad categories of database management systems that differ in their data modeling, scalability, and flexibility.

Relational databases are based on the relational database model, which organizes data into tables with rows and columns, where each table represents an entity and each column represents a property or attribute of that entity. Relational databases enforce a strict schema that defines the structure and relationships between tables, and they typically use SQL (Structured Query Language) to retrieve and manipulate data.

In contrast, NoSQL databases (which stands for "not only SQL") are designed to handle unstructured or semi-structured data that does not fit well into the rigid structure of a relational database. NoSQL databases use a variety of data models, such as document-oriented, key-value, column-family, and graph databases, to represent data. NoSQL databases are typically more scalable and flexible than relational databases, as they do not require a fixed schema and can handle large volumes of data and traffic.

Here are some key differences between relational databases and NoSQL databases:

- Data modeling: Relational databases enforce a rigid schema, which can make it difficult to store and manage data that does not fit well into a predefined structure. NoSQL databases are more flexible in their data modeling, allowing developers to store and query data in a way that makes sense for their specific application.

- Scalability: Relational databases are typically vertically scalable, which means that they can handle increased traffic and data volumes by adding more resources (such as CPU, memory, or storage) to a single server. NoSQL databases are designed to be horizontally scalable, which means that they can handle increased traffic and data volumes by adding more servers to a distributed network.

- Query language: Relational databases use SQL as their query language, which provides a powerful and standardized way to retrieve and manipulate data. NoSQL databases do not have a standardized query language, and may require developers to use proprietary or custom query languages.

- ACID compliance: Relational databases are typically ACID (Atomicity, Consistency, Isolation, Durability) compliant, which means that they ensure data consistency and integrity even in the face of system failures or errors. NoSQL databases may not be ACID compliant, and may sacrifice consistency or durability for scalability or performance.

The choice between a relational database and a NoSQL database depends on the specific requirements and characteristics of your application. Relational databases are well-suited for applications with well-defined schemas and structured data, such as financial systems or e-commerce applications. NoSQL databases are better suited for applications with flexible or unstructured data, such as social media platforms or big data analytics.

#### `'sudo service postgresql start'`

The command "sudo service postgresql start" is used to start the PostgreSQL database server on a Linux system. Here is a breakdown of what each part of the command means:

- "sudo": This is a command used in Linux to run another command with elevated privileges. In other words, it allows you to run the following command as a superuser or administrator.

- "service": This is a command used in Linux to manage system services, such as starting or stopping a particular service.

- "postgresql": This refers to the PostgreSQL database server. When you install PostgreSQL on a Linux system, it creates a system service that can be managed using the "service" command.

- "start": This is an argument passed to the "service" command, indicating that you want to start the PostgreSQL service.

So, when you run the command "sudo service postgresql start" in the command line, you are telling the system to start the PostgreSQL service with elevated privileges. This will start the PostgreSQL database server, allowing you to connect to it and work with your databases.

#### `'pgweb'`

pgweb is a web-based interface for managing PostgreSQL databases. It provides a user-friendly web interface that allows users to interact with their PostgreSQL databases without needing to use a command-line interface or a desktop client.

pgweb can be used to perform various database tasks, such as creating and managing database tables, executing SQL queries, and managing users and permissions. It also provides features like syntax highlighting, autocomplete, and a query history, which can make working with databases more efficient.

pgweb is a popular tool for developers and database administrators who need to work with PostgreSQL databases. It is open source and can be easily installed on Linux, macOS, and Windows systems. Additionally, because it is a web-based tool, it can be accessed from any computer or device with a web browser and internet connection, making it a convenient option for remote work or collaboration.

#### `"psql -c '\l'"`

The command "psql -c '\l'" is used to list all the databases available in a PostgreSQL server from the command line. Here's what each part of the command means:

- "psql": This is the command-line interface for interacting with a PostgreSQL database server.

- "-c": This is a command-line option for psql that allows you to execute a single command and then exit. In this case, the command we are executing is '\l'.

- "\l": This is a meta-command that is used within psql to list all available databases in the PostgreSQL server. The backslash '\' indicates that this is a meta-command, and the 'l' stands for "list".

So, when you run the command "psql -c '\l'" in the command line, you are telling the psql command-line interface to execute the '\l' meta-command, which lists all the databases available in the PostgreSQL server. The output will show the name of each database, along with other information like the owner and encoding.

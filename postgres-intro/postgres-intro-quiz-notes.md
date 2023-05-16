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
  - 'sudeo service postgresql status'

## Notes

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

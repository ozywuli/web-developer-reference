---
title: "What are database clusters?"
date: 03-28-2018
---

Run multiple instances of your database on multiple servers
Most effective when your server has multiple CPU cores
Group of resources, aware of each other, trying to achieve the same objective

## Why?

1. data redundancy
   - synchronized
2. load balancing
   - distributes workload among the different instances
   - horizontal scaling
3. high availability
   - 99% availability still means your site will be down 3.6 days of the year
   - work is distributed
   - there are backups
4. monitoring and automation

## Master/slave

- one master server
- all other servers copies the master
- write to master, read from slaves
- good for read heavy traffic

## master/master replication

- two or more servers mirror each other
- good for security and assurance

## distributed data

divide and conquer your data

## Keywords

- master/slave
- master/master replication
- data redundancy -> synchronized
- distributed data
- high availability
- fault tolerance

## References

[https://www.digitalocean.com/community/tutorials/understanding-managed-databases](https://www.digitalocean.com/community/tutorials/understanding-managed-databases)
[https://standardwisdom.com/softwarejournal/2009/09/clustering-vs-load-balancing-what-is-the-difference/](https://standardwisdom.com/softwarejournal/2009/09/clustering-vs-load-balancing-what-is-the-difference/)
[http://www.ndimensionz.com/kb/what-is-database-clustering-introduction-and-brief-explanation/](http://www.ndimensionz.com/kb/what-is-database-clustering-introduction-and-brief-explanation/)
[https://www.quora.com/What-does-database-clustering-mean](https://www.quora.com/What-does-database-clustering-mean)
[https://www.digitalocean.com/community/tutorials/understanding-managed-databases](https://www.digitalocean.com/community/tutorials/understanding-managed-databases)
[https://www.calebcurry.com/database-clustering-tutorial-1-intro-to-database-clustering/](https://www.calebcurry.com/database-clustering-tutorial-1-intro-to-database-clustering/)
[https://www.techopedia.com/definition/17/clustering-databases](https://www.techopedia.com/definition/17/clustering-databases)
[https://www.quora.com/What-is-the-difference-between-server-and-cluster](https://www.quora.com/What-is-the-difference-between-server-and-cluster)